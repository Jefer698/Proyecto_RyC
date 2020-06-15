
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Content from '../components/Content';
import ComplexGrid from '../containers/WorkForm';
import ActionsInExpansionPanelSummary from '../components/Checklist/Checklist';
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

        <div className="work">
        
           <h1 className="workt">ESCRIBENOS</h1>
       </div>
       <div className="armarbg">
         <NavBar links={links} />
    
             <ActionsInExpansionPanelSummary/>;
             </div>
        

    </>





    );
}
