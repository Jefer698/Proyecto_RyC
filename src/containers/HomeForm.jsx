import React from 'react';



export default class HomeForm extends React.Component{



    

render(){
 

    return(
     <>

     
     <h1 className="rico">RICO Y SANO</h1>
        <div className="lis1">
        <div className="opciones">
        <a href="selection" className="text">SELECCIONAR MENU</a>
        </div>
        <div className="opciones">
        <a href="assemble" className="text2">ARMAR MENU</a>
        </div>
        <div className="opciones">
        <a href="branch" className="text3">SUCURSALES</a>
        </div>
        </div>
        <div className="lis2">
        <div className="opciones">
        <a href="aboutus" className="text4">QUIENES SOMOS</a>
        </div>
        <div className="opciones">
        <a href="contact" className="text5">CONTACTO</a>
        </div>
        <div className="opciones">
        <a href="schedule" className="text6">HORARIOS DE ATENCION</a>
        </div>
        </div>
        <div className="lis2">
        <div className="opciones">
        <a href="work" className="text7">ESCRIBENOS</a>
        </div>
        <div className="opciones">
        <a href="login" className="text8">INICIAR SESION</a>
        </div>
        <div className="opciones">
        <a href="corporate" className="text9">CORPORATIVO</a>
        </div>
        </div>
    </>
    );
}

}