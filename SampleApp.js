import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from 'react-router-dom';

import SignUp from './components/SignUp'
import LogIn from './components/LogIn';
import Home from './components/Home'
import SideBar from './components/SideBar';
import Projects from './components/Projects';
import Proposals from './components/Proposals';
import Volunteers from './components/Volunteers';
import AddVolunteer from './components/AddVolunteer';
import Donors from './components/Donors';
import AddDonor from './components/AddDonor';


function App() {
  return (
    // <Router>
    //   <div className="App" >
    //     <ul className="mt-16 text-right cursor-pointer">
    //       <li>
    //         <Link to="/">Home</Link>
    //       </li>
    //       <li>
    //         <Link to="/components/LogIn">Login</Link>
    //       </li>
    //       <li>
    //         <Link to="/components/SignUp">SignUp</Link>
    //       </li>
    //     </ul>

    //     <Switch>
    //       <Route path="/components/LogIn">
    //         <LogIn />
    //       </Route>
    //       <Route path="/components/SignUp">
    //         <SignUp />
    //       </Route>
    //       <Route path="/">
    //         <Home />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
    // <Router>
    // <div class="App flex flex-col md:flex-row">

    // <div class="bg-gray-100 shadow-lg h-16 fixed bottom-0 mt-12 md:relative md:h-screen z-10 w-full md:w-48">

    //         {/* <div class="flex flex-shrink md:w-1/3 justify-center md:justify-start text-white">
    //             <a href="#">
    //                 <span class="text-xl pl-2">
                    
    //                 </span>
    //             </a>
    //         </div> */}

    //     <div class="md:mt-12 md:w-48 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
            
    //         <div class="mt-6 mb-4 text-center">
    //             <img class="ml-12 h-14 w-24 rounded-full" src={"/images/user.png"} alt="" />
    //             <p className="italic">USER A</p>
    //         </div>
            
    //         <hr />

    //         <ul class="list-reset flex flex-row md:flex-col py-0 md:py-3 px-1 md:px-2 text-center md:text-left cursor-pointer">
    //             <li class="mr-3 flex-1 hover:bg-green-600">
                    
    //                 <Link  to="/" class="block py-1 md:py-3 pl-1 align-middle text-white no-underline ">
    //                     <img class="h-4 w-8 pr-0 md:pr-3 inline-block" src={"./images/apps-grid.png"} alt=""/><span class="pb-1 md:pb-0 text-xs md:text-lg text-black md:text-black block md:inline-block">Home</span>
    //                 </Link>
    //             </li>
    //             <li class="mr-3 flex-1 hover:bg-green-600">
                    
    //                 <Link to="/components/LogIn" class="block py-1 md:py-3 pl-1 align-middle text-white no-underline">
    //                 <img class="h-4 w-8 pr-0 md:pr-3 inline-block" src={"./images/briefcase-line.png"} alt=""/><span class="pb-1 md:pb-0 text-xs md:text-lg text-black  md:text-black  block md:inline-block">Projects</span>
    //                 </Link>
    //             </li>
    //             <li class="mr-3 flex-1 hover:bg-green-600">
                    
    //                 <Link to="/components/SignUp" class="block py-1 md:py-3 pl-1 align-middle text-white no-underline">
    //                 <img class="h-4 w-8 pr-0 md:pr-3 inline-block" src={"./images/briefcase-line.png"} alt=""/><span class="pb-1 md:pb-0 text-xs md:text-lg text-black  md:text-black  block md:inline-block">Projects</span>
    //                 </Link>
    //             </li>
    //             <li class="mr-3 flex-1 hover:bg-green-600">
    //                 <a class="block py-1 md:py-3 pl-1 align-middle text-white no-underline">
    //                 <img class="h-4 w-8 pr-0 md:pr-3 inline-block" src={"./images/queue.png"} alt=""/><span class="pb-1 md:pb-0 text-xs md:text-lg text-black  md:text-black  block md:inline-block">Volunteers</span>
    //                 </a>
    //             </li>
    //             <li class="mr-3 flex-1 hover:bg-green-600">
    //                 <a class="block py-1 md:py-3 pl-0 md:pl-1 align-middle text-white no-underline ">
    //                 <img class="h-4 w-8 pr-0 md:pr-3 inline-block" src={"./images/heart-care.png"} alt=""/><span class="pb-1 md:pb-0 text-xs md:text-lg text-black  md:text-black  block md:inline-block">Donors</span>
    //                 </a>
    //             </li>
    //         </ul>

    //         <hr />

            
    //         <ul class="list-reset flex flex-row md:flex-col py-0 md:py-3 px-1 md:px-2 text-center md:text-left">
    //             <li class="mr-3 flex-1 hover:bg-green-600">
    //                 <a  class="block py-1 md:py-3 pl-1 align-middle text-white no-underline">
    //                     <img class="h-4 w-8 pr-0 md:pr-3 inline-block" src={"./images/edit-list.png"} alt=""/><span class="pb-1 md:pb-0 text-xs md:text-base text-black md:text-black block md:inline-block">Tasks</span>
    //                 </a>
    //             </li>
    //             <li class="mr-3 flex-1 hover:bg-green-600">
    //                 <a  class="block py-1 md:py-3 pl-1 align-middle text-white no-underline">
    //                 <img class="h-4 w-8 pr-0 md:pr-3 inline-block" src={"./images/calendar.png"} alt=""/><span class="pb-1 md:pb-0 text-xs md:text-base text-black  md:text-black  block md:inline-block">Calendar</span>
    //                 </a>
    //             </li>
    //             <li class="mr-3 flex-1 hover:bg-green-600">
    //                 <a  class="block py-1 md:py-3 pl-1 align-middle text-white no-underline">
    //                 <img class="h-4 w-8 pr-0 md:pr-3 inline-block" src={"./images/envelope-line.png"} alt=""/><span class="pb-1 md:pb-0 text-xs md:text-base text-black  md:text-black  block md:inline-block">Email</span>
    //                 </a>
    //             </li>
               
    //         </ul>

            



    //     </div>


    // </div>

    //         <Switch>
    //        <Route path="/">
    //          <Home />
    //        </Route>
    //        <Route path="/components/LogIn">
    //          <LogIn />
    //       </Route>
    //        <Route path="/components/SignUp">
    //          <SignUp />
    //       </Route>
    //      </Switch>

    // </div>
    // </Router>
    <div className="App" >
      {/* <SignUp />
      <LogIn /> */}
      <Home /> 
      {/* <SideBar /> */}
      <Projects />
      <Proposals />
      <Volunteers /> 
      <AddVolunteer />
      <Donors />
      <AddDonor />
    
  </div>
  );
}

export default App;
