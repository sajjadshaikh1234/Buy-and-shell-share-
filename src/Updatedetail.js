import React, { useState, useEffect, useMemo } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useNavigate, useParams } from 'react-router-dom';
import { Navbar, NavLink, Nav, Container } from 'react-bootstrap'
import { postdata } from './Action/Action';
import gethooksdetail from "./GetDetails/Getdetail"
import { UpdateDataByid } from "./Action/Action"
import { Spinner } from 'react-bootstrap'



const Updatedetail = (props) => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [loading, setLoading] = useState(false)

    //     const[isloading,setIsloading] = useState()
    const naviagte = useNavigate()

    //   const options = useMemo(() => countryList().getData(), [])

    //   const changeHandler = value => {
    //     setValue(value)
    //   }

    // const isresponse = useSelector((state)=>  state. changevalue.isresponse )
    // console.log("response", isresponse)
    const isupdate = useSelector((state) => state.changevalue.isupdate)
    console.log("isupdate", isupdate)
    const dispatch = useDispatch()
    const [detailedId] = gethooksdetail(id)
    useEffect(() => {
        const data = () => {
            if (detailedId.data) {
                setName(detailedId.data.name)
                setEmail(detailedId.data.email)
                setPhone(detailedId.data.phone)
                setLoading(true)
            }
        }
        data()
    }, [detailedId.data])

    const nameHandler = (e) => {
        setName(e.target.value);
    };

    const emailHandler = (e) => {
        setEmail(e.target.value);
    };

    const phoneHandler = (e) => {
        setPhone(e.target.value);
    };



    const clickHandler = (e) => {

        e.preventDefault();
        const details = {
            name: name,
            email: email,
            phone: phone,
            //   country: value.label,
            //  value:value
        };
        dispatch(UpdateDataByid(details, id));
        setLoading(true)
        naviagte("/table")
    };


    return (

        <div className='forms'>
            {
                loading ? <form>
                <div className='form-row'>
                    <div className='form-group col-md-6'>
                        <label htmlFor='inputName'>NAME</label>
                        <input
                            type='text'
                            className='form-control'
                            id='inputName'
                            placeholder='name'
                            value={name}
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
                            value={email}
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
                            value={phone}
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
      

                    :
                    <Spinner animation="border" />
            }


        </div>
    );
};

export default Updatedetail;