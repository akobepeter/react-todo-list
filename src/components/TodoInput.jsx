import React, { Component } from 'react'
import {FaBook} from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

export class TodoInput extends Component {
    render() {
        const {item,handleChange,handleSubmit, editItem} = this.props;
        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                            {/* <FaTwitter/> */}
                            <FaBook/>
                            </div>
                        </div>
                        <input type="text" className="form-control text-capitalize"  
                        placeholder="add a todo item" 
                        value={item}
                        onChange={handleChange} 
                        />
                    </div>
                </form>
                <button 
                type="submit" 
                className={editItem ? "btn btn-block btn-success mt-3" : "btn btn-block btn-primary mt-3"}
                onClick={handleSubmit}
                >
                {editItem ? "edit item" : "add item"}
                </button>
            </div>
        )
    }
}

export default TodoInput
