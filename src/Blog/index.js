import React from 'react';
import axios from 'axios';
import Loading from '../component/Loading';
import BlogCard from '../component/BlogCard';
class Blog extends React.Component {
  constructor(){
    super()
    this.state={
      data:[],
      wait:true
    }
  }
  componentDidMount(){
    axios.get("https://raw.githubusercontent.com/happyze/08-demo/master/data/blogcard.json?aa=113")
      .then(res=> this.setState({data:res.data,wait:false}))
  }
  render () {
    // let cards=data.map((item,i) => <BlogCard {...item} key={i} />)
    return(
      <div className="blog-warp">
        {this.state.wait?<Loading />:this.state.data.map((item,i) =><BlogCard {...item} key={i}/>)}
      </div>
    )
  }
}
export default Blog;
