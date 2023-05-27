import { response, request } from "express";
import { storyModel } from "../models/storyModel.js";

const getStory = (request, response) => {
    response.send("Hooooooola a todos chavales aqui alexby11")
}

const createStory = async (req = request, res = response) => {
    const { photo, user } = req.body
    try {

        const newStory = new storyModel({ photo, user })
        await newStory.save()
        return res.json({ msg: newStory})

    } catch (error) {
        console.log(error)
        res.status(502).json({ msg: "Shit" })
    }
}

export { getStory, createStory }