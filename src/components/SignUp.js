import React from 'react';

function SignUp(){
    return (
        <div class="bg-white h-screen">
            <div class="w-full flex flex-wrap">

                {/* Image */}
                <div class="w-1/2 ">
                    <img class="object-cover w-full h-screen hidden md:block" alt="" src="https://source.unsplash.com/LqOO5Ko0zSo" />
                </div>

                 {/* SignUp Section */}
                <div class="w-full md:w-1/2 flex flex-col">
        
                    <div class="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
                        <span class="bg-green-500 text-white font-bold text-xl p-4">NGO Admin</span>
                    </div>
        
                    <div class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
                        <p class="text-center text-3xl text-green-500">Welcome.</p>
                        <p class="text-center  text-green-500">Please fill in your details to get started.</p>
                
                        <form class="flex flex-col pt-3 md:pt-8">
                            {/* <div class="flex flex-col pt-4">
                                <input type="text" id="text" placeholder="First Name" class="shadow appearance-none border rounded w-full py-4 px-4 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            <div class="flex flex-col pt-4">
                                <input type="text" id="text" placeholder="Last Name" class="shadow appearance-none border rounded w-full py-4 px-4  text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                            </div> */}

                            <div class="flex flex-col pt-4">
                                <input type="email" id="email" placeholder="Email Address" class="shadow appearance-none border rounded w-full py-4 px-4  text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
            
                            <div class="flex flex-col pt-4">
                                <input type="password" id="password" placeholder="Password" class="shadow appearance-none border rounded w-full py-4 px-4  text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
            
                            <input type="submit" value="Sign Up" class="bg-green-500 text-white font-bold text-lg hover:bg-gray-700 p-3 mt-8" />
                        </form>
                        <div class="text-center pt-12 pb-12 cursor-pointer">
                            <p class="underline text-green-500 font-semibold">Have an account? Log In here.</p>
                        </div>
                    </div>
        
                </div>  
            </div>
        
        </div>
        
    )
}





export default SignUp;