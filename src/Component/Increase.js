import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increasenumber, decreasenumber } from '../Action/Action'

const Increase = () => {

    const selector = useSelector((state) => state.changevalue)
    console.log("select", selector)
    const dispatch = useDispatch()

    return (
        <>
            <h1>REACT_REDUX INCRE AND DECRE</h1>
            <button onClick={() => dispatch(increasenumber(1))}>Increament</button>  
            <input type="number" value={selector} />
            <button onClick={() => dispatch(decreasenumber(1))}>decreament</button>
              <div style={{color:"red"}}><h1>{selector}</h1></div>
             {
                 (selector+1)?<h1>INCREMENT</h1>:<h1>DEcrement</h1>
             }
        </>
    )
}


export default Increase;