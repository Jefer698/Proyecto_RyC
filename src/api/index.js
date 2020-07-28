
export function login(usuario){
    return fetch('http://localhost:5000/login', {
        method: 'POST',
        body: JSON.stringify({
            mail: usuario.email,
            password: usuario.password
        }),
        headers:{
            'Content-Type': 'application/json'
        }
      });
    
}
export function register(usuario){
   fetch('http://localhost:5000/register', {
        method: 'POST',
        body: JSON.stringify({
            name: usuario.name,
            mail: usuario.email,
            password: usuario.password,
        
        }),
        headers:{
            'Content-Type': 'application/json'
        }
      });
    
}
export function getMenu(){
    const token = localStorage.getItem('token')
    return fetch('http://localhost:5000/get_pedidos', {
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': 'Bearer' + token
        }
      });
    
}
    

