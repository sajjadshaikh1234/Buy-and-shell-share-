// import React, { useEffect, useRef } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { increasenumber, decreasenumber } from '../Action/Action'

// function usePrevious(value) {
//     const ref = useRef();
//     useEffect(() => {
//       ref.current = value;
//     });
//     return ref.current;
//   }

// const Increase = () => {

//     const selector = useSelector((state) => state.changevalue)
//     console.log("select", selector)
//     const dispatch = useDispatch()
//     const prevCount = usePrevious(selector)
//     return (
//         <>
//             <h1>REACT_REDUX INCRE AND DECRE</h1>
//             <button onClick={() => dispatch(increasenumber(1))}>Increament</button>  <br /> <br />
//             <input type="number" value={selector} /><br /><br />
//             <button onClick={() => dispatch(decreasenumber(1))}>decreament</button><br />
//               {/* <div style={{color:"red"}}><h1>{selector}</h1></div> */}
//               {
//                   (prevCount < selector) ? <h1 style={{color:"red"}}>{selector}</h1> :  <h1 style={{color:"red"}}>{selector}</h1>
//               }
//              {
//                  (prevCount < selector )?<h1 style={{color:"violet"}}> INCREMENT</h1>:<h1 style={{color:"green"}}>DEcrement</h1>
//              }
//              {console.log("prevCount",prevCount)}
//         </>
//     )
// }


// export default Increase;