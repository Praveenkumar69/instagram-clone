import React from 'react'
import {Redirect} from 'react-router-dom'

function Protected(props) {

    const Cmp = props.cmp;
    var auth = JSON.parse(localStorage.getItem('login'))
    console.warn(auth)
    return (
        <div>
        {
            auth ? <Cmp /> : <Redirect to="/"></Redirect>
        }
        </div>
    )
}

export default Protected
