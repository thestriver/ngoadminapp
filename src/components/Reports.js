import React, { Component } from "react";

class Reports extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoTitle: "",
      todoResponsible: "",
      todoDescription: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onAddTodo(this.state);
    this.setState({
      todoTitle: "",
      todoResponsible: "",
      todoDescription: ""
    });
  }

  render() {
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

{/* SideBar */}
<div class="flex flex-col md:flex-row">

<div class="bg-gray-100 shadow-lg h-16 fixed bottom-0 mt-12 md:relative md:h-screen z-10 w-full h-screen md:w-48">

        {/* <div class="flex flex-shrink md:w-1/3 justify-center md:justify-start text-white">
            <a href="#">
                <span class="text-xl pl-2">
                
                </span>
            </a>
        </div> */}

    <div class="md:mt-12 md:w-48 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
        
        <div class="mt-6 mb-4 text-center">
            <img class="ml-12 h-14 w-24 rounded-full" src={"/images/user.png"} alt="" />
            <p className="italic">USER A</p>
        </div>
        
        <hr />

        <ul class="list-reset flex flex-row md:flex-col py-0 md:py-3 px-1 md:px-2 text-center md:text-left">
            <li class="mr-3 flex-1">
                <a class="block py-1 md:py-3 pl-1 align-middle text-white no-underline">
                    <img class="h-4 w-8 pr-0 md:pr-3 inline-block" src={"./images/apps-grid.png"} alt=""/><span class="pb-1 md:pb-0 text-xs md:text-lg text-black md:text-black block md:inline-block">Home</span>
                </a>
            </li>
            <li class="mr-3 flex-1">
                <a  class="block py-1 md:py-3 pl-1 align-middle text-white no-underline">
                <img class="h-4 w-8 pr-0 md:pr-3 inline-block" src={"./images/briefcase-line.png"} alt=""/><span class="pb-1 md:pb-0 text-xs md:text-lg text-black  md:text-black  block md:inline-block">Projects</span>
                </a>
            </li>
            <li class="mr-3 flex-1">
                <a class="block py-1 md:py-3 pl-1 align-middle text-white no-underline">
                <img class="h-4 w-8 pr-0 md:pr-3 inline-block" src={"./images/queue.png"} alt=""/><span class="pb-1 md:pb-0 text-xs md:text-lg text-black  md:text-black  block md:inline-block">Volunteers</span>
                </a>
            </li>
            <li class="mr-3 flex-1">
                <a class="block py-1 md:py-3 pl-0 md:pl-1 align-middle text-white no-underline ">
                <img class="h-4 w-8 pr-0 md:pr-3 inline-block" src={"./images/heart-care.png"} alt=""/><span class="pb-1 md:pb-0 text-xs md:text-lg text-black  md:text-black  block md:inline-block">Donors</span>
                </a>
            </li>
        </ul>

        <hr />

        
        <ul class="list-reset flex flex-row md:flex-col py-0 md:py-3 px-1 md:px-2 text-center md:text-left">
            <li class="mr-3 flex-1">
                <a  class="block py-1 md:py-3 pl-1 align-middle text-white no-underline">
                    <img class="h-4 w-8 pr-0 md:pr-3 inline-block" src={"./images/edit-list.png"} alt=""/><span class="pb-1 md:pb-0 text-xs md:text-base text-black md:text-black block md:inline-block">Tasks</span>
                </a>
            </li>
            <li class="mr-3 flex-1">
                <a  class="block py-1 md:py-3 pl-1 align-middle text-white no-underline">
                <img class="h-4 w-8 pr-0 md:pr-3 inline-block" src={"./images/calendar.png"} alt=""/><span class="pb-1 md:pb-0 text-xs md:text-base text-black  md:text-black  block md:inline-block">Calendar</span>
                </a>
            </li>
            <li class="mr-3 flex-1">
                <a  class="block py-1 md:py-3 pl-1 align-middle text-white no-underline">
                <img class="h-4 w-8 pr-0 md:pr-3 inline-block" src={"./images/envelope-line.png"} alt=""/><span class="pb-1 md:pb-0 text-xs md:text-base text-black  md:text-black  block md:inline-block">Email</span>
                </a>
            </li>
           
        </ul>

        



    </div>


</div>

{/* Cards */}
<div class="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5">
    
    {/* Banner */}

    <div class="container mx-auto xl:px-12 xl:py-4">
            <div class="xl:mb-1">
                <div class="-mx-6">
                    

                    
                <div class="">
                    <img class="h-24 w-full" src={"./images/banner.png"} alt="banner" />
                </div>
                    

                    


                </div>
            </div>
        </div>

        {/* WELCOME */}

        <div class="flex xl:px-8">

            <div class=" text-gray-900 text-2xl mr-40">ADD NEW REPORTS</div>

            {/* <p class="w-2/4 ml-32">TODAY: {this.state.curTime}</p> */}

           
        </div> 

        


        {/* Forms */}
        {/* <!-- component --> */}
<div class="rounded px-8 pt-2 pb-8 flex flex-col my-20 ml-6 ">
<div class=" md:flex mb-2 ">

<div className="col">
        
        {/* <h1>Add New Report</h1> */}
        <br />
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              name="todoTitle"
              type="text"
              className="form-control input shadow appearance-none border rounded w-full py-2 px-24 text-center mr-4 text-grey-darker'"
              id="inputTodoTitle"
              value={this.state.todoTitle}
              onChange={this.handleInputChange}
              aria-describedby="Todo Title"
              placeholder="Project Title"
            ></input>
          </div>
          <div className="form-group">
            <label
              htmlFor="inputTodoResponsible"
              className="control-label text-muted text-gray-700"
            >
              <h2>Organization</h2>
            </label>
            <select
              name="todoResponsible"
              type="text"
              className="form-control shadow appearance-none border rounded w-full py-2 px-24 text-center mr-4 text-grey-darker"
              id="inputTodoResponsible"
              value={this.state.todoResponsible}
              onChange={this.handleInputChange}
              aria-describedby="Todo Responsible"
            >
              <option>The Helpmates</option>
              <option>UWF</option>
            </select>
            <br />
          </div>
          {/* <div className="form-group">
              <label htmlFor="inputTodoPriority" className="control-label text-muted"><small>Priority</small></label>
              <select   name="todoPriority"
                        type="text"
                        className="form-control"
                        id="inputTodoPriority"
                        value={this.state.todoPriority}
                        onChange={this.handleInputChange}
                        aria-describedby="Todo Priority">
                <option>lowest</option>
                <option>low</option>
                <option>medium</option>
                <option>high</option>
                <option>emergency</option>
              </select><br/>
            </div> */}
          <div className="form-group">
            <label
              htmlFor="inputTodoDescription"
              className="control-label text-gray-700"
            >
              <h2>Description</h2>
            </label>
            <textarea
              name="todoDescription"
              type="text"
              className="form-control w-full "
              id="inputTodoDescription"
              value={this.state.todoDescription}
              onChange={this.handleInputChange}
              aria-describedby="Todo Description"
            ></textarea>
          </div>

          <div className="form-group">
            <button type="submit" className="mt-4 py-2 px-6 border-2 rounded text-green-500 border-green-500 hover:text-white hover:bg-teal-300 float-left">
              Add New Report
            </button>
          </div>
        </form>
      </div>

</div>

     
        

</div>
    {/* Footer */}
    <div class="border-t-2 border-gray  xl:ml-3">
        <span class="text-gray-700 ml-3">MAHMUD ADELEYE © 2020</span>
        <p class="text-gray-500 ml-3">Dissertation Project</p>
    </div>
    
        
    

</div>
    

    
</div>
    
    
    
    
</div>

);
}
}


export default Reports;