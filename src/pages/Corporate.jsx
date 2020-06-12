
import React from 'react';
import NavBar from '../components/NavBar';
import CorporateForm from '../containers/CorporateForm';


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
     
        <div className="corp">
         
           <h1 className="corpt">CORPORATIVO</h1>
       </div>
         <NavBar links={links} />
    
     
             
        

    </>





    );
}
