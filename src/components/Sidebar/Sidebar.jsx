import React, { useEffect, useState } from 'react';
import './Sidebar.css'
import { ToastContainer, toast } from 'react-toastify';

const Sidebar = ({sideTime}) => {
    const [updatedTime,setUpdatedTime]=useState(sideTime);
    const [breakTime,setBreakTime]=useState(0);
    useEffect(()=>{
        const getWatchTimeFromLocalStorage=localStorage.getItem('watchTime');
        setUpdatedTime(getWatchTimeFromLocalStorage);
        const getBreakTimeFromLocalStorage=localStorage.getItem('breakTime');
        if(getBreakTimeFromLocalStorage){
            setBreakTime(getBreakTimeFromLocalStorage);
        }
        else{
            setBreakTime(0);
        }


    },[sideTime]);

    const handleBreakTime=(bt)=>{
        localStorage.setItem('breakTime',bt);
        setBreakTime(bt);
    }
    const CompleteBtnHandle=(updatedTime,breakTime)=>{
        toast(`Total watch time without break is: ${updatedTime-breakTime} `);
        console.log(updatedTime,breakTime);
    }


    return (
        <div className='sidebar'>
            <h3>sidebar container</h3>
            <p>Total Watch time: {updatedTime}</p>
            <div className='btn'>
                <h3>Break Time</h3>
                <button onClick={()=>handleBreakTime(15)}>15</button>
                <button onClick={()=>handleBreakTime(30)}>30</button>
                <button onClick={()=>handleBreakTime(45)}>45</button>
                <input type="text" value={breakTime} disabled/>
                <button onClick={()=>CompleteBtnHandle(updatedTime,breakTime)}>Complete</button>
            </div>

        </div>
    );
};

export default Sidebar;