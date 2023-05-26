import { request, response } from "express"
import { userModel } from "../models/userModel.js"
import { enviarEmail } from "../helpers/SendMail.js"

const getUser = (request, response) => {
    response.send("Muy buenas a todos guarrisimos")
}
const createUser = async (req = request, res = response) => {
    const { name, email, user, pass } = req.body
    try {

        const newUser = new userModel({ name, email, user, pass })
        await newUser.save()
        await enviarEmail(newUser)
        return res.json({ msg: newUser})



    } catch (error) {
        console.log(error)
        res.status(502).json({ msg: "algo" })
    }


}
const loginUsuario = (req, res = request) => {
    res.json({
        ok: true
    })
}
const revalidarToken = (req, res = request) => {
    res.json({
        ok: true
    })
}
export { getUser, createUser, loginUsuario, revalidarToken }
