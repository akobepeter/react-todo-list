
import React, { Component } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

import 'bootstrap/dist/css/bootstrap.min.css';
import {v4 as uuid} from 'uuid';

// import uuid from 'uuid';

import './App.css';

export class App extends Component {
    state = {
      items:[],
      id:uuid(),
      item: "",
      editItem:false
    };

    handleChange = (e) =>{
        this.setState({
          item: e.target.value
        });
    }

    //  handle Submit
    handleSubmit = (e) =>{
      e.preventDefault();

      const newItem = {
        id:this.state.id,
        title: this.state.item
      };
      // console.log(newItem);

      const updatedItems = [...this.state.items,newItem];

      this.setState({
        items: updatedItems,
        item: '',
        id:uuid(),
        editItem:false
      })
    }
      
    // clearList
    clearList = (e) =>{
      this.setState({
        items:[]
      })
    }

      // handle Delete
    handleDelete = (id) =>{
      const filteredItems = this.state.items.filter(function(item){
          return item.id !== id
      })

      this.setState({
        items:filteredItems
      })
    }

    //  handle Edit
    handleEdit = (id) =>{

      const filteredItems = this.state.items.filter(function(item){
        return item.id !== id
     })

      const selectedItems = this.state.items.find(function(item) {
         return item.id === id
      })

      console.log(selectedItems);

     this.setState({
      items:filteredItems,
      item:selectedItems.title,
      editItem:true,
      id
     });

    }

  render() {
    return (
      
          
            <div className="container">
              <div className="row">
                <div className="col-10 mx-auto col-md-8 mt-4">
                  <h3 className="text-capitalize text-center">TodoInput</h3>

                 <TodoInput 
                 item={this.state.item} 
                 handleChange={this.handleChange} 
                 handleSubmit={this.handleSubmit}
                 editItem={this.state.editItem}
                 />

                 <TodoList 
                 items={this.state.items} 
                 clearList={this.clearList} 
                 handleDelete={this.handleDelete}
                 handleEdit ={this.handleEdit}
                 />

                </div>
              </div>
            </div>
          
    
    )
  }
}

export default App


