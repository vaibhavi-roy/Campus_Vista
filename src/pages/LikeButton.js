import React, { useState } from 'react'
import {AiFillLike, AiFillDislike} from 'react-icons/ai'

function LikeButton() {
  const[liked, setLiked] = useState(false);
  const handleClick = () => {
    setLiked(!liked);
  };
  if(liked)
    return (<AiFillLike
      color="blue" 
      size="20" 
      margin-right="20px"
      onClick={handleClick}/>)
  return (<AiFillDislike
    color="red" 
    size="20" 
    margin-right="20px"
    onClick={handleClick}/>)  
}

export default LikeButton