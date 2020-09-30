import React from 'react';

import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";

// const StyledSideNav = styled.div`   
//     position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
//     height: 100%;
//     width: 75px;     /* Set the width of the sidebar */
//     z-index: 1;      /* Stay on top of everything */
//     top: 3.4em;      /* Stay at the top */
//     background-color: #222; /* Black */
//     overflow-x: hidden;     /* Disable horizontal scroll */
//     padding-top: 10px;
// `;

class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePath: props.location.pathname,
            items: [
                {
                  path: "/",
                  exact: true,
                //   sidebar: () => <div></div>,
                //   main: () => <h2>Home</h2>
                    name: 'Home',
                  
                  key: 1 /* Key is required, else console throws error. Does this please you Mr. Browser?! */
                },
                {
                  path: "/Projects",
                //   sidebar: () => <div></div>,
                //   main: () => <h2>Projects</h2>
                  name: 'Projects',
                  key: 2
                //   css: 'fa fa-fw fa-home',
                   /* Key is required, else console throws error. Does this please you Mr. Browser?! */
                },
                {
                  path: "/FormVolunteer",
                  name: 'Violunteer Form',
                  key: 3
                //   sidebar: () => <div></div>,
                //   main: () => <h2>Volunteers</h2>
                },
                {
                    path: "/FormDonor",
                    name: 'Donor Form',
                    key: 4
                    // exact: true,
                    // sidebar: () => <div></div>,
                    // main: () => <h2>Donors</h2>
                  },
                  {
                    path: "/UnControlledBoard",
                    name: 'Tasks',
                    key: 5
                    // sidebar: () => <div></div>,
                    // main: () => <h2>Tasks</h2>
                  },
                  {
                    path: "/Reports",
                    name: 'Reports',
                    key: 6
                    // sidebar: () => <div></div>,
                    // main: () => <h2>Reports</h2>
                  },
                  {
                    path: "/Proposals",
                    name: 'Proposals',
                    key: 7
                    // sidebar: () => <div></div>,
                    // main: () => <h2>Proposals</h2>
                  }
              ]
              
        }
    }

    onItemClick = (path) => {
        this.setState({ activePath: path });
    }

    render() {
        const { items, activePath } = this.state;
        return(
            <div class="flex flex-col md:flex-row">

            <div class="bg-gray-100 shadow-lg h-16 fixed bottom-0 mt-12 md:relative md:h-screen z-10 w-full md:w-48">
                <div class="md:mt-12 md:w-48 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
            
                    <div class="mt-6 mb-4 text-center">
                        <img class="ml-12 h-14 w-24 rounded-full" src={"/images/user.png"} alt="" />
                        <p className="italic">USER A</p>
                    </div>
                {
                    items.map((item) => {
                        return (
                            <NavItem 
                                path={item.path}
                                name={item.name}
                                // css={item.css}
                                onItemClick={this.onItemClick}
                                active={item.path === activePath}
                                key={item.key}
                            />
                        );
                    })
                }
                 </div>
                </div>
            </div>
            // <StyledSideNav>
            //     {
            //         items.map((item) => {
            //             return (
            //                 <NavItem 
            //                     path={item.path}
            //                     name={item.name}
            //                     css={item.css}
            //                     onItemClick={this.onItemClick}
            //                     active={item.path === activePath}
            //                     key={item.key}
            //                 />
            //             );
            //         })
            //     }
            // </StyledSideNav>
        );
    }
}

const RouterSideNav = withRouter(SideNav);

// const StyledNavItem = styled.div`
//     height: 70px;
//     width: 75px; /* width must be same size as NavBar to center */
//     text-align: center; /* Aligns <a> inside of NavIcon div */
//     margin-bottom: 0;   /* Puts space between NavItems */
//     a {
//         font-size: 2.7em;
//         color: ${(props) => props.active ? "white" : "#9FFFCB"};
//         :hover {
//             opacity: 0.7;
//             text-decoration: none; /* Gets rid of underlining of icons */
//         }  
//     }
// `;

class NavItem extends React.Component {
    handleClick = () => {
        const { path, onItemClick } = this.props;
        onItemClick(path);
    }

    render() {
        const { active } = this.props;
        return(
            <div active={active}>
                <Link to={this.props.path} className={this.props.css} onClick={this.handleClick}>
                    <NavIcon></NavIcon>
                </Link>
            </div>
        );
    }
}

const NavIcon = <div></div>
;

export default class Sidebar extends React.Component {
    render() {
        return (
            <RouterSideNav></RouterSideNav>
        );
    }
}