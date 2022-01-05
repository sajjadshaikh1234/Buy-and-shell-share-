import { useEffect, useState } from "react"
import { Viewdata } from "../api/Apidata"

export default (props) => {
    const [detailedId, setDetailId] = useState({})
    // const[loading,setLoading] = useState(f)
    console.log("rrrr", detailedId)



    const gethooksdetail = (requestid) => {

        return Viewdata(requestid).then((result) => {
            setDetailId(result)
        })
    }


    useEffect(() => {
        gethooksdetail(props)

    }, [])
    return [detailedId]

}       