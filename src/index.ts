import 'express-async-error'
import express from 'express'
import cors from 'cors'
import { AppDataSource } from './data-source'
import routes from './routes'
import { erroMiddleware } from './middlewares/error'

AppDataSource.initialize().then(()=>{
  const app = express()

  app.use(cors())

  app.use(express.json())

  app.use(routes)

  app.use(erroMiddleware)


  return app.listen(process.env.PORT)
})