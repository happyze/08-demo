import React from 'react';
import echarts from 'echarts';
class Work extends React.Component {
  componentDidMount(){
    var myChart = echarts.init(document.getElementById('main'));
        myChart.setOption({
          backgroundColor: '#2c343c',

      title: {
          text: 'Customized Pie',
          left: 'center',
          top: 20,
          textStyle: {
              color: '#ccc'
          }
      },

      tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
      },

      visualMap: {
          show: false,
          min: 80,
          max: 600,
          inRange: {
              colorLightness: [0, 1]
          }
      },
      series : [
          {
              name:'master',
              type:'pie',
              radius : '55%',
              center: ['50%', '50%'],
              data:[
                  {value:335, name:'css'},
                  {value:310, name:'java script'},
                  {value:274, name:'jquery'},
                  {value:235, name:'ajax'},
                  {value:400, name:'html'}
              ].sort(function (a, b) { return a.value - b.value}),
              roseType: 'angle',
              label: {
                  normal: {
                      textStyle: {
                          color: 'rgba(255, 255, 255, 0.3)'
                      }
                  }
              },
              labelLine: {
                  normal: {
                      lineStyle: {
                          color: 'rgba(255, 255, 255, 0.3)'
                      },
                      smooth: 0.2,
                      length: 10,
                      length2: 20
                  }
              },
              itemStyle: {
                  normal: {
                      color: '#c23531',
                      shadowBlur: 200,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
              }
          }
      ]
    });
  }
  render () {
    return(
      <div id="main" style={{width:"100%",height:"auto"}}>
      </div>
    )
  }
}
export default Work;
