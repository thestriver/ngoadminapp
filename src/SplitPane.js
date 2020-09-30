

        <SplitPane
            split="vertical"
            minSize={100}
            defaultSize={100}
            resizerStyle={styles}
            >
         
          <menu>

          <div class="flex flex-col md:flex-row">

              <div class="bg-gray-100 shadow-lg h-16 fixed bottom-0 mt-12 md:relative md:h-screen z-10 w-full md:w-48">
                  <div class="md:mt-12 md:w-48 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">

                  <div class="mt-6 mb-4 text-center">
                      <img class="ml-12 h-14 w-24 rounded-full" src={"/images/user.png"} alt="" />
                      {/* <p className="italic">USER A</p> */}
                  </div>

              <hr />

                  <ul class="list-reset flex flex-row md:flex-col py-0 md:py-3 px-1 md:px-2 text-center md:text-left cursor-pointer">
                      <li class="mr-3 flex-1 hover:bg-green-600">
                      <Link to="/"><a class="block py-1 md:py-3 pl-1 align-middle text-white no-underline ">
                              <img class="h-4 w-8 pr-0 md:pr-3 inline-block" src={"./images/apps-grid.png"} alt=""/><span class="pb-1 md:pb-0 text-xs md:text-lg text-black md:text-black block md:inline-block">Home</span>
                          </a></Link> 
                      </li>

                      <hr />

                      <li class="mr-3 flex-1 hover:bg-green-600">
                      <Link to="/Projects">   <a  class="block py-1 md:py-3 pl-1 align-middle text-white no-underline">
                          <img class="h-4 w-8 pr-0 md:pr-3 inline-block" src={"./images/briefcase-line.png"} alt=""/><span class="pb-1 md:pb-0 text-xs md:text-lg text-black  md:text-black  block md:inline-block">Projects</span>
                          </a></Link>
                      </li>
                          
                      <li className="pl-8 hover:bg-green-300 mb-4"> <Link to="/ProjectsForm"> Add Project</Link> </li>
                          
                      <hr />

                      <li class="mr-3 flex-1 hover:bg-green-600">
                      <Link to="/FormVolunteer">  <a class="block py-1 md:py-3 pl-1 align-middle text-white no-underline">
                          <img class="h-4 w-8 pr-0 md:pr-3 inline-block" src={"./images/queue.png"} alt=""/><span class="pb-1 md:pb-0 text-xs md:text-lg text-black  md:text-black  block md:inline-block">Volunteers</span>
                          </a> </Link>
                      </li>

                      <li className="pl-8 hover:bg-green-300 mb-4"> <Link to="/TableVolunteer"> View Volunteers</Link> </li>

                      <hr />

                      <li class="mr-3 flex-1 hover:bg-green-600">
                      <Link to="/FormDonor"> <a class="block py-1 md:py-3 pl-0 md:pl-1 align-middle text-white no-underline ">
                          <img class="h-4 w-8 pr-0 md:pr-3 inline-block" src={"./images/heart-care.png"} alt=""/><span class="pb-1 md:pb-0 text-xs md:text-lg text-black  md:text-black  block md:inline-block">Donors</span>
                          </a> </Link>
                      </li>
                      <li className="pl-8 hover:bg-green-300 mb-3"> <Link to="/TableDonor"> View Donors</Link> </li>

                  </ul>

                  <hr />

              
                  <ul class="list-reset flex flex-row md:flex-col py-0 md:py-3 px-1 md:px-2 text-center md:text-left">
                      <li class="mr-3 flex-1 hover:bg-green-600">
                      <Link to="/Task">  <a  class="block py-1 md:py-3 pl-1 align-middle text-white no-underline">
                              <img class="h-4 w-8 pr-0 md:pr-3 inline-block" src={"./images/edit-list.png"} alt=""/><span class="pb-1 md:pb-0 text-xs md:text-base text-black md:text-black block md:inline-block">Tasks</span>
                          </a> </Link>
                      </li>

                      <hr />

                      <li class="mr-3 flex-1 hover:bg-green-600">
                      <Link to="/Reports"> <a  class="block py-1 md:py-3 pl-1 align-middle text-white no-underline">
                          <img class="h-4 w-8 pr-0 md:pr-3 inline-block" src={"./images/calendar.png"} alt=""/><span class="pb-1 md:pb-0 text-xs md:text-base text-black  md:text-black  block md:inline-block">Reports</span>
                          </a> </Link>
                      </li>
                      <li className="pl-8 hover:bg-green-300 mb-3"> <Link to="/Display"> View Reports</Link> </li>
                      
                      <hr />

                      <li class="mr-3 flex-1 hover:bg-green-600">
                      <Link to="/Proposals"> <a  class="block py-1 md:py-3 pl-1 align-middle text-white no-underline">
                          <img class="h-4 w-8 pr-0 md:pr-3 inline-block" src={"./images/envelope-line.png"} alt=""/><span class="pb-1 md:pb-0 text-xs md:text-base text-black  md:text-black  block md:inline-block">Proposal</span>
                          </a> </Link>
                      </li>
                      <li className="pl-8 hover:bg-green-300 mb-3"> <Link to="/ProposalsTable"> View Proposal</Link> </li>
                  </ul>

                  

                  


                  </div>

        </div>
        </div>

          </menu>



          <div className="">

              <Route exact path="/" component={Home} />
              
              {/* Projects */}
              <Route path="/Projects">
                <Projects
                    users={users}
                    updateUser={this.updateUser}
                    deleteUser={this.deleteUser}
                  /> 
              </Route>
              <Route path="/ProjectsForm">
                <ProjectsForm
                    formState={formState}
                    onChange={this.onChange}
                    onSubmit={this.onSubmit}
                  
                  />
              </Route>

              {/* Volunteer */}
              <Route path="/FormVolunteer">
                <FormVolunteer
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
                newIdnumber={this.state.idnumber}
                newFullname={this.state.fullname}
                newPhonenumber={this.state.phonenumber}
                newEmail={this.state.email}
                newAvailability={this.state.availability}
                newTeam={this.state.team}
                />  
              </Route>

              <Route path="/TableVolunteer">
                <TableVolunteer items={this.state.items} />
              </Route>

            
              {/* Donor */}
              <Route path="/FormDonor">
                <FormDonor
                  handleFormSubmit2={this.handleFormSubmit2}
                  handleInputChange2={this.handleInputChange2}
                  newIdnumber={this.state.idnumber2}
                  newFullname={this.state.fullname2}
                  newPhonenumber={this.state.phonenumber2}
                  newEmail={this.state.email2}
                  newCategory={this.state.category}
                  newProject={this.state.project}
                /> 
              </Route>
              <Route path="/TableDonor">
                <TableDonor items={this.state.items} />
              </Route>

              {/* Task */}
              <Route path="/Task" component={Task} />

              {/* Reports */}
              <Route path="/Reports">
                <Reports onAddTodo={this.handleAddTodo} />
              </Route>

              <Route path="/Display">
                <Display 
                  // onhandleRemoveTodo={this.handleRemoveTodo}
                  todos={this.state.todos}
                  />
              </Route>
                
                  
              {/* Proposals */}
              <Route path="/Proposals">
                <Proposals
                  formState={formState}
                  onChange={this.onChange}
                  onSubmit={this.onSubmit}
                
                />
              </Route>
              
              <Route path="/ProposalsTable">
                <ProposalsTable
                  users={users}
                  updateUser={this.updateUser}
                  deleteUser={this.deleteUser}
                />
              </Route>

          </div>
        </SplitPane>