// import { INCREAMENT, DECREAMENT , SIGNIN} from '../Constant'

import { GET_PRODUCTS, POST_PRODUCTS ,UPDATE_PRODUCT , DELETE_PRODUCTS} from "../Constant";

const initialstate = {
//    userData:{
//     // firstname:'sajjad',
//     // lastname:'shaikh',
//     // email:'sajjad@gmail.com',
//     // password:'1111111111'
//    },
//    forgetdata:{},
   products: [],
   isresponse:false,
   isupdate : false,
   isdelete : false
}

function changevalue(state = initialstate, action)  {
    switch (action.type) {
        // case "REGISTER":
        //     return {
        //         ...state,
        //         userData: action.payload,
        //     } 
        //     case "FORGET":
        //         return {
        //             ...state,
        //             userData : [{...state.userData,password:action.payload.newpassword}]
        //         }

                case GET_PRODUCTS:
                    return {
                        // ...state,
                        products: action.payload
                    }   

                    case POST_PRODUCTS:
                        return{
                            isresponse:  action.payload,
                        }

                        case UPDATE_PRODUCT:
                            return{
                                isupdate : action.payload,
                            }
     
                            case DELETE_PRODUCTS:
                                return{
                                    isdelete : action.payload,
                                }
            default: return  state;
               
    }
}

export default changevalue;