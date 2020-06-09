
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Content from '../components/Content';
import RegisterForm from '../containers/RegisterForm';
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

export default function Register(){

    return(

<>
        <Header  title="CUENTA"/>
         <NavBar links={links} />
         <Content title="REGISTRO" >
             <RegisterForm/>
             </Content>


    </>





    );
}

