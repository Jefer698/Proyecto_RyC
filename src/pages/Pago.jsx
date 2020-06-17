
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Content from '../components/Content';
import PagoForm from '../containers/Pago/PagoForm';



export default function Pago(){

    return(

<>
      
    <div className="Pagobg">
         
           <h1 className="about">Pago</h1>
       </div>
        
        
             <PagoForm/>
             
        

    </>





    );
}
