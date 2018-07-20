import express,{Router} from "express";
import {index}from "./controllers/movies";

const router=Router();

console.log("sup")

router.route("/movies.json").get(index);

router.post('/favorite', (req,res)=> {
    console.log(req.body)
    res.json({res: req.body})
})

export default router;