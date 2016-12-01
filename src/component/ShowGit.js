import React from 'react';
class ShowGit extends React.Component {
  render () {
    let info = this.props.gitInfo
    let styles = {
      img:{
        width:"100%",
        borderRadius:"50%",
        maxWidth:"130px",
        boxShadow:"rgba(0,0,0,0.35) 0px 3px 5px"
      }
    };
    return(
      <div>
          <img src={info.avatar_url} style={styles.img}/>
          <h3 style={{color: "#607D8B"}}>{info.login}</h3>
          <div className="show-git">
              <p>followers{info.followers}</p>
              <p>follwing{info.follwing}</p>
              <p>public_repos{info.public_repos}</p>
          </div>
      </div>
    )
  }
}
export default ShowGit;
