
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Content from '../components/Content';
import ContactForm from '../containers/ContactForm';

const links=[
    {href: 'home', title: 'HOME'},
{href: 'assemble', title: 'ARMAR MENÚ'},
{href: 'branch', title: 'SUCURSALES'},
{href: 'aboutus', title: 'QUIENES SOMOS'},
{href: 'contact', title: 'CONTACTO'},
{href: 'schedule', title: 'HORARIOS'},
{href: 'login', title: 'CUENTA'}


];

export default function Work(){

    return(

<>

        
       <div className="contacto">
          
           <h1 className="contactot">CONTACTO</h1>
       </div>   
         <NavBar links={links} />
         
             <ContactForm/>
             
        

    </>





    );
}
