

export default function envioData(producto, descripcion, preciounit, cantidad,total) {
    return { producto, descripcion, preciounit, cantidad,total};
  }
  
  export const datos = [
    envioData('Lechuga', "Ensalada de lechuga", 400, 1,400),
    envioData('Cazuela de pollo', "Cazuela recien calientita ",3200, 1,3200),
    envioData('Helado', "Helado de vainilla y trozos de chocolate", 700, 1, 700),
    envioData('Coca-Cola', "Salud papa", 700, 1, 700),

  ];
