import React from 'react';


function AddDonor() {
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

        {/* Main Content */}
        <div class="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5">
            
            {/* Banner */}

            <div class="container mx-auto xl:px-12 xl:py-4">
                    <div class="xl:mb-1">
                        <div class="-mx-6">
                        <div class="">
                            <img class="h-40 w-full" src={"./images/banner.png"} alt="banner" />
                        </div>
                        </div>
                    </div>
            </div>
            
            <div class="text-center">
                <h2 class="text-gray-700 text-2xl">Add Donor</h2>
            </div>
            
            {/* PROFILE Form */}
            
            <div class="mt-8">
        

                <div class="mt-4 px-6">
                    <div class="p-6  rounded-md shadow-md">
                        <h2 class="text-lg text-gray-700 font-semibold capitalize mb-2">Donor Profile</h2>
                        <hr />
                        
                        <form>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                               
                                <div>
                                    <input class="shadow appearance-none border rounded w-full py-4 px-4  text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline focus:border-green-600" type="number" placeholder="ID" />
                                </div>

                                <div>
                                    <input class="shadow appearance-none border rounded w-full py-4 px-4  text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline focus:border-green-600" type="text" placeholder="Full Name" />
                                </div>

                                <div>
                                    
                                    <input class="shadow appearance-none border rounded w-full py-4 px-4  text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline focus:border-green-600" type="number" placeholder="Phone Number" />
                                </div>

                                <div>
                                    <input class="shadow appearance-none border rounded w-full py-4 px-4  text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline focus:border-green-600" type="email" placeholder="Email Address" />
                                </div>

                                <div>
                                    <input class="shadow appearance-none border rounded w-full py-4 px-4  text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline focus:border-green-600" type="text" placeholder="Category" />
                                </div>

                                <div>
                                    <input class="shadow appearance-none border rounded w-full py-4 px-4  text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline focus:border-green-900" type="text" placeholder="Project" />
                                </div>

                            </div>

                            <div class="flex justify-end mt-4">
                                <button class="px-5 py-3 bg-green-600 text-gray-200 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">Save Profile</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
                

            {/* 2ND */}
        
                
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



export default AddDonor;