import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home(props) {
    const navigate =  useNavigate()
    const changepage = () => {
        navigate("/register")
    }
    return (
        <div>
            <button onClick={changepage}>Add Button</button>
        </div>
    );
}

    export default Home;