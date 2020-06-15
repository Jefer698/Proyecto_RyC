import React from 'react';
import InputLine from '../components/InputLine';
import Button from '@material-ui/core/Button';
import { validatePassword, validateEmail } from '../utils/Validations';
import PersonIcon from '@material-ui/icons/Person';

export default class LoginForm extends React.Component {
  state = {
    loginData: {
      email: '',
      password: ''
    },
    errors: {
      email: false,
      password: false
    }
  };



  doLogin = (event) => {

    const {
      email,
      password } = this.state.loginData;
    const emailError = !validateEmail(email);
    const passwordError = !validatePassword(password, email);


    console.log('Email error: ' + emailError);
    console.log('Password error: ' + passwordError);

    this.setState({
      errors: {
        email: emailError,
        password: passwordError
      }

    });
    event.preventDefault();
  }
  onChange = (name, event) => {
    const value = event.target.value;
    const loginData = Object.assign({}, this.state.loginData)
    loginData[name] = value
    this.setState({
      loginData
    });
  }


  render() {
    const {
      email,
      password } = this.state.loginData;
    const { errors } = this.state;
    return (
      <>
        <form className="form-style">

          <InputLine
            name="email"
            label="Correo"
            type="text"
            placeholder="correo@ejemplo.cl"
            required={true}
            onChange={this.onChange}
            error={errors.email}
            value={email}
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
          <Button variant="contained" color="secondary" className="boton" onClick={this.doLogin}>
            Ingresar
          </Button>
        </form>
        <div className="link">
          <a href="recovery">Olvidaste tu contraseña?</a>
        </div>
        <p classname="o">O</p>
        <div className="link">
          <a href="register">Registrate</a>
        </div>

      </>
    );
  }

}

