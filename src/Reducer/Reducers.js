// import { INCREAMENT, DECREAMENT , SIGNIN} from '../Constant'

const initialstate = {
   userData:{}
}

function changevalue(state = initialstate, action)  {
    switch (action.type) {
        case "SIGNIN":
            return {
                ...state,
                userData: action.payload,
            } 
        
            default: return  state;
               
    }
}

export default changevalue;