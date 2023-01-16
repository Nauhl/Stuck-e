import React from 'react'

export const Practicantes = () => {

    const hola = "hola mundo"

    const Hello = () => {

        console.log("hola esta es una funcion de flecha", hola)
    }

    function Return() {
        console.log("funcion normal")
        return 90                       // un return no mostrara nada por si solo porque no es un console.log
                                        // un return puede retornar {} objetos, [] arreglos, o incluso otra funcion 
    }

    console.log(Return())

    function Parametros(name) {
        return "hola" + ' ' + name
    }

    console.log(Parametros('nauhl'))
    console.log(Parametros('donovan'))

    const user = {
        name: 'ryan',
        lastName: 'perez',
        age: 30,
        address: {
            country: 'Colombia',
            city: 'bogota',
            street: 'main street 123'
        },
        friends: ['brandon', 123, 'pikachu'],
        active: true,
        sendMail() {
            return 'sending mail...'
        }
    }

    console.log(user)

    let usuario = user.friends.filter(amigo => amigo != 'brandon')  // la funcion filter 'agrega una palabra funcion'
    console.log(usuario)                                            // (puede ser cualquier palabra, es solo para representar el nuevo
                                                                    // arreglo con la condicion que me traiga todo menos el igual a brandon)

    console.log(user.friends[0])        // llamar lista/array
    console.log(user.address.country)   // llamar objeto
    console.log(user.sendMail())        // llamar metodo

    return (
        <>
            <h1>Practicantes</h1>
            <button primary onClick={Hello}> Message </button>
            <button onClick={Return}>Return</button>
            {/* <h2>{user}</h2> */}
        </>
    )
}
