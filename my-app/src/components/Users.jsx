import React from 'react'


class Users extends React.Component{
    render(){
    const userList = ['aaa','bbb','ccc'];
    
    const items = userList.map(user => <button>{user}</button>)

    return <div>
        <ul>
            {items}
        </ul>
    </div>

    }
}

export default Users