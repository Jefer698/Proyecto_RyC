import React from 'react';
import NavBarHome from '../containers/NavbarHome';
import HomeForm from '../containers/HomeForm';
import Header from '../components/Header';
import FooterHome from '../components/FooterHome';




export default function Home(){

    return(

<>
<section className="bg">


 
       <NavBarHome/>
     
 <HomeForm/>

 </section>
 <div className="fobg">
 <FooterHome />
 </div>
 </>
    );
}