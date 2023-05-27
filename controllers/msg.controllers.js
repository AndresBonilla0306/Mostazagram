import { response, request } from "express";
import { msgModel } from "../models/msgModel.js";

const getMsg = (request, response) => {
    response.send("Hooooooola a todos chavales aqui alexby11")
}

const createMsg = async (req = request, res = response) => {
    const { user, mensaje } = req.body
    try {

        const newMsg = new msgModel({ user, mensaje })
        await newMsg.save()
        return res.json({ msg: newMsg})

    } catch (error) {
        console.log(error)
        res.status(502).json({ msg: "Shit" })
    }
}

export { getMsg, createMsg }