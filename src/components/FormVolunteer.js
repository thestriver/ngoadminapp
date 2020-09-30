import React, { Component } from "react";


class FormVolunteer extends Component {
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
                    <h2 class="text-green-500 font-bold text-2xl">Add Volunteer</h2>
                </div>
                
                {/* PROFILE Form */}
                
                <div class="mt-8">
            
    
                    <div class="mt-4 px-6">
                        <div id="Form" class="p-6  rounded-md shadow-md">
                            <h2 class="text-lg text-gray-700 font-semibold capitalize mb-2">Volunteer Profile</h2>
                            <hr />
                            
                            <form onSubmit={this.props.handleFormSubmit}>
                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">

                                {/* <label htmlFor="username">
                                    Username:
                                    <input
                                    id="username"
                                    value={this.props.newUsername}
                                    type="text"
                                    name="username"
                                    onChange={this.props.handleInputChange}
                                    />
                                    
                                </label> */}


                                    <div>   
                                        <label htmlFor="idnumber">
                                        <input 
                                        id="idnumber"
                                        value={this.props.newIdnumber}
                                        type="number"
                                        name="idnumber"
                                        onChange={this.props.handleInputChange}
                                        
                                        class="shadow appearance-none border rounded w-full py-4 px-4  text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline focus:border-green-600" type="number" placeholder="ID" />
                                    
                                        </label> 
                                    </div>
    
                                    <div>
                                        <label htmlFor="fullname">
                                        <input 
                                        id="fullname"
                                        value={this.props.newFullname}
                                        type="text"
                                        name="fullname"
                                        onChange={this.props.handleInputChange}
                                        
                                        class="shadow appearance-none border rounded w-full py-4 px-4  text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline focus:border-green-600" type="text" placeholder="Full Name" />
                                        
                                        </label>
                                    </div>
    
                                    <div>
                                        <label htmlFor="phonenumber">
                                        <input 
                                        id="phonenumber"
                                        value={this.props.newPhonenumber}
                                        type="number"
                                        name="phonenumber"
                                        onChange={this.props.handleInputChange}
                                        class="shadow appearance-none border rounded w-full py-4 px-4  text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline focus:border-green-600" type="number" placeholder="Phone Number" />
                                    
                                        </label>
                                    </div>
    
                                    <div>
                                        <label htmlFor="email">
                                        <input 
                                        id="email"
                                        value={this.props.newEmail}
                                        type="text"
                                        name="email"
                                        onChange={this.props.handleInputChange}
                                        class="shadow appearance-none border rounded w-full py-4 px-4  text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline focus:border-green-600" type="email" placeholder="Email Address" />
                                    
                                        </label>
                                    </div>
    
                                    <div>
                                        <label htmlFor="availability">
                                        <input 
                                        id="availability"
                                        value={this.props.newAvailability}
                                        type="number"
                                        name="availability"
                                        onChange={this.props.handleInputChange}
                                        class="shadow appearance-none border rounded w-full py-4 px-4  text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline focus:border-green-600" type="number" placeholder="Availability (Weekly)" />
                                   
                                        </label>
                                    </div>
    
                                    <div>
                                    <label htmlFor="team">
                                        <input 
                                        id="team"
                                        value={this.props.newTeam}
                                        type="text"
                                        name="team"
                                        onChange={this.props.handleInputChange}

                                        class="shadow appearance-none border rounded w-full py-4 px-4  text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline focus:border-green-900" type="text" placeholder="Team" />

                                        </label>
                                    </div>
    
                                </div>
    
                                <div class="flex justify-end mt-4">
                                    <button class="px-5 py-3 bg-green-600 text-gray-200 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700" type="submit" value="Submit">Save Profile</button>
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
    
}



export default FormVolunteer;