import React from 'react';
import Button from '@material-ui/core/Button';
import InputLine from '../components/InputLine';
import { validatePassword, validateEmail, isEmpty, validateConfirmation } from '../utils/Validations';

export default class RegisterForm extends React.Component {
  state = {
    registerData: {
      name: '',
      surname: '',
      email: '',
      confirmation: '',
      password: ''

    },
    errors: {

      name: false,
      surname: false,
      email: false,
      confirmation: false,
      password: false

    }
  };


  doLogin = (event) => {

    const {
      name,
      surname,
      email,
      confirmation,
      password
    } = this.state.registerData;
    const nameError = isEmpty(name);
    const surnameError = isEmpty(surname);
    const emailError = !validateEmail(email);
    const confirmationError = !validateConfirmation(confirmation, email);
    const passwordError = !validatePassword(password, email);

    this.setState({
      errors: {
        name: nameError,
        surname: surnameError,
        email: emailError,
        password: passwordError,
        confirmation: confirmationError

      }

    });
    event.preventDefault();
  }
  onChange = (name, event) => {
    const value = event.target.value;
    const registerData = Object.assign({}, this.state.registerData)
    registerData[name] = value
    this.setState({
      registerData
    });
  }

  render() {
    const {
      email,
      password, name, surname, confirmation } = this.state.registerData;
    const { errors } = this.state;
    return (
      <>
        <form className="form-style">
          <InputLine
            name="name"
            label="Nombre"
            type="text"
            placeholder="Ingresar nombre"
            required={true}
            onChange={this.onChange}
            error={errors.name}
            value={name}

          />
          
          <InputLine
            name="surname"
            label="Apellido"
            type="text"
            placeholder="Ingresar apellido"
            required={true}
            onChange={this.onChange}
            error={errors.surname}
            value={surname}

          />
          <InputLine
            name="email"
            label="Correo"
            type="text"
            placeholder="Correo@ejemplo.cl"
            required={true}
            onChange={this.onChange}
            error={errors.email}
            value={email}

          />
          <InputLine
            name="confirmation"
            label="Confirmar correo"
            type="text"
            placeholder="Correo@ejemplo.cl"
            required={true}
            onChange={this.onChange}
            error={errors.confirmation}
            value={confirmation}

          />

          <InputLine
            name="password"
            label="Contraseña"
            type="password"
            placeholder="Ingrese contraseña"
            required={true}
            minLength={4}
            maxLength={8}
            onChange={this.onChange}
            error={errors.password}
            value={password}
          />
          <Button variant="contained" color="secondary" className="boton2" onClick={this.doLogin}>
            REGISTRARME
          </Button>
        </form>


      </>
    );
  }

}
/*
return(
<>
<form >
           <InputLine label="Correo" type="email" placeholder="correo@ejemplo.cl" required={true}/>
           <InputLine label="Contraseña" type="password" placeholder="Ingrese contraseña" required={true} minLength={4} maxLength={8}/>
            <button className="boton">Ingresar</button>


        </form>
           <div className ="link">
       <p >Olvidaste tu contraseña?</p>   <a href="recuperar.html">Recuperar contraseña</a>


                </div>
        <div className="link">

            <p >No estas registrado?</p>   <a href="registro.html">Registrar</a>
        </div>
</>
*/