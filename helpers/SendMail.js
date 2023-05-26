import NodeMailer from 'nodemailer'


const enviarEmail = async (usuario) => {
    
    const config = {
        host : 'smtp.gmail.com',
        port : 465,
        auth: {
            user : 'mostazagram@gmail.com',
            pass : 'vtkvkzfuredbnafa'
        }
    }

    const mensaje = {
        from : 'mostazagram@gmail.com',
        to : usuario.email,
        subject : 'Gracias por registrarte en Mostazagram',
        text : `Hola ${usuario.user} Bienvenido a Mostazagram aquí encontrarás horas de diversión para tenr con tus amigos`
    }

    const transport = NodeMailer.createTransport(config);

    const info = await transport.sendMail(mensaje);

    console.log(info)
}

export {enviarEmail}

//enviarEmail();