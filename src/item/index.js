import React from 'react';
import marked from 'marked';
class Item extends React.Component {
  render () {
    let content = this.props.params.title==0?"这是第一个页面":
                  this.props.params.title==1?"这是第二哥页面":
                  this.props.params.title==2?"这是第三哥页面":"第n个页面"
    return(
      <div>
        {content}
        {marked("# 666666")}
        <div dangerouslySetInnerHTML={{__html:marked("# 666666")}} />
      </div>
    )
  }
}
export default Item;
