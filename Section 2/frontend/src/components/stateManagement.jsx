import React from 'react'
import { useState } from 'react';

const StateManagement = () => {

    let count = 0;

    const [Likes, setLikes] = useState(0);
    const [imglikes, setImagelikes] = useState("");

  return (
    <div><h1>State Management</h1>
    <hr />
    <h1>{count}</h1>

    <button className='btn btn-danger' onClick={ () =>{count++; console.log(count); }}>ADD Count</button>

    <h1>Likes : {Likes}</h1>

    <button className='btn btn-danger' onClick={ () =>{setLikes; console.log(count); }}>ADD Likes</button>

    <input type="text" className='form-control mt-5' onChange={ (e)=> { setImagelikes(e.target.value)}} />
    <label>Insert Image Link Above</label>

    <img src={imglikes} alt="" />

    
    </div>
  )
}

export default StateManagement;