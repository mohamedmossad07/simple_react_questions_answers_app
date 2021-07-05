import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title,info}) => {


  const [expanded,setExpanded] =useState(false)

// change status of button expand/shrink
  function changeStatus(){
    setExpanded(! expanded);
  }

  return <article className="question">
    <header>
      <h4>{title}</h4>
      <button className="btn" onClick={changeStatus}>{expanded?<AiOutlineMinus/>:<AiOutlinePlus/>}</button>
    </header>
    {expanded?<p>{info}</p>:''}
    </article>;
};

export default Question;
