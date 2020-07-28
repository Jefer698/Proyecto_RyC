
import React from 'react';
import {Redirect} from 'react-router'


export default function Logout() {
  localStorage.removeItem('token')

  return (
   <Redirect to='/' />

  );
}



