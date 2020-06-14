
import {datos} from './Enviodata';

export const total = (datos) => {

    m1 = document.getElementById("multiplicando").value;
    m2 = document.getElementById("multiplicador").value;
    r = m1*m2;
    document.getElementById("resultado").value = r;
  }