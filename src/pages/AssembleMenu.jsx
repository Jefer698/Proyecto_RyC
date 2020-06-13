
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Content from '../components/Content';
import BranchOfficeForm from '../containers/BranchOfficeForm';
import ActionsInExpansionPanelSummary from '../containers/AssembleMenu/AssembleMenuForm';
const links=[

    {href: 'home', title: 'HOME'},
    {href: 'assemble', title: 'ARMAR MENÚ'},
    {href: 'branch', title: 'SUCURSALES'},
    {href: 'aboutus', title: 'QUIENES SOMOS'},
    {href: 'contact', title: 'CONTACTO'},
    {href: 'schedule', title: 'HORARIOS'},
    {href: 'login', title: 'CUENTA'}
    
    



];

export default function BranchOffice(){

    return(

<>
        
       <div className="local">
        
           <h1 className="localt">ARMAR MENU</h1>
       </div>
       <div className="armarbg">
         <NavBar links={links} />
      
             <ActionsInExpansionPanelSummary/>
             </div>
       
        

    </>





    );
}
