import { GetApiData, PostApiData, UpdateData, DeleteData } from "../api/Apidata"
import { GET_PRODUCTS, POST_PRODUCTS, UPDATE_PRODUCT,DELETE_PRODUCTS} from "../Constant"

// export const increasenumber = (number) => 
// {
//     return{
//         type : "INCREAMENT",
//         payload : number
//     }

// }

// export const decreasenumber = (numbers) => {
//     return{
//         type : "DECREAMENT",
//         payload : numbers
//     }
// }


// export const signin = (data) => {
//     return{
//         type : "SIGNIN",
//         payload : data
//     }
// }

// export const regis = (data) => {
//     return {
//         type: "REGISTER",
//         payload: data
//     }
// }



// export const forgetdata = (data) => { 
//     return {
//         type: "FORGET",
//         payload: data
//     }
// }




// export const fetchdata = async (num) => {
//     try {
//         console.log("API CAll")
//         await fetch('https://fakestoreapi.com/products?limit=5').then((res) => {
//             res.json().then((result) => {
//                 console.log("result", result)
//                 if (result) {
//                     return ({
//                         type: "GET_PRODUCTS",
//                         payload: result
//                     })
//                 }

//             })
//         })
//     }

//     catch (error) {
//         console.log("error", error)
//     }


// useEffect(() => {
//     fetchdata(props)
// })



const getdata = () => {

// const[loading,setLoading] = useState(false)
    return function (dispatch) {

        return GetApiData().then((res) => {
            // console.log("Api",res)
            // setLoading(true)
            dispatch({
                type: GET_PRODUCTS,
                payload: res.data
            })
        })
    }
}

const postdata = (request) => {

    console.log(".......request", request)
    return function (dispatch) {
        dispatch({
            type: POST_PRODUCTS,
            payload: false
        })

        return PostApiData(request).then((res) => {
            dispatch({
                type: POST_PRODUCTS,
                payload: true
            })
        })
    }
}

const UpdateDataByid = (request, id) => {

    return function (dispatch) {
        dispatch({
            type: UPDATE_PRODUCT,
            payload: false
        })
        return UpdateData(request, id).then((res) => {
            dispatch({
                type: UPDATE_PRODUCT,
                payload: true
            })
        })
    }

}


const deletedatabyid = (id) => {
    return function (dispatch) {
        dispatch({
            type: DELETE_PRODUCTS,
            payload: false
        })

        return DeleteData(id).then((res) => {
            dispatch({

                type: DELETE_PRODUCTS,
                payload: true
            })
        })
    }
}


export { getdata, postdata, UpdateDataByid,deletedatabyid }
