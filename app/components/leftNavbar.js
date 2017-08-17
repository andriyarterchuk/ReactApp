import React from 'react';

class LeftNavbar extends React.Component {
  render() {
    return (
      <div className="left-navbar">
       <h1 className="navbar-title">Main</h1>
       <ul className="navbar-list">
         <li className="navbar-list-item">
           <a href="" className="navbar-list-item-link">Overview</a>
         </li>
       </ul>
     </div>
    );
  };
}

export default LeftNavbar;