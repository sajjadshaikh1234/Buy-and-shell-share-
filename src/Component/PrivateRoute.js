// import React from 'react';
// import { useSelector } from 'react-redux';
// import { Navigate, Outlet } from 'react-router-dom';


// export const PrivateRoute = () => {
//     const selector = useSelector((state) => state.changevalue)

//     const auth = localStorage.getItem(selector.userData.email,selector.userData.password) ? localStorage.getItem(selector.userData.email, selector.userData.password) : null
//     return auth ? <Outlet /> : <Navigate to="/" />;
    
// }