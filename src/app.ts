import express from 'express';
import dotenv from 'dotenv';
import {database} from './configuration/database/database'
const app = express()
dotenv.config()
const Port = process.env.PORT


database.sync({}).then( ()=>{
    console.log(`Database connected`)
}).catch((err)=>{
    console.log(err)
})


app.listen(Port, ()=>{
    console.log(`App is listening on Port ${Port}`)
})