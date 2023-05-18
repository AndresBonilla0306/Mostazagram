import { request, response } from "express"
import { userModel } from "../models/userModel.js"

const getUsers = (request, response) => {
    // response.json({msg: "Muy buenas a todos guapisimos"})
    response.send("<h1>Muy buenas a todos guarrisimos</h1>")
}
const createUser = async (req = request, res = response) => {
    const { name, email, user, pass } = req.body
    try {
        // console.log(req)

        const newUser = new userModel({ user, name, email, pass })
        await newUser.save()
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
export { getUsers, createUser, loginUsuario, revalidarToken }
