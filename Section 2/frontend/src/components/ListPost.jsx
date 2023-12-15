import React, { useState } from 'react'
import postData from './postData';

const ListPost = () => {
    const [postArray, setpostArray] = useState(postData);

    const addLike =( index)=>{
        const temp = postArray;
        temp[index].like++;
        setpostArray([...temp]);
    
    }  
    return (
    <div>
       <div className='col-md-4 mx-auto'>
        {
           postData.map((post, index)=>{ return <div className='card md-4'> <div className='card-header'>
            <h4 className='m-0'>{post.auther}</h4>
            <p className='m-0'>{post.postedon.toLocaleDateString(undefined,{ day: 'numeric', month: 'long',year: 'numeric'})}
            &nbsp;{post.postedon.toLocaleTimeString()}
            </p>


           </div>
           <div className='card-body'>
            <p className='m-0'>{post.content}</p>
           </div>
           <img className='' src="" alt="" />
           <div className='p-3'>
            <span>{post.like}Likes</span>
            <span>{post.like}comments</span>
            <span>{post.like}Shares</span> &nbsp;&middot;&nbsp;
           </div>
           <div className='card-folder'>
             <div className='row'>
                <div className='col-4'>
                    <button className=' btn-outline-dark w-100 rounded-pill' onClick={() => {addLike(index)}}><i class="fa-regular fa-heart"></i>Likes</button>
                   
                   
                </div>
                <div className='col-4'>
                <button className=' btn-outline-dark w-100 rounded-pill'><i class="fa-solid fa-comment"></i>comment</button>
                </div>
                <div className='col-4'> <button className=' btn-outline-dark w-100 rounded-pill'><i class="fa-solid fa-share"></i>Share</button></div>

             </div>
           </div>
           </div>})  
        }

       </div>
       </div>
  )
}

export default ListPost