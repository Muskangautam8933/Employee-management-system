import React, { useState } from 'react';

const Header = (props) => {


  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser','')
   
    props.changeUser('')
    

  }
  return (
    <div className='flex items-end justify-between'>
       <h1 className='text-2xl'>Hello <br /><span className='text-3xl font-semibold'>user 👋</span></h1>
       <button onClick={logOutUser} className='bg-red-600 text-white py-2 px-5 text-lg font-medium rounded-sm'>Log Out</button>
    </div>
  );
}

export default Header;
