import React, { useEffect, useState } from 'react';
import Movie from '../Movie/Movie';
import Sidebar from '../Sidebar/Sidebar';
import './Home.css'

const Home = () => {
    const [sideTime,setSideTime]=useState('');

    const bookNow=(time)=>{
        const previousWatchTime=JSON.parse(localStorage.getItem('watchTime'));
        if(previousWatchTime){
            const timeSum=previousWatchTime+time;
            localStorage.setItem('watchTime',timeSum);
            setSideTime(timeSum);
        }
        else{
            localStorage.setItem('watchTime',time);
            setSideTime(time);
        }
    }
    return (
        <div className='home-container'>
            <div>
                <Movie bookNow={bookNow}></Movie>
            </div>
            <div>
                <Sidebar sideTime={sideTime}>
                </Sidebar>
            </div>
        </div>
    );
};

export default Home;