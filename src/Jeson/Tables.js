import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { getdata, deletedatabyid } from '../Action/Action';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Spinner } from 'react-bootstrap'



const Tables = () => {
  const selector = useSelector((state) => state.changevalue.products)
  const isdelete = useSelector((state) => state.changevalue.isdelete)
  console.log("selector", selector)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    dispatch(getdata())
    setLoading(true)
  }, [])

  if (isdelete) {
    // alert("Data has been delete")
    window.location.reload(false);
  }
  const response = selector ? selector.map((i, index) => {
    // console.log("i",i)
    return (


      <tr key={index}>
        <th scope="row"> {i.id}  </th>
        <td>{i.name}</td>
        <td>{i.email}</td>
        <td>{i.phone}</td>
        <td>

          <span className="material-icons">
            <Link to={`/edit/${i.id}`}>  edit</Link>
          </span>

        </td>
        <td>
          <Link to="/post">Post</Link>
        </td>
        <td>
          <Link to="/table">
          <span className="material-icons text-danger delete_icon" onClick={() => dispatch(deletedatabyid(i.id))}>
            delete
          </span>
          </Link>
         
        </td>
      </tr>
    )
  }) :

    null

  return (
    <div>


      {
        loading ?
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>id</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>PHONE</th>
                <th>edit</th>
                <th>Post</th>
                <th>DELETE</th>
              </tr>
            </thead>
            <tbody>
              {response}
            </tbody>


          </Table>

          :
          <Spinner animation="border"  />


      }


    </div>
  )
}


export default Tables;

