
import React from 'react';
import NavBar from '../components/NavBar';
import CorporateForm from '../containers/CorporateForm';
import HeaderBg from '../components/HeaderBg';
import ContainedButtons from '../components/bu';
const links=[
    {href: 'home', title: 'HOME'},
    {href: 'assemble', title: 'ARMAR MENÚ'},
    {href: 'branch', title: 'SUCURSALES'},
    {href: 'aboutus', title: 'QUIENES SOMOS'},
    {href: 'contact', title: 'CONTACTO'},
    {href: 'schedule', title: 'HORARIOS'},
    {href: 'login', title: 'CUENTA'}
    
    


];

export default function Corporate(){

    return(

<>
     
        <div className="lg">
           <HeaderBg />
           <h1 className="cuenta">CUENTA</h1>
       </div>
         <NavBar links={links} />
    
         <ContainedButtons/>
             
        

    </>





    );
}
