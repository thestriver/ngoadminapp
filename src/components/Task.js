import React, {Component} from 'react';
import UncontrolledBoard from './UncontrolledBoard'


class Task extends Component {
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

             {/* Main Content */}
             <div class="flex-1 bg-green-100 pt-2 pb-6 md:pb-2">

                <div className="mb-16 mt-24 text-center bg-green-100 text-green-500 font-bold">
                    <h2 className="text-3xl text-black-100 ">Manage Your Tasks</h2>
                    <p className="font-bold underline ">Create a new task | Drag and drop to the appropriate section or Delete it </p>
                
                </div>
                <div className="md:pl-40 bg-green-100 text-green-500">

                <UncontrolledBoard />
                
                </div>

                {/* Footer */}
                <div class="border-t-2 border-gray mt-64 xl:ml-3">
                        <span class="text-gray-700 ml-3">MAHMUD ADELEYE © 2020</span>
                        <p class="text-gray-500 ml-3">Dissertation Project</p>
                </div>

            </div>
    
    </div>


    )

    }
    
}

export default Task ;

