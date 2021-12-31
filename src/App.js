import logo from './logo.svg';
// import './App.css';
import Shares from './Component/Shares';
import Increase from './Component/Increase';
import Signin from './Signin';


function App() {

  return (
    <div>
      <Shares />
      {/* <Increase /> */}
      <Signin />
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