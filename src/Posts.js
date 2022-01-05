import React, { useState, useEffect, useMemo } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import { Navbar, NavLink, Nav, Container } from 'react-bootstrap'
import { postdata } from './Action/Action';
// import Spinner from './Spinner';
import { Spinner } from 'react-bootstrap'




const Posts = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false)
  const naviagte = useNavigate()

  //   const options = useMemo(() => countryList().getData(), [])

  //   const changeHandler = value => {
  //     setValue(value)
  //   }

  const isresponse = useSelector((state) => state.changevalue.isresponse)
  console.log("response", isresponse)
  const dispatch = useDispatch()



  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const phoneHandler = (e) => {
    setPhone(e.target.value);
  };


  //   if (isResponse) {
  //     // alert('Your data has been submitted successfully');
  //   }

  const clickHandler = (e) => {

    e.preventDefault();
    const details = {
      name: name,
      email: email,
      phone: phone,

      //   country: value.label,
      //  value:value
    };
    dispatch(postdata(details));
    // setLoading(true)
    naviagte("/table")
  };


  return (
    <div className='forms'>

      {/* <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home" style={{color:"gray"}}>cruds</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/products" style={{color:"blueviolet"}}>Home</Nav.Link>
     
      <Nav.Link href="/edit/:id" style={{color:"blueviolet"}}>Updatedetail</Nav.Link>
    </Nav>
    </Container>
  </Navbar> */}


      {
        loading ?
          <Spinner animation="border" />
          :
          <form>
            <div className='form-row'>
              <div className='form-group col-md-6'>
                <label htmlFor='inputName'>NAME</label>
                <input
                  type='text'
                  className='form-control'
                  id='inputName'
                  placeholder='name'

                  onChange={(e) => nameHandler(e)}
                />
              </div>
              <div className='form-group col-md-6'>
                <label htmlFor='inputEmail'>email</label>
                <input
                  type='email'
                  className='form-control'
                  id='inputEmail'
                  placeholder='email'
                  onChange={(e) => emailHandler(e)}
                />
              </div>
            </div>
            <div className='form-row'>
              <div className='form-group col-md-6'>
                <label htmlFor='inputEmail4'>phone</label>
                <input
                  type='text'
                  className='form-control'
                  id='inputEmail4'
                  placeholder='phone'
                  onChange={(e) => phoneHandler(e)}
                />
              </div>

            </div>
            <div className='btn'>
              <button
                type='submit'
                className='btn btn-primary'
                onClick={(e) => {
                  clickHandler(e);
                }}
              >
                Add Edit Data
              </button>

            </div>
          </form>

      }
    </div>
  );
};

export default Posts;