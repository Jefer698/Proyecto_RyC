
import React from 'react';
import NavBar from '../components/NavBar';
import EnvioForm from '../containers/Envio/EnvioForm';

const links=[

{href: 'home', title: 'HOME'},
{href: 'assemble', title: 'ARMAR MENÚ'},
{href: 'branch', title: 'SUCURSALES'},
{href: 'aboutus', title: 'QUIENES SOMOS'},
{href: 'contact', title: 'CONTACTO'},
{href: 'schedule', title: 'HORARIOS'},
{href: 'login', title: 'CUENTA'}

];

export default function AboutUs(){

    return(

<>
      
    <div className="aboutg">
         
           <h1 className="about">ENVIO</h1>
       </div>
         <NavBar links={links} />
        
             <EnvioForm/>
    </>

    );
}
