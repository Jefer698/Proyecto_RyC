
import React from 'react';
import NavBar from '../components/NavBar';
// import Footer from '../components/Footer';
// import Content from '../components/Content';
import ScheduleForm from '../containers/ScheduleForm';
import { navLinkUser } from '../data/NavLinks';


export default function Schedule() {

  return (
    <>
      <div className='horario'>
        <h1 className='horariot'>HORARIOS</h1>
      </div>
      <NavBar links={navLinkUser} />
      <ScheduleForm />
    </>
  );
}
