import { Request, Response, Router } from "express";
import { saveGeneratedNumber, findAllGeneratedNumbers } from "../service/GeneratedNumberService";
import { GeneratedNumber } from "@prisma/client";

const postNewGeneratedNumber = (req: Request, resp: Response): void => {
    saveGeneratedNumber(req.body)
}

const getAllGeneratedNumbers = (req: Request, resp: Response): void => {
    findAllGeneratedNumbers().then(data => {
        resp.json(data);
    })
}

export { postNewGeneratedNumber, getAllGeneratedNumbers }