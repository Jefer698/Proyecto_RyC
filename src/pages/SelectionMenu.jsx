
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Content from '../components/Content';
import SelectionMenuForm from '../containers/SelectionMenuForm';
import HeaderBg from '../components/HeaderBg';
import CustomizedTables from '../components/Table';

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
    
        <div className="lg">
           <HeaderBg />
           <h1 className="cuenta">CUENTA</h1>
       </div>
         <NavBar links={links} />
    
             <SelectionMenuForm/>
          
             
        

    </>





    );
}
