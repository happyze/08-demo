import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
class Loading extends React.Component {
  render () {
    return(
      <div style={{textAlign:"center"}}>
        <CircularProgress size={40} thickness={4} color="#AFB42B"/>
      </div>
    )
  }
}
export default Loading;
