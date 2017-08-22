import React from 'react'

let RecentList = (props) => {
  if(!props) {
    return <div>Loading </div>
  }
 let list =  props.list.map(function(leader, index){
   var accountLink = 'https://www.freecodecamp.org/'+leader.username;

    return <tr key={index}>
            <td width="5%"className="centerdIndex">{index+1}</td>
            <td id="userName" width="35%">
            <img src={leader.img} className="circle portraits" />
            <a className="link" target="_blank" href={accountLink}>{leader.username}</a></td>
            <td className="centerdIndex">{leader.recent}</td>
            <td className="centerdIndex">{leader.alltime}</td>
          </tr>

  })
  return (
    <table className="highlight">
    <thead>
          <tr >
              <th className="centerdIndex">#</th>
              <th>Name</th>
              <th className="centerdIndex">Points In Past 30 Days</th>
              <th className="centerdIndex">All Time Points</th>
          </tr>
        </thead>
      <tbody>
      {list}
      </tbody>
    </table>
  )
}
export default RecentList
