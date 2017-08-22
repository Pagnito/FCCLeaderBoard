import '../styles/styles.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import RecentList from './components/recentList'
import Header from './components/Header'
import AllTimeList from './components/AllTimeList'


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        leaders30Days: [],
        leadersAllTime: [],
        currentShow: 'showRecent'

    }
    /*this.handleShit = this.handleShit.bind(this);*/
    this.showRecent = this.showRecent.bind(this);
    this.showAllTime = this.showAllTime.bind(this);
    this.getLeadersList = this.getLeadersList.bind(this);
    this.getLeadersListAlltime = this.getLeadersListAlltime.bind(this);
    this.getLeadersList()
    this.getLeadersListAlltime()
  }
  getLeadersList(){
    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
    .then(res => res.json())
    .then(listObj => {
      this.setState({
                     leaders30Days: listObj,
                   })

    }).catch(function(error) {
    console.log('Request failed', error);
  });
  }
  getLeadersListAlltime(){
    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
    .then(res => res.json())
    .then(listObjAll => {
      this.setState({leadersAllTime: listObjAll})
    }).catch(function(error) {
    console.log('Request failed', error);
  });
  }
  /*handleShit() {
    console.log(this.state.leadersAllTime)
  }*/

 showRecent(){
    this.setState({
      currentShow: 'showRecent'
    })
  }
  showAllTime(){
     this.setState({
       currentShow: 'showAllTime'
     })
  }

  render(){
    if(this.state.currentShow=='showRecent'){
      return (
        <div onClick={this.handleShit}>
          <Header showRecent={this.showRecent} showAllTime={this.showAllTime}/>
          <RecentList list={this.state.leaders30Days} />
        </div>
      )
    } else {

      return (
        <div onClick={this.handleShit}>

          <Header showRecent={this.showRecent} showAllTime={this.showAllTime}/>
          <RecentList list={this.state.leadersAllTime} />
        </div>
      )
    }
  }
}
ReactDOM.render(<App />, document.getElementById('jeff'));
