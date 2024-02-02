import { Request, Response, Router } from "express";
import { findAllUsers } from "../service/UserService";
import { User } from "@prisma/client";

const getAllUsers = (req: Request, resp: Response): void => {

    findAllUsers().then(data => {
        resp.json(data)
        }
    )
}

export { getAllUsers }