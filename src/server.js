// importamos dependecias de librerias
import express from "express";
import 'dotenv/config'
import cors from "cors"
import { dbConnection } from "./database/db.js";
import router from './routes/router.js'

const app = express()

app.use(cors())

// parsea el body
app.use(express.json())

const PORT = process.env.PORT || 4001;

// API ROUTES
app.get('/api/healthy', (req, res) => {
  res.status(200).json(
    {
      success: true,
      message: "server is healthy"
    }
  )
})

app.use('/api', router)

dbConnection()
.then(() =>{
  console.log("Database connected");

  app.listen(PORT, () => {
    console.log(`Server running o port ${PORT}`);
  })
})
.catch(error => {
  console.log(error);
})



