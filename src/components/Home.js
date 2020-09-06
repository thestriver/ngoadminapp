import React, {Component} from 'react';


class Home extends Component{

    state={
        curTime : new Date().toLocaleString(),
    }
    render(){

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

        <div class="bg-gray-100 shadow-lg h-16 fixed bottom-0 mt-12 md:relative md:h-screen z-10 w-full md:w-48">

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
            
            {/* 1st */}

            <div class="container mx-auto px-10 py-8">
                    <div class="mt-6">
                        <div class="flex flex-wrap -mx-6">
                            <div class="w-full px-2 sm:w-1/2 xl:w-1/4">
                                <div class="flex items-center px-8 py-6 shadow-sm rounded-md bg-white">
                                    <div >
                                        <img src={"./images/pro.png"} alt="" />
                                    </div>

                                    <div class="mx-5">
                                        <div class="text-gray-500">Total Projects</div>
                                        <h4 class="text-2xl font-semibold text-gray-700">10</h4>
                                        
                                    </div>
                                </div>
                            </div>

                            <div class="w-full mt-6 px-2 sm:w-1/2 xl:w-1/4 sm:mt-0">
                                <div class="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                                    <div>
                                     <img src={"./images/gr.png"} alt="" />
                                    </div>

                                    <div class="mx-5">
                                        <div class="text-gray-500">Total Volunteers</div>
                                        <h4 class="text-2xl font-semibold text-gray-700">200</h4>
                                        
                                    </div>
                                </div>
                            </div>

                            <div class="w-full mt-6 px-2 sm:w-1/2 xl:w-1/4 xl:mt-0">
                                <div class="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                                    <div>
                                        <img src={"./images/trend.png"} alt="" />
                                    </div>

                                    <div class="mx-5">
                                        <div class="text-gray-500">Next Project</div>
                                        <h4 class="text-2xl font-semibold text-gray-700">75%</h4>
                                        
                                    </div>
                                </div>
                            </div>

                            <div class="w-full mt-6 px-2 sm:w-1/2 xl:w-1/4 xl:mt-0">
                                <div class="flex items-center px-5 py-6 shadow-sm rounded-md bg-green-500">
                                    <div>
                                        <img class="border border-white rounded-full" src={"./images/gr.png"} alt="" />
                                    </div>

                                    <div class="mx-5">
                                        <div class="text-white">Donated Items</div>
                                        <h4 class="text-2xl font-semibold text-white">1,542</h4>
                                        
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>

                {/* WELCOME */}

                <div class="flex xl:px-8 mb-6 ">
                    <p class="w-2/4">WELCOME BACK, <span class="italic">User A</span></p>
                    <p class="w-2/4 ">TODAY: {this.state.curTime}</p>
                </div> 

                {/* Add Button */}
                <div class="text-right mt-2 mb-4 mr-6 ">
                <input type="submit" value="Add New Project" class="bg-green-500 text-white font-bold text-lg rounded-sm hover:bg-gray-700 p-3 " /> 
                </div>
            
                {/* 2ND */}
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-6 px-6">

            <div class="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
                <div class="inline-flex shadow-lg border border-gray-200 rounded-lg overflow-hidden h-20 w-20">
                    <img src={"./images/briefcase-line.png"}
                         alt=""
                         class="h-full w-full" />
                </div>

                <h2 class="mt-4 font-bold text-xl text-green-500 ">PROJECTS</h2>
                
                <p class="text-xs text-gray-500 text-center mt-3">
                This section contains  comprehensive details about the  organization’s projects.
                </p>

                
            </div>

            <div class="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
                <div class="inline-flex shadow-lg border border-gray-200 rounded-lg overflow-hidden h-20 w-20">
                    <img src={"./images/queue.png"}
                         alt=""
                         class="h-full w-full" />
                </div>

                <h2 class="mt-4 font-bold text-xl text-green-500">VOLUNTEERS</h2>

                <p class="text-xs text-gray-500 text-center mt-3">
                This section contains details about the volunteers available to the organization.
                </p>

                
            </div>

            <div class="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
                <div class="inline-flex shadow-lg border border-gray-200 rounded-lg overflow-hidden h-20 w-20">
                    <img src={"./images/heart-care.png"}
                         alt=""
                         class="h-full w-full"/>
                </div>

                <h2 class="mt-4 font-bold text-xl text text-green-500">DONORS</h2>

                <p class="text-xs text-gray-500 text-center mt-3">
                This section contains comprehensive details about the donors interested in sponsoring the NGO’s activities.
                </p>

                
            </div>

            <div class="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
                <div class="inline-flex shadow-lg border border-gray-200 rounded-lg overflow-hidden h-20 w-20">
                    <img src={"./images/edit-list.png"}
                         alt=""
                         class="h-full w-full" />
                </div>

                <h2 class="mt-4 font-bold text-xl text-green-500">TASKS</h2>
                

                <p class="text-xs text-gray-500 text-center mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab enim molestiae nulla.
                </p>

            </div>

        </div>
                
            {/* Footer */}
            <div class="border-t-2 border-gray mt-16 xl:ml-3">
                <span class="text-gray-700 ml-3">MAHMUD ADELEYE © 2020</span>
                <p class="text-gray-500 ml-3">Dissertation Project</p>
            </div>
            
        </div>
        
    </div>
            
</div>
    )
}

}

export default Home;