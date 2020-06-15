
import React from 'react';
import NavBar from '../components/NavBar';
// import Footer from '../components/Footer';
// import Content from '../components/Content';
import AboutUsForm from '../containers/AboutUs/AboutUsForm';
import { navLinkUser } from '../data/NavLinks';


export default function AboutUs() {

  return (
    <>
      <div className="aboutg">
        <h1 className="about">QUIENES SOMOS</h1>
      </div>
      <NavBar links={navLinkUser} />
      <AboutUsForm />
    </>
  );
}
