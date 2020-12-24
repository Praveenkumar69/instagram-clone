import React from 'react'

function Sidebar() {

    const [state] = React.useState([
        {id: 1,image:"/Img/pubg.jpg",name: "ravi"},
        {id: 2,image:"/Img/avatar.png",name: "vijay"},
        {id: 3,image:"/Img/06 (2).jpg",name: "kamal"}
    ])

    
    return (
        <div className="sidebar">
            <div className="sidebar_user" >
               <div className="sidebar_user_av">p</div>
               <div className="sidebar_user_name">praveen</div>
            </div>
            <div className="sidebar_list">
            <h3>Suggestions for you</h3>
              {
                  state.map((user)=>(
                    <div className="sidebar_list_user" key={user.id}>
                 <div className="sidebar_list-a">
                     <div className="sidebar_list-a-img">
                         <img src={user.image} />
                     </div>
                     <div className="sidebar_list-a-name">{user.name}</div>
                 </div>
                 <div className="sidebar_list-b">
                     <a href="" >Follow</a>
                 </div>
              </div>
                  ))
              }
            </div>
        </div>
    )
}

export default Sidebar
