
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Content from '../components/Content';
import ScheduleForm from '../containers/ScheduleForm';
import Header from '../components/Header';
const links=[
    {href: 'home', title: 'HOME'},
    {href: 'assemble', title: 'ARMAR MENÚ'},
    {href: 'branch', title: 'SUCURSALES'},
    {href: 'aboutus', title: 'QUIENES SOMOS'},
    {href: 'contact', title: 'CONTACTO'},
    {href: 'schedule', title: 'HORARIOS'},
    {href: 'login', title: 'CUENTA'}
    
    


];

export default function Schedule(){

    return(

<>
        <Header img="/images/horarios.png"  />
         <NavBar links={links} />
    
             <ScheduleForm/>
             
        

    </>





    );
}
