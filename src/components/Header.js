import React, {Component} from 'react';

const Header = (props) => {
    return(
      <div className='card-header'>
        <h1 className='card-header-title header'>
          You have {props.numTodos} Tasks
        </h1>
      </div>
    )
}

export default Header;