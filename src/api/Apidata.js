import axios from 'axios'

export async function axiosRequest(url, method, headers, params) {
    return params ?
        axios({
            url: url,
            method: method,
            headers: headers,
            data: params,
            timeout: 1000,
        })
        :
        axios({
            url: url,
            method: method,
            headers: headers,
            data: {},
            timeout: 1000,
        })
}



const GetApiData = () => {
    const headers = {
        "Content-type": 'application/json'
    };
    return axiosRequest("http://localhost:3000/details",
        "GET",
        headers,
        {}

    )
}


const PostApiData = (request) => {

    const headers = {
        "Content-type": 'application/json'
    }
    return axiosRequest(
        "http://localhost:3000/details",
        "POST",
        headers,
        request
    )
}


const Viewdata = (id) => {
    const headers = {
        "Content-type": "application/json"
    }

    return axiosRequest(
        "http://localhost:3000/details/" + id,
        "GET",
        headers,
        {}
    )
}


const UpdateData = (data, id) => {
    const headers = {
        "Content-type": "application/json"
    }
    return axiosRequest(
        "http://localhost:3000/details/" + id,
        "PUT",
        headers,
        data
    )
}

const DeleteData = (id) => {
    const headers = {
        "Content-type": "application/json"
    }

    return axiosRequest(
        "http://localhost:3000/details/" + id,
        "DELETE",
        headers,
        {}
    )
}

export { GetApiData, PostApiData, Viewdata, UpdateData ,DeleteData}