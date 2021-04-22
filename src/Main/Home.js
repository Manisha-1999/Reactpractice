import {Component} from 'react';

const IncNum = () => {
    console.log("clicked");
};
        const Home = () => {
        console.log("hello Home");
        return (
            <>
             <h1>Welcome to Home Page</h1>
             <button onClick={IncNum}> Home </button>
             </>
        );
        };
export default Home;