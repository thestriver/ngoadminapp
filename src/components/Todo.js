
import React, {Component} from 'react';

const Todo = (props) => {
    return(
      <div className='list-item'>
        {props.content}
        <button class="p-2 ml-4 mb-4 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500" onClick={() => {props.onDelete(props.id)}}>Delete</button>
      </div>
    );
}


export default Todo;