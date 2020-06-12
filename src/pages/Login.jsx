
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Content from '../components/Content';
import LoginForm from '../containers/LoginForm';
import HeaderBg from '../components/HeaderBg';


const links=[

    {href: 'home', title: 'HOME'},
{href: 'assemble', title: 'ARMAR MENÚ'},
{href: 'branch', title: 'SUCURSALES'},
{href: 'aboutus', title: 'QUIENES SOMOS'},
{href: 'contact', title: 'CONTACTO'},
{href: 'schedule', title: 'HORARIOS'},
{href: 'login', title: 'CUENTA'}

    


];

export default function Login(){

    return(

<>
     
       <div className="lg">
           <HeaderBg />
           <h1 className="cuenta">CUENTA</h1>
       </div>
         <NavBar links={links} />
      
         <Content title="Login" >
             <LoginForm/>
             </Content>
            <Footer/>
         

    </>





    );
}



