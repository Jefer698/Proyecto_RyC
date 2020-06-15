import React from 'react';
import InputLine from '../components/InputLine';
import { validatePassword, validateEmail } from '../utils/Validations';
import Button from '@material-ui/core/Button';

export default class RecoveryForm extends React.Component {
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
        <form className={"form-style"}>
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
          <Button variant="contained" color="secondary" className="boton3" onClick={this.doLogin}>
            Recuperar Contraseña
          </Button>
        </form>

      </>
    );
  }

}