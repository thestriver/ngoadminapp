import React, { Component } from "react";
import FormVolunteer from './components/FormVolunteer'
import Table from './components/Table';
import Form from './components/Form';
import Volunteers from "./components/Volunteers";
import AddVolunteer from "./components/AddVolunteer";
import TableVolunteer from "./components/TableVolunteer";
import Donors from './components/Donors';
import AddDonor from './components/AddDonor';
import FormDonor from './components/FormDonor'
import TableDonor from "./components/TableDonor";
import Projects from './components/Projects';
import Proposals from './components/Proposals';
import ProposalForm from './components/ProposalForm';
import ProposalTable from './components/ProposalTable';
import ProposalsTable from './components/ProposalsTable';
import ProjectsForm from "./components/ProjectsForm";
import Header from './components/Header';
import SubmitForm from './components/SubmitForm';
import TodoList from './components/ToDoList';
// import Calendar from 'react_google_calendar'
import Reports from './components/Reports'


var todos = [
  {
    todoTitle: "Education Summit",
    todoResponsible: "The Helpmates Foundation",
    todoDescription:
      "To achieve these goals, we believe education is a key tool to creating a world with a more stable socio-economic framework. People’s action coming to play would ensure a faster result-oriented approach to its reality. Ensuring everyone gets quality education is the foundation to creating sustainable economy."    
  },
  {
    todoTitle: "Help the needy",
    todoResponsible: "UWF",
    todoDescription:
      "And slowly, I came to realize that something was missing as well - that without an anchor for my beliefs, without a commitment to a particular community of faith, at some level I would always remain apart, and alone. At every opportunity, they`ve told evangelical Christians that Democrats disrespect their values and dislike their Church, while suggesting to the rest of the country that religious Americans care only about issues like abortion and gay marriage; school prayer and intelligent design.",
    
  },
  
];


class App extends Component {
  constructor() {
    super();

    this.state = {
      idnumber: "",
      idnumber2: "",
      fullname: "",
      fullname2: "",
      phonenumber: "",
      phonenumber2: "",
      email: "",
      email2: "",
      availability: "",
      team: "",
      category: "",
      project: "",
      items: [],

      // Proposals
      formState: {
        id: "",
        id2: "",
        projectName: "",
        projectName2: "",
        projectLead: "",
        projectProgress: "",
        description: "",
        mode: "submit"
      },
      users: [
        {
          id: 0,
          id2: 0,
          projectName: "Save-a-soul",
          projectName2: "Welfare Packages",
          projectLead: "Mahmud",
          projectProgress: "75%",
          description:
            "The Helpmates Youth Foundation has taken it as a point of duty to ensure that children of school age are rightfully in classrooms. Beyond that, we will see to it that each of such children is afforded a fair share of quality education.",
          updating: false
        }
      ],

      tasks: ['Get more donors', 'Social Media Posts', 'Get more volunteers'],
      todos
      
    
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  // Volunteers
  handleFormSubmit = (e) => {
    e.preventDefault();

    let items = [...this.state.items];

    items.push({
      idnumber: this.state.idnumber,
      fullname: this.state.fullname,
      phonenumber: this.state.phonenumber,
      email: this.state.email,
      availability: this.state.availability,
      team: this.state.team
      // username: this.state.username,
      // password: this.state.password
    });

    this.setState({
      items,
      idnumber: "",
      fullname: "",
      phonenumber: "",
      email: "",
      availability: "",
      team: ""
      // username: "",
      // password: ""
    });
  };

  handleInputChange = (e) => {
    let input = e.target;
    let name = e.target.name;
    let value = input.value;

    this.setState({
      [name]: value
    });
  };


  // Donors
  handleFormSubmit2 = (e) => {
    e.preventDefault();

    let items = [...this.state.items];

    items.push({
      idnumber2: this.state.idnumber2,
      fullname2: this.state.fullname2,
      phonenumber2: this.state.phonenumber2,
      email2: this.state.email2,
      category: this.state.category,
      project: this.state.project
    });

    this.setState({
      items,
      idnumber2: "",
      fullname2: "",
      phonenumber2: "",
      email2: "",
      category: "",
      project: ""
      
    });
  };



  handleInputChange2 = (e) => {
    let input = e.target;
    let name = e.target.name;
    let value = input.value;

    this.setState({
      [name]: value
    });
  };


// Proposals
resetFormState = () => {
  this.setState({
    formState: {
      projectName: "",
      projectName2: "",
      projectLead: "",
      projectProgress: "",
      description: "",
      mode: "submit",
      id: "",
      id2: ""
    }
  });
};

onChange = (event) => {
  this.setState({
    formState: {
      ...this.state.formState,
      [event.target.name]: event.target.value
    }
  });
};

//Proposal
onSubmit = (event) => {
  const { users, formState } = this.state;
  event.preventDefault();
  const projectName = event.target.querySelector("input[name='projectName']")
    .value;
  const projectLead = event.target.querySelector("input[name='projectLead']")
    .value;

  // const projectName2 = event.target.querySelector("input[name='projectName2']")
  //   .value;


  // const projectProgress = event.target.querySelector("input[name='projectProgress']")
  //   .value;

  const description = event.target.querySelector("input[name='description']")
    .value;

  if (formState.mode === "submit") {
    this.setState({
      users: [
        ...this.state.users,
        {
          projectName,
          projectLead,
          description,
          // projectName2,
          
          // projectProgress,
          updating: false,
          id: this.state.users[this.state.users.length - 1].id + 1,
          // id2: this.state.users[this.state.users.length - 1].id2 + 1
        }
      ]
    });
  } else if (formState.mode === "edit") {
    const index = users.find((user) => user.id === formState.id).id;
    users[index] = {
      projectName,
      projectLead,
      description,
      // projectName2,
     
      // projectProgress,
      updating: false,
      id: users[index].id,
      // id2: users[index].id2
    };
    this.setState({
      users: [...users]
    });
  }

  this.resetFormState();
};

//Projects
onSubmit2 = (event) => {
  const { users, formState } = this.state;
  event.preventDefault();
  const projectName2 = event.target.querySelector("input[name='projectName2']")
    .value;
  const projectProgress = event.target.querySelector("input[name='projectProgress']")
    .value;

  if (formState.mode === "submit") {
    this.setState({
      users: [
        ...this.state.users,
        {
          
          projectName2,
          
          projectProgress,
          updating: false,
          id2: this.state.users[this.state.users.length - 1].id2 + 1
        }
      ]
    });
  } else if (formState.mode === "edit") {
    const index = users.find((user) => user.id2 === formState.id2).id2;
    users[index] = {
      projectName2,
      projectProgress,
      updating: false,
      id2: users[index].id2
    };

    this.setState({
      users: [...users]
    });
  }

  this.resetFormState();
};




updateUser = (key) => {
  let { users } = this.state;
  users[key].updating = true;

  this.setState({
    formState: { ...this.state.users[key], mode: "edit" },
    users
  });
};

deleteUser = (key) => {
  let { users } = this.state;
  users.splice(key, 1);
  this.setState({
    users: [...users]
  });
};



//To-Do List
handleSubmit = task => {
  this.setState({tasks: [...this.state.tasks, task]});
}
handleDelete = (index) => {
  const newArr = [...this.state.tasks];
  newArr.splice(index, 1);
  this.setState({tasks: newArr});
}


//Reports
handleRemoveTodo(index) {
  this.setState({
    todos: this.state.todos.filter(function (e, i) {
      return i !== index;
    })
  });
}

handleAddTodo(todo) {
  this.setState({ todos: [...this.state.todos, todo] });
}









  //Render

  render() {
    const { users, formState } = this.state;
    return (
      <div className="App">

       
        {/* <ProjectsForm
          formState={formState}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        
        />
        <Projects
          users={users}
          updateUser={this.updateUser}
          deleteUser={this.deleteUser}
        /> */}


        {/* <Proposals /> */}

        {/* <FormVolunteer
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          newIdnumber={this.state.idnumber}
          newFullname={this.state.fullname}
          newPhonenumber={this.state.phonenumber}
          newEmail={this.state.email}
          newAvailability={this.state.availability}
          newTeam={this.state.team}
        />  
        < TableVolunteer items={this.state.items} /> */}

        {/* < AddDonor />
        < Donors /> */}
        
        {/* <FormDonor
          handleFormSubmit2={this.handleFormSubmit2}
          handleInputChange2={this.handleInputChange2}
          newIdnumber={this.state.idnumber2}
          newFullname={this.state.fullname2}
          newPhonenumber={this.state.phonenumber2}
          newEmail={this.state.email2}
          newCategory={this.state.category}
          newProject={this.state.project}
        />  

        < TableDonor items={this.state.items} /> */}

        {/* Proposals */}
        {/* <Proposals
          formState={formState}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        
        />
        <ProposalsTable
          users={users}
          updateUser={this.updateUser}
          deleteUser={this.deleteUser}
        /> */}

        {/* To-Do List */}
        {/* <Header numTodos={this.state.tasks.length} /> */}
        
        {/* <SubmitForm onFormSubmit={this.handleSubmit} />
        <TodoList numTodos={this.state.tasks.length} tasks={this.state.tasks} onDelete={this.handleDelete} /> */}
        
        {/* Reports */}
        {/* <div className="row mt-5">
          <br />
          <Reports onAddTodo={this.handleAddTodo} />
          <hr />
        </div>

        <div className="mt-8 px-48">
          <div className="">
            <ul className="">
              {this.state.todos.map((todo, index) => (
                <li className="list-group-item" key={index}>
                  <h4 className="uppercase font-bold text-2xl mt-6">
                    {todo.todoTitle}{" "}
                    
                  </h4>
                  <p className="text-green-500">
                    <i className="fa fa-user-circle-o" aria-hidden="true"></i>{" "}
                    {todo.todoResponsible}
                  </p>
                  <p className="text-justify">{todo.todoDescription}</p>
                  <button
                    className="mb-6 py-2 px-6 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-300 float-right"
                    onClick={this.handleRemoveTodo.bind(this, index)}
                  >
                    
                    &nbsp;&nbsp; Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
       
        </div> */}
        

      </div>
    );
  }
}

export default App;
