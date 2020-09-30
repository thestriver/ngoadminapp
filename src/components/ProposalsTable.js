import React, { Component } from "react";


class ProposalsTable extends Component {
    render() {
        const updateUser = this.props.updateUser;
        const deleteUser = this.props.deleteUser;
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
        <div class="main-content flex-1 bg-gray-100 md:mt-2 md:pb-5">
            
            {/* Table */}

            
            <div class="antialiased font-sans bg-gray-100 xl:mb-64">
                <div class="container mx-auto px-4 sm:px-8">
                    <div class="py-8">
                    {/* Filter */}
                        <div class="my-2 flex sm:flex-row flex-col">
                            <div class="flex flex-row mb-1 sm:mb-0">
                                <div class="relative">
                                    <select
                                        class="appearance-none h-full rounded-l border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                        <option>10</option>
                                        <option>15</option>
                                        <option>20</option>
                                    </select>
                                    <div
                                        class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                        </svg>
                                    </div>
                                </div>
                                <div class="relative">
                                    <select
                                        class="appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
                                        <option>All</option>
                                        <option>Active</option>
                                        <option>Inactive</option>
                                    </select>
                                    <div
                                        class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="block relative">
                                <span class="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                                    <svg viewBox="0 0 24 24" class="h-4 w-4 fill-current text-gray-500">
                                        <path
                                            d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                                        </path>
                                    </svg>
                                </span>
                                <input placeholder="Search Volunteers"
                                    class="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-3 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
                            </div>

                            {/* Add Button */}
                            {/* <div class="block relative xl:ml-auto ">
                                <input type="submit" value="Add New Volunteer" class="bg-green-500 text-white font-bold text-md rounded-md hover:bg-gray-700 p-3 " /> 
                            </div>  */}
                        </div>
                    

                        {/* Volunteer Table */}
                        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                            <div id="Table" class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                <table class="min-w-full leading-normal">
                                    <thead>
                                        <tr>
                                            
                                            <th
                                                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Project Name
                                            </th>
                                            <th
                                                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Project Lead
                                            </th>
                                            <th
                                                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Descriptions
                                            </th>
                                            <th
                                                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Options
                                            </th>
                                            <th
                                                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Options
                                            </th>
                                            

                                        </tr>
                                    </thead>

                        
                                    <tbody>

                                    {this.props.users.map((user, key) => {
                                        return (
                                        <tr className={`row ${user.updating ? "updating" : ""}`} >
                                            <td  key={user.projectName} class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap">{user.projectName}</p>
                                            </td>
                                            <td key={user.projectLead}  class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap">{user.projectLead}</p>
                                            </td>
                                            <td key={user.description} class="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
                                                <p class="text-gray-900 whitespace-no-wrap"> {user.description}</p>
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
                                            </td>
                                            

                                        </tr>
                                        );
                                        })}

                                        
                                        
                                    
                                    
                                    </tbody>
                                </table>

                                {/* Pagination */}
                                <div
                                    class="px-5 py-10 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
                                    <span class="text-xs xs:text-sm text-gray-900">
                                        Showing 1 to 10 of 50 Entries
                                    </span>
                                    <div class="inline-flex mt-2 xs:mt-0">
                                        <button
                                            class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l m-1">
                                            Prev
                                        </button>
                                        <button
                                            class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r m-1">
                                            Next
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        
                
            {/* Footer */}
            <div class="border-t-2 border-gray mt-auto  xl:ml-3">
                <span class="text-gray-700 ml-3">MAHMUD ADELEYE © 2020</span>
                <p class="text-gray-500 ml-3">Dissertation Project</p>
            </div>
            
        </div>
        
    </div>
            
</div>
    )
    }
}


export default ProposalsTable