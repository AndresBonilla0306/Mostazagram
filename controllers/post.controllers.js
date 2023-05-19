import { request, response } from "express"
import { postModel } from "../models/postModel.js"

const getPost = (request, response) => {
    response.send("Ey muy buenas a todos aqui Willyrex")
}
const createPost = async (req = request, res = response) => {
    const { photo, desc, user } = req.body
    try {

        const newPost = new postModel({ photo, desc, user })
        await newPost.save()
        return res.json({ msg: newPost})

    } catch (error) {
        console.log(error)
        res.status(502).json({ msg: "Pero madre mía Willy" })
    }
}

export { getPost, createPost }