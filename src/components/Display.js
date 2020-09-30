import React, { Component } from "react";

class Display extends Component {
  // constructor(props) {
  //   super(props);
   
    
  // }

  render() {
    // const onhandleRemoveTodo = this.props.onhandleRemoveTodo;
    return (
    <div class="bg-gray-100 font-sans leading-normal tracking-normal mt-12">

        {/* Nav */}
        <div class="bg-green-500 pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-full z-20 top-0">

            <div class="flex flex-wrap items-center">
                <div class="flex w-full pt-2 content-center justify-between md:w-1/3 md:justify-end">
                    <ul class="list-reset flex justify-between flex-1 md:flex-none items-center">
                        <li class="flex-1 md:flex-none md:mr-3">
                            <span class="inline-block text-white text-3xl">NGO ADMIN DASHBOARD</span>
                        </li>
                    </ul>
                </div>
            </div>

        </div>

        <div class="flex flex-col md:flex-row">
            {/* Cards */}
         <div class="main-content flex-1 bg-gray-100 mt-12 md:mt-24">

            
            <div className="col md:mb-64 md:mt-12 pl-8 pr-8">
                <ul className="list-group">
                {this.props.todos.map((todo, index) => (
                    <li className="list-group-item" key={index}>
                    <h4 className="list-group-item-heading mb-2 mt-3 font-bold text-xl text-green-700">Project Title :-     
                        {todo.todoTitle}{" "}
                        <small>
                        <span className="mb-2">
                            {todo.todoPriority}
                        </span>
                        </small>
                    </h4>
                    <p className="mb-2">
                        <i className="mb-2" aria-hidden="true"></i>{" "}
                        {todo.todoResponsible}
                    </p>
                    <p className="text-justify mb-6">{todo.todoDescription}</p>

                    <hr />
                    {/* <button
                        className="btn btn-danger btn-sm float-right"
                        onClick={this.onhandleRemoveTodo(index)}
                    >
                        <span>
                        <i className="fa fa-trash-o" aria-hidden="true"></i>
                        </span>
                        &nbsp;&nbsp; Delete
                    </button> */}
                    </li>
                ))}
                </ul>
            </div>

            {/* Footer */}
            <div class="border-t-2 border-gray mt-auto">
                <span class="text-gray-700 ml-3">MAHMUD ADELEYE © 2020</span>
                <p class="text-gray-500 ml-3">Dissertation Project</p>
            </div>
        
          </div>
          
          

        </div>

      </div>
        
    );
  }
}

export default Display;
