import { request, response } from "express"
import { commentModel } from "../models/commentModel.js"

const getComment = (request, response) => {
    response.send("Contadores")
}
const createComment = async (req = request, res = response) => {
    const { comment, user } = req.body
    try {

        const newComment = new commentModel({ comment, user })
        await newComment.save()
        return res.json({ msg: newComment})

    } catch (error) {
        console.log(error)
        res.status(502).json({ msg: "Shit" })
    }
}

export { getComment, createComment }