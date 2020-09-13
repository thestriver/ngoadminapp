import React, {Component} from 'react';
import Field from "./Field";

class ProjectsForm extends Component{

    state={
        curTime : new Date().toLocaleString(),
    }
    render(){
        const formState = this.props.formState;
        const onChange = this.props.onChange;
        const onSubmit2 = this.props.onSubmit2;

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

                    <div class=" text-gray-900 text-2xl mr-40">PROJECTS</div>

                    <p class="w-2/4 ml-32">TODAY: {this.state.curTime}</p>

                    {/* Add Button
                    <div class=" w-2/4 text-right mb-4">
                        <input type="submit" value="Add New Project" class="bg-green-500 text-white font-bold text-lg rounded-sm hover:bg-gray-700 p-2 " /> 
                    </div> */}
                </div> 

                


                {/* Forms */}
                {/* <!-- component --> */}
    <div class=" rounded px-8 pt-2 pb-8 flex flex-col my-2">
        <div class="-mx-3 md:flex mb-2">
            <form className="form" onSubmit={onSubmit2}>
                <fieldset>
                
                <div class="md:w-full px-3  mb-6 md:mb-6">    
                <Field 
                    class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-10 px-4 focus:border-green-500"
                    name="projectName2"
                    label="Project Name"
                    value={formState.projectName2}
                    onChange={onChange}
                />
                </div>
                
                <div class="w-full px-3 md:mb-6">
                <Field className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 focus:border-green-500"
                    name="projectProgress"
                    label="Project Progress"
                    value={formState.projectProgress}
                    onChange={onChange}
                />
                </div>
                
                </fieldset>
                <button className="bg-green-600 text-white font-bold text-lg rounded-sm hover:bg-gray-700 px-10 py-4 cursor-pointer "
                >{formState.mode}</button>
            </form>

                    
            


            {/* <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 focus:border-green-500" id="name" type="text" placeholder="PROJECT NAME" />
            </div>
            
            <div class="md:w-1/2 px-3">
            
             <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 focus:border-green-500" id="lead" type="text" placeholder="PROJECT LEAD" />
            </div> */}

            {/* <div class="md:w-1/2 px-3">
            
            <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 focus:border-green-500" id="budget" type="number" placeholder="ESTIMATED BUDGET" />
            </div> */}
        </div>

        {/* <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-500 text-lg mt-2" for="message">
                DESCRIPTION (including Details, Estimated Budget and Milestones)
            </label>
            <textarea class="no-resize appearance-none block w-full bg-grey-lighter text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-green-500 h-48 resize-none" id="message"></textarea>
            
            <label class="block uppercase tracking-wide text-gray-500 text-lg mt-2" for="message">
                MILESTONES
            </label>
            <textarea class="no-resize appearance-none block w-full bg-grey-lighter text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-green-500 h-48 resize-none" id="message"></textarea>
            
            </div>
        </div> */}

        {/* <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
            
            </div>
        </div> */}

    
        {/* <div class="-mx-3 md:flex ">
        
            <div class="md:w-1/2 px-3 md:mb-0">
                <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="other" type="text" placeholder="OTHER DETAILS" />
            </div>

            <div class="md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-state">
                State
            </label>
            <div class="relative">
                <select class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" id="grid-state">
                <option>New Mexico</option>
                <option>Missouri</option>
                <option>Texas</option>
                </select>
            </div>

            </div>

            <div class="md:w-1/2 px-3 md:mb-0">
                <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="other" type="text" placeholder="OTHER DETAILS" />
            </div>

            <div class="md:w-1/2 px-3">
                <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-zip" type="text" placeholder="OTHER DETAILS" />
            </div>
        </div> */}


        
        {/* 1st */}

        <div class="container mx-auto px-2 py-2">
                    <div class="mt-1">
                        <div class="flex flex-wrap -mx-6">
                            {/* <div class="w-full px-2 sm:w-1/2 xl:w-1/4">
                                <div class="flex items-center px-8 py-6 shadow-sm rounded-md bg-white">
                                    <div >
                                        <img src={"./images/trend.png"} alt="" />
                                    </div>

                                    <div class="mx-5">
                                        <div class="text-gray-500">PROJECT MILESTONE</div>
                                        <h4 class="text-2xl font-semibold text-gray-700">0%</h4>
                                        
                                    </div>
                                </div>
                            </div> */}

                            {/* <div class="w-full mt-6 px-2 sm:w-1/2 xl:w-1/4 sm:mt-0">
                                <div class="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                                    <div>
                                     <img src={"./images/trend.png"} alt="" />
                                    </div>

                                    <div class="mx-5">
                                        <div class="text-gray-500">PROJECT MILESTONE II</div>
                                        <h4 class="text-2xl font-semibold text-gray-700">0%</h4>
                                        
                                    </div>
                                </div>
                            </div> */}

                            {/* <div class="w-full mt-6 px-2 sm:w-1/2 xl:w-1/4 xl:mt-0">
                                <div class="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                                    <div>
                                        <img src={"./images/trend.png"} alt="" />
                                    </div>

                                    <div class="mx-5">
                                        <div class="text-gray-500">PROJECT MILESTONE III</div>
                                        <h4 class="text-2xl font-semibold text-gray-700">0%</h4>
                                        
                                    </div>
                                </div>
                            </div> */}

                            <div class="w-full mt-2 px-2 sm:w-1/2 xl:w-1/4 xl:mt-0">
                                {/* Add Button */}
                                {/* <div class=" text-left">
                                    <input type="submit" value="Save Proposal" class="bg-green-600 text-white font-bold text-lg rounded-sm hover:bg-gray-700 p-4 cursor-pointer " /> 
                                </div> */}
                            </div>

                            
                            

                        </div>
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
        
   
    )
}

}

export default ProjectsForm;