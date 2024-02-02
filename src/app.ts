import express from "express"
import * as dotevnv from "dotenv"
import cors from "cors"
import helmet from "helmet"
import { getAllUsers } from "./controller/UserController"
import { getAllGeneratedNumbers, postNewGeneratedNumber } from "./controller/GeneratedNumberController"

const router = express.Router();

dotevnv.config()

if (!process.env.PORT) {
    console.log(`No port value specified...`)
}

const PORT = parseInt(process.env.PORT as string, 10)

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(helmet())

router.get('/users', getAllUsers)
router.post('/number/add', postNewGeneratedNumber)
router.get('/number/all', getAllGeneratedNumbers)

app.use(router)

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})

