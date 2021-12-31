// import { INCREAMENT, DECREAMENT } from '../Constant'

const initialstate = 0

const changevalue = (state = initialstate, action) => {
    switch (action.type) {
        case "INCREAMENT":
            return state + action.payload;
        case "DECREAMENT" :
            return state - action.payload;
            default : return state;
    }
}

export default changevalue;