const fs = require('fs')


const colors = require('colors')

const crearArchivo = async (base = 5, l, hasta) => {

    try {

        if (hasta <= 0) return 'la variable hasta tiene que ser mayor a 0'


        let salida = ''
        let consola = ''



        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`
        }

        if (l) {
            console.log('========================'.green)
            console.log('Tabla del'.green, colors.blue(base))
            console.log('========================'.green)
            console.log(consola)
        }



        fs.writeFileSync(`./salida/tabla-del-${base}.txt`, salida)

        return `tabla-del-${base}.txt`.rainbow

    } catch (err) {
        throw err
    }
}

module.exports = { crearArchivo }