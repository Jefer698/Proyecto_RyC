
import React from 'react';
import SelectLine from '../components/SelectLine';
import InputLineHome from '../components/InputLineHome';
import Button from '@material-ui/core/Button';
import { isEmpty } from '../utils/Validations';

const locations = [
  { value: '', label: 'Seleccionar Comuna...' },
  { value: 'santiago', label: 'Santiago' },
  { value: 'conchalia', label: 'Conchali' },
  { value: 'huechuraba', label: 'Huechuraba' },
  { value: 'independencia', label: 'Independencia' },
  { value: 'quilicura', label: 'Quilicura' },
  { value: 'recoleta', label: 'Recoleta' },
  { value: 'renca', label: 'Renca' },
  { value: 'las_condes', label: 'Las Condes' },
  { value: 'lo_barnechea', label: 'Lo Barnechea' },
  { value: 'providencia', label: 'Providencia' },
  { value: 'vitacura', label: 'Vitacura' },
  { value: 'la_reina', label: 'La Reina' },
  { value: 'macul', label: 'Macul' },
  { value: 'ñuñoa', label: 'Ñuñoa' }

];

export default class NavBarHome extends React.Component {
  state = {
    homeData: {
      location: '',
      dire: ''
    },
    errors: {

      location: false,
      dire: false


    }
  };


  doHome = (event) => {

    const {
      location,
      dire
    } = this.state.homeData;
    const locationError = isEmpty(location);
    const direError = isEmpty(dire);

    this.setState({
      errors: {

        location: locationError,
        dire: direError

      }

    });
    event.preventDefault();
  }
  onChange = (name, event) => {
    const value = event.target.value;
    const homeData = Object.assign({}, this.state.homeData)
    homeData[name] = value
    this.setState({
      homeData
    });
  }

  render() {
    const {
      location,
      dire
    } = this.state.homeData;
    const { errors } = this.state;

    return (
      < >
        <div className="navhome" >
      

            <SelectLine
              label="Seleccion Comuna"
              name="location"
              options={locations}
              required={true}
              step="any"
              error={errors.location}
              onChange={this.onChange}
              value={location}
            />
      
         
            <InputLineHome
              name="dire"
             
              label="Calle y numero de puerta"
              required={true}
              onChange={this.onChange}
              error={errors.dire}
              value={dire}
            />
         
          <Button variant="contained" color="secondary" className="buscar"  onClick={this.doHome}>
            Buscar
          </Button>
        </div>
      </>
    );
  }

}



