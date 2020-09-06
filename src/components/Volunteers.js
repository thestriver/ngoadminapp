import React from 'react';


function Volunteers(){

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
        <div class="main-content flex-1 bg-gray-100 md:mt-2 md:pb-5">
            
            {/* Table */}

            
            <div class="antialiased font-sans bg-gray-100">
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
                            <div class="block relative xl:ml-auto ">
                                <input type="submit" value="Add New Volunteer" class="bg-green-500 text-white font-bold text-md rounded-md hover:bg-gray-700 p-3 " /> 
                            </div> 
                        </div>
                    

                        {/* Volunteer Table */}
                        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                            <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                <table class="min-w-full leading-normal">
                                    <thead>
                                        <tr>
                                            <th
                                                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                ID
                                            </th>
                                            <th
                                                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Volunteer Name
                                            </th>
                                            <th
                                                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Phone Number
                                            </th>
                                            <th
                                                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Email Address
                                            </th>
                                            <th
                                                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Availability (Weekly)
                                            </th>
                                            <th
                                                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Team
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap">01</p>
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap">Vera Olawale</p>
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap"> +23446212020</p>
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap">veraolaw23@yahoo.com</p>
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200  bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap text-center">3</p>
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap">Project UWF</p>
                                            </td>
                                            {/* <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <span
                                                    class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                    <span aria-hidden
                                                        class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                                    <span class="relative">Activo</span>
                                                </span>
                                            </td> */}
                                        </tr>
                                        <tr>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap">01</p>
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap">Vera Olawale</p>
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap"> +23446212020</p>
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200  bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap">veraolaw23@yahoo.com</p>
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 text-center bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap">3</p>
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap">Project THF</p>
                                            </td>
                            
                                        </tr>
                                        
                                        <tr>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap">01</p>
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap">Vera Olawale</p>
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap"> +23446212020</p>
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap">veraolaw23@yahoo.com</p>
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 text-center bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap">3</p>
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap">Project THF</p>
                                            </td>
                            
                                        </tr>

                                        <tr>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap">01</p>
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap">Vera Olawale</p>
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap"> +23446212020</p>
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap">veraolaw23@yahoo.com</p>
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 text-center bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap">3</p>
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap">Project THF</p>
                                            </td>
                            
                                        </tr>

                                        <tr>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap">01</p>
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap">Vera Olawale</p>
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap"> +23446212020</p>
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap">veraolaw23@yahoo.com</p>
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 text-center bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap">3</p>
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap">Project THF</p>
                                            </td>
                            
                                        </tr>

                                        <tr>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap">01</p>
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap">Hassan Onawole</p>
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap"> +23486232010</p>
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap">hassola45@gmail.com</p>
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 text-center bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap">5</p>
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap">Project UWF</p>
                                            </td>
                            
                                        </tr>
                                        <tr>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap">01</p>
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap">Vera Olawale</p>
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap"> +23446212020</p>
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap">veraolaw23@yahoo.com</p>
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap text-center">3</p>
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap">Project THF</p>
                                            </td>
                            
                                        </tr>
                                        
                                        <tr>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap">01</p>
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap">Hassan Onawole</p>
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap"> +23486232010</p>
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap">hassola45@gmail.com</p>
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 text-center bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap">5</p>
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap">Project UWF</p>
                                            </td>
                            
                                        </tr>

                                        <tr>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap">01</p>
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap">Hassan Onawole</p>
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap"> +23486232010</p>
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap">hassola45@gmail.com</p>
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 text-center bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap">5</p>
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p class="text-gray-900 whitespace-no-wrap">Project UWF</p>
                                            </td>
                            
                                        </tr>

                                        

                                    
                                    
                                    </tbody>
                                </table>

                                {/* Pagination */}
                                <div
                                    class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
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


export default Volunteers;