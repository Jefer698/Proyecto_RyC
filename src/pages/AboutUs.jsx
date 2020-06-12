
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Content from '../components/Content';
import AboutUsForm from '../containers/AboutUsForm';


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
         
           <h1 className="about">QUIENES SOMOS</h1>
       </div>
         <NavBar links={links} />
        
             <AboutUsForm/>
             
        

    </>





    );
}
