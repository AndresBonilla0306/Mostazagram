import NodeMailer from 'nodemailer'

const enviarEmail = async () => {
    
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
        to : 'juan_p.martinez_g@uao.edu.co',
        subject : 'Chichon',
        text : 'Ya podemos enviar correos'
    }

    const transport = NodeMailer.createTransport(config);

    const info = await transport.sendMail(mensaje);

    console.log(info)
}

enviarEmail();