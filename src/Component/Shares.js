import React, { useState } from 'react'
import '../App.css'
// import bootstrap from 'bootstrap'
import "../Component/Table.css"

const Shares = () => {

    // const[increase,setIncrease] = useState(0);

    // const increasing = () => {
    //     setIncrease(increase+1)
    // if (Shareing())  {
    //     Shareing()
    // } 
    // }

    // const[data,setData] = useState(400)
    // const Shareing =() => {
    // setData(data-1) 
    // }

    // const[value,setValue] = useState(2700)
    // const changevalue = () => {
    // setValue(value+1)
    // }

    // const[detail,setDetail] = useState(2700)
    // const changehandler = () => {    
    // setDetail(detail-1)
    // }
    const [shervalue, setShervalue] = useState(400)
    const [inputvalue, setInputvalue] = useState(0)




    const [bidPrice, setBidprice] = useState(2700)
    const [value, setValue] = useState(0)
    // data is cuurent value and prev is prevois value



    const changeprice = (current) => {
        setInputvalue((pre) => {
            console.log("previos", pre)
            console.log("current", current)
            console.log("bidprice", bidPrice)

            setInputvalue(parseInt(current))
            setBidprice(parseInt(bidPrice))

            if (parseInt(pre) >= parseInt(current)) {
                setBidprice(parseInt(bidPrice) - parseInt(current) + parseInt(pre) - 1)
            }
            else {
                setBidprice(parseInt(bidPrice) + parseInt(current) - 1)
            }
        })
    }


    const changehandlers = (data) => {
        setInputvalue((prev) => {
            // console.log(prev, 'prev')
            // console.log(data, "data")
            // console.log(shervalue, "shervalue") 
            setInputvalue(parseInt(data))
            setShervalue(parseInt(shervalue))

            
            if (parseInt(prev) <= parseInt(data)) {
                if (currentRadioValue === "BUY") {
                    // setShervalue(parseInt(shervalue))
                    setShervalue(parseInt(shervalue) - parseInt(data) + parseInt(prev))
                }
                else {
                    changeprice(data)
                }
            }
            else {
                setShervalue(parseInt(shervalue) + parseInt(prev) - parseInt(data))
            }
        })
    }
    // const[data,setData] = useState()

    //     const changeValue = () => {

    //     }
    const [currentRadioValue, setCurrentRadioValue] = useState("BUY")
    const handleRadioChange = (e) => {
        setCurrentRadioValue(e.target.value);
        // console.log(",,,,,,,", currentRadioValue)
    };
    console.log("currentRadioValue", currentRadioValue)

    // if(currentRadioValue("BUY")) {

    // }

    if (inputvalue >= 0) {
        return (

            <>
                <div className="col-sm-6">
                    <div className="form-group shiny-input-container">
                        <label for="amount2">Number of Shares</label>
                        <input id="amount2" type="number" className="form-control shiny-bound-input" value={inputvalue}
                            onChange={e => changehandlers(e.target.value)} />
                    </div>
                </div>

                <div>
                    <input
                        id="radio-item-1"
                        name="radio-item-1"
                        type="radio"
                        value="BUY"
                        onChange={handleRadioChange}
                        checked={currentRadioValue === 'BUY'}

                    />
                    <label htmlFor="radio-item-1">Buy</label>
                </div>
                <div>
                    <input
                        id="radio-item-2"
                        name="radio-item-2"
                        type="radio"
                        value="SELL"
                        onChange={handleRadioChange}
                        checked={currentRadioValue === 'SELL'}
                    />
                    <label htmlFor="radio-item-2" >
                        Sell
                    </label>
                </div>


                <table>
                    <tr>
                        <th></th>
                        <th>Price</th>
                        <th> Ask Size</th>

                    </tr>

                    <tr>

                        <td></td>
                        <td>11.42</td>
                        <td> 900 </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>11.41</td>
                        <td> 1,400 </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>11.40</td>
                        <td>1,205</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>11.39 </td>
                        <td>1,600 </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>11.38</td>
                        <td> {shervalue}</td>
                    </tr>

                </table>
                <div>
                    <table>
                        <tr>
                            <th> </th>
                            <th>Price</th>
                            {/* <th> Ask Size</th> */}

                        </tr>

                        <tr>

                            <td>{bidPrice} </td>
                            <td>11.42</td>
                            <td>  </td>
                        </tr>
                        <tr>
                            <td>1,100 </td>
                            <td>11.41</td>
                            <td> </td>
                        </tr>
                        <tr>
                            <td> 1,100  </td>
                            <td>11.40</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>  1,600  </td>
                            <td>11.39 </td>
                            <td> </td>
                        </tr>
                        <tr>
                            <td> 700   </td>
                            <td>11.38</td>
                            <td></td>
                        </tr>

                    </table>
                </div>
            </>
        )
    }
    else {
        return (
            <>
                <table>
                    <tr>

                        <div className="col-sm-6">
                            <div className="form-group shiny-input-container">
                                <label for="amount2">Number of Shares</label>
                                <input id="amount2" type="number" className="form-control shiny-bound-input" value={inputvalue}
                                    onChange={e => changehandlers(e.target.value)} />
                            </div>
                        </div>

                        <td>  Number of Share</td>

                    </tr>
                </table>
            </>
        )
    }



}

export default Shares;