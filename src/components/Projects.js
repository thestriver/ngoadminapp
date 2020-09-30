import React, {Component, useState} from 'react';


class Projects extends Component{
    
    state={
        curTime : new Date().toLocaleString(),
    }
    render(){
        const updateUser = this.props.updateUser;
        // const deleteUser = this.props.deleteUser;
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

        {/* Cards */}
        <div class="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5">
            
            {/* Banner */}

            <div class="container mx-auto xl:px-12 xl:py-4">
                    <div class="xl:mb-1">
                        <div class="-mx-6">
                            

                            
                        <div class="">
                            <img class="h-32 w-full" src={"./images/banner.png"} alt="banner" />
                        </div>
                            

                            


                        </div>
                    </div>
            </div>

                {/* WELCOME */}

                <div class="flex xl:px-8">

                    {/* <div class=" relative text-gray-600 text-2xl mr-24">
                        <input type="search" name="search" placeholder="Search" class="bg-white h-12 px-32 pr-10 rounded-full text-sm focus:outline-none" />
                        <button type="submit" class="absolute right-0 top-0 mt-3 mr-4" >
                        <img src={"./images/search-line.png"} class="h-6 w-6" alt="search" />
                        </button>
                    </div> */}

                    <p class="w-2/4 text-xl text-green-500 ">TODAY: {this.state.curTime}</p>

                    {/* Add Button */}
                    <div class=" w-2/4 text-right mb-4">
                        <input type="submit" value="Add New Project" class="bg-green-500 text-white font-bold text-lg rounded-sm hover:bg-gray-700 p-2 " /> 
                    </div>
                </div> 

                


                {/* 2 Grids */}

                <div class="flex xl:px-8 mb-2 ">

                    <div class="w-1/3">

                    <div class="flex flex-col">
                        <div class=" overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                            <div class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                                <table class="min-w-full">
                                    <thead>
                                    <tr>
                                        <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Current Projects</th>
                                       
                                       
                                        <th class="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
                                    </tr>
                                    </thead>

                                    <tbody class="bg-white">

                                    {this.props.users.map((user, key) => {
                                        return (
                                        <tr className={`row ${user.updating ? "updating" : ""}`} >
                                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <div class="flex items-center">
                                                    <div class="flex-shrink-0 h-10 w-10">
                                                        <img class="h-10 w-10 rounded-full" src={"./images/pro.png"}  alt="table" />
                                                    </div>

                                                    <div class="ml-16">
                                                        <div  key={user.projectName2} class="text-sm leading-5 font-medium text-gray-900">{user.projectName2}</div>
                                                        <div key={user.projectProgress} class="text-sm leading-5 text-gray-500">{user.projectProgress}</div>
                                                    </div>
                                                </div>
                                            </td>

                                        

                                            <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                                                    <button className="icon" onClick={() => updateUser(key)}>
                                                        Edit
                                                    </button>
                                            </td>

                                            {/* <td  key={user.projectName2} class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap">{user.projectName2}</p>
                                            </td>
                                            <td key={user.projectLead2}  class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap">{user.projectLead2}</p>
                                            </td>
                                            <td key={user.prog} class="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
                                                <p class="text-gray-900 whitespace-no-wrap"> {user.projectProgress}</p>
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm w-1/6 max-w-xl">
                                                <button className="icon" onClick={() => updateUser(key)}>
                                                    Edit
                                                </button>
                                            </td>
                                            <td  class="px-5 py-5 border-b border-gray-200  bg-white text-sm w-1/6">
                                                <button className="icon" onClick={() => deleteUser(key)}>
                                                    Delete
                                                </button>
                                            </td> */}
                                            

                                        </tr>
                                        );
                                    })}
                                    {/* <tr>
                                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                            <div class="flex items-center">
                                                <div class="flex-shrink-0 h-10 w-10">
                                                    <img class="h-10 w-10 rounded-full" src={"./images/pro.png"}  alt="table" />
                                                </div>

                                                <div class="ml-16">
                                                    <div class="text-sm leading-5 font-medium text-gray-900">{user.projectName2}</div>
                                                    <div class="text-sm leading-5 text-gray-500">{user.projectProgress}</div>
                                                </div>
                                            </div>
                                        </td>

                                        

                                        <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                                                <button className="icon" onClick={() => updateUser(key)}>
                                                    Edit
                                                </button>
                                        </td>
                                    </tr> */}
                                  
                               

                                    <tr>
                                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                            <div class="flex items-center">
                                                <div class="flex-shrink-0 h-10 w-10">
                                                    <img class="h-10 w-10 rounded-full" src={"./images/pro.png"}  alt="table" />
                                                </div>

                                                <div class="ml-16">
                                                    <div class="text-sm leading-5 font-medium text-gray-900">Education Summit</div>
                                                    <div class="text-sm leading-5 text-gray-500">50%</div>
                                                </div>
                                            </div>
                                        </td>

                                        

                                        <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                                            <a href="#" class="text-green-600 hover:text-indigo-900">Edit</a>
                                        </td>
                                    </tr>

                                    

                                    </tbody>
                                </table>
                            </div>
                            
                            {/* <div>
                            <Calendar
                                onChange={onChange}
                                value={value}
                            /> 
                            </div> */}


                        </div>
                    </div>

                    </div>


                    <div class="w-2/3 mt-4">

                         <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 gap-6 xl:pl-6">

                         <div class="items-center px-5 py-6 shadow-sm rounded-md bg-white ">
                                    <div class="flex xl:pt-8 mb-8">
                                        <div class="xl:pl-8">
                                            <img src={"./images/trend.png"} alt="" />
                                        </div>

                                        <div class="mx-5">
                                            <div class="text-xl font-bold text-green-500">Next Project</div>
                                            <h4 class="text-2xl font-semibold text-gray-500">75%</h4>
                                            
                                        </div>
                                    </div>
                                    

                                    <input class="rounded-lg overflow-hidden appearance-none bg-green-600 h-3 w-full " type="range" min="1" max="100" step="1" value="75" />
                            </div>

                            <div class="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
    <div class="inline-flex overflow-hidden h-20 w-20">
        <img src={"./images/pro.png"}
             alt=""
             class="h-full w-full" />
    </div>

    <h2 class="mt-4 font-bold text-xl text-green-500">REPORTS</h2>

    <p class="text-xs text-gray-500 text-center mt-3">
    Create new reports and view existing ones.
    </p>

    
</div>

        <div class="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
            <div class="inline-flex   rounded-lg overflow-hidden h-20 w-20">
                <img src={"./images/pro.png"}
                    alt=""
                    class="h-full w-full"/>
            </div>

            <h2 class="mt-4 font-bold text-xl text text-green-500">PROPOSALS</h2>

            <p class="text-xs text-gray-500 text-center mt-3">
            Create new project proposals.
            </p>

            
        </div>

        <div class="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
            <div class="inline-flex shadow-lg bg-green-600 border border-gray-200 rounded-full overflow-hidden h-20 w-20">
                <img src={"./images/edit-list.png"}
                    alt=""
                    class="h-full w-full" />
            </div>

            <h2 class="mt-4 font-bold text-xl text-green-500">TASKS</h2>
            

            <p class="text-xs text-gray-500 text-center mt-3">
                Be more productive. Set and achieve new tasks for the day.
            </p>

        </div>

</div>

                    </div>


                </div>
            
                {/* 2ND */}
        
                
            {/* Footer */}
            <div class="border-t-2 border-gray mt-12">
                <span class="text-gray-700 ml-3">MAHMUD ADELEYE © 2020</span>
                <p class="text-gray-500 ml-3">Dissertation Project</p>
            </div>
            
        </div>
        
    </div>
            
</div>
    )
}

}

export default Projects;