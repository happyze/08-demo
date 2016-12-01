import React from 'react';
import {Link} from 'react-router';
class NavFooter extends React.Component {
  render () {
    return(
      <div className="nav-footer">
          <Link to="/" activeStyle={{color:"#455A64"}} onlyActiveOnIndex={true}><span className="glyphicon glyphicon-home" aria-hidden="true"></span><br/>Home</Link>
          <Link to="blog" activeStyle={{color:"#455A64"}}><span className="glyphicon glyphicon-link" aria-hidden="true"></span><br/>Blog</Link>
          <Link to="work" activeStyle={{color:"#455A64"}}><span className="glyphicon glyphicon-lock" aria-hidden="true"></span><br/>Work</Link>
          <Link to="about" activeStyle={{color:"#455A64"}}><span className="glyphicon glyphicon-user" aria-hidden="true"></span><br/>About</Link>
      </div>
    )
  }
}
export default NavFooter;
