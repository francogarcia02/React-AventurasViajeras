import './Form.css';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../../firebase/config';
import { useState } from 'react';
import { control } from '../../../helpers/check_contact.js'

const Form = () =>{
    const { register, handleSubmit } = useForm()
    const [existe, setExiste] = useState(false)
    const [contError, setContError] = useState(<></>)
    const contactos = collection(db, 'contactos');

    const enviar = (data) =>{
        const result = control(data)
        if(result){
            addDoc(contactos, data)
                .then((doc) =>{
                    setExiste(true)
                })
        }
        else{
            setContError(
                <div>
                    <h3>Revise la informacion e intentelo de nuevo</h3>
                </div>
            )
        }
    }

    if(existe){
        return(
            <div>
                <h3>¡Gracias por contactarte con nosotros!</h3>
            </div>
        )
    }

    return(
        <div>
            {contError}
            <form className="form" onSubmit={handleSubmit(enviar)}>
            <h1 className="form__title">Escribenos para armar tu viaje perfecto</h1>
                <div className="form__subcont">
                    <input className="subcont__input" type="text" placeholder="Nombre" {...register("nombre")} />
                </div>
                <div className="form__subcont">
                    <input className="subcont__input" type="text" placeholder="Apellido" {...register("apellido")} />
                </div>
                <div className="form__subcont">
                    <input className="subcont__input" type="text" placeholder="Telefono" {...register("telefono")} />
                </div>
                <div className="form__subcont">
                    <input className="subcont__input" type="text" placeholder="E-mail" {...register("email")} />
                </div>
                <button className="form__button" type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Form