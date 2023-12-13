export const control = (data) =>{
    const {nombre, apellido, telefono, email} = data

    if((nombre === '') || (apellido === '') ||  (telefono === '') || (email === '')){
        return false
    }
    else{
        return true
    }
}