import React from 'react';
import NavHeader from './component/NavHeader';
import NavFooter from './component/NavFooter';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import LeftNav from './component/LeftNav';
class App extends React.Component {
  constructor(){
    super()
    this.state={
      title:"Home",
      showLeftNav:false
    }
  }
  getChildContext(){
    return{
      muiTheme:getMuiTheme()
    }
  }
  componentWillReceiveProps(){
    this.setTitle()
  }
  componentWillMount(){
    this.setTitle()
    if(window.innerWidth>760){
      this.setState({showLeftNav:true})
    }
  }
  setTitle(){
    this.setState({
      title:this.context.router.isActive("/",true) ? "Home" :
      this.context.router.isActive("blog") ? "Blog" :
      this.context.router.isActive("work") ? "Work" :
      this.context.router.isActive("about") ? "About" : "Blog"
    })
  }
  render () {
    return(
      <div className="my-wrap">
          {this.state.showLeftNav ? <LeftNav title={this.state.title}/>:<NavHeader title={this.state.title}/>}
          <div className="main">
            {this.props.children}
          </div>
          {this.state.showLeftNav ? null: <NavFooter />}

      </div>
    )
  }
}
App.contextTypes = {
  router:React.PropTypes.object
}
App.childContextTypes = {
  muiTheme:React.PropTypes.object
}
export default App;
