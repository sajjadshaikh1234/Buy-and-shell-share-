import logo from './logo.svg';
// import './App.css';
import Shares from './Component/Shares';
import Increase from './Component/Increase';
import Login from './Login';
import Testing from './Testing';
import Register from './Register';
import { BrowserRouter as Router, Route, Switch, Link, Routes } from 'react-router-dom';
import Home from './Home';

function App() {

  return (
    <div>
      <Shares />
      {/* <Increase /> */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login /> } />
          <Route exact path="/register" element={<Register  />} />
              
      {/* <Testing /> */}

      </Routes>
 
      </Router>
    </div>
  );
}

export default App;

// else {
  //     changeprice(data)
  // }

  // else {
  //     setShervalue(parseInt(shervalue) + parseInt(prev) - parseInt(data))
  // }

// const changehandlers = (data) => {
//     setShervalue(parseInt(400))
//     setInputvalue((prev) => {
//         // console.log(prev,'prev')
//         // console.log(data,"data")
//         // console.log(shervalue,"shervalue")
//         setInputCvalue(parseInt(prev))
//         setInputvalue(parseInt(data))
// console.log("....",inputCvalue)
//     })
//     if (inputvalue > inputCvalue) {
//         setShervalue(parseInt(shervalue) - parseInt(inputvalue))
//     }

//     else {
//         setShervalue(parseInt(shervalue) + parseInt(inputvalue))
//     }
// }