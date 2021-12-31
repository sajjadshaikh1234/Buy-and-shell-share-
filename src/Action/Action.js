import Constant from "../Constant"

export const increasenumber = (number) => 
{
    return{
        type : "INCREAMENT",
        payload : number
    }
   
}

export const decreasenumber = (numbers) => {
    return{
        type : "DECREAMENT",
        payload : numbers
    }
}



