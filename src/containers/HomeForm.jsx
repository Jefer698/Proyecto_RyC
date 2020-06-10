import React from 'react';
import SelectLine from '../components/SelectLine';
import {validateEmail,validatePassword,validateConfirmation,isEmpty} from '../utils/Validations';
const locations=[
{value:'',label:'Seleccionar Comuna...'},
{value:'santiago', label:'Santiago'},
{value:'conchalia', label:'Conchali'},
{value:'huechuraba', label:'Huechuraba'},
{value:'independencia',label:'Independencia'},
{value:'quilicura',label:'Quilicura'},
{value:'recoleta',label:'Recoleta'},
{value:'renca',label:'Renca'},
{value:'las_condes',label:'Las Condes'},
{value:'lo_barnechea',label:'Lo Barnechea'},
{value:'providencia',label:'Providencia'},
{value:'vitacura',label:'Vitacura'},
{value:'la_reina',label:'La Reina'},
{value:'macul',label:'Macul'},
{value:'ñuñoa',label:'Ñuñoa'}

];

export default class HomeForm extends React.Component{
  state={
    homeData: {
        location:''
    },
    errors: {
       
        location:false,
       
        
    }
};


    doHome = (event) => {

   const {
     location
   }=this.state.homeData;
   const locationError= isEmpty(location);
  
this.setState({
errors: {
        
        location:locationError,
}

});
    event.preventDefault();
}
onChange = (name,event) => {
    const value = event.target.value;
    const homeData= Object.assign({},this.state.homeData)
   homeData[name]=value
   this.setState({
       homeData
   });
}

render(){
  const {
    location
    }=this.state.homeData;
const {errors}=this.state;
    
    return(
        <>
        
        <form >

        <SelectLine 

            name="location"
            
              options={locations} 
              required={true} 
              step="any"
             value={location}
              />    
         
   
 
        </form>
    
       </>
       
         );
}
   
}
