import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';
import Loading from '../component/Loading';
import ShowGit from '../component/ShowGit';
class About extends React.Component {
  constructor(){
    super()
    this.state={
      data:{},
      //0 没搜索 1 后台还没响应 2 数据接收完
      wait:0
    }
  }
  handleSubmit(e){
    e.preventDefault()
    this.setState({
      wait:1
    })
    let value = this.refs.gitname.getValue()
    axios.get(`https://api.github.com/users/${value}`)
      .then(res =>this.setState({data:res.data,wait:2}) )
      .catch( error => {alert(error);this.setState({wait:0})})
    this.refs.form.reset()
  }
  render () {
    let showGitinfo = this.state.wait==0?null:
      this.state.wait == 1?<Loading />:<ShowGit gitInfo={this.state.data}/>
    return(
      <div className="about-wrap">
        <div className="git-card">
          <h2>Search Git Info</h2>
          <form className="about-form" onSubmit={this.handleSubmit.bind(this)} ref="form">
          <TextField hintText="The hint" ref="gitname" style={{width:"57%"}}/>
          <RaisedButton label="search" onClick={this.handleSubmit.bind(this)} secondary={true} style={{marginLeft:"15px"}}/>
          </form>
          {showGitinfo}
        </div>
      </div>
    )
  }
}
export default About;
