import React from 'react';
import BlogCard from '../component/BlogCard';
let data=[
  {index:1,title:"hello",desc:"11111"},
  {index:1,title:"hello",desc:"2222222"},
  {index:1,title:"hello",desc:"33333333"}
]
class Blog extends React.Component {
  render () {
    let cards=data.map((item,i) => <BlogCard {...item} key={i} />)
    return(
      <div className="blog-warp">
        {cards}
      </div>
    )
  }
}
export default Blog;
