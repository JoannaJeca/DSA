import express, { Application }  from 'express'
import MainApp from './MainApp'

const app:Application= express()
const port = 1000

MainApp(app)

const server = app.listen(port, ()=>{
    console.log("Port running on", port)
})

process.on("uncaughtException", (error:Error)=>{
    console.log('uncaughtException', error)
    process.exit(1)
})

process.on("rejectionHandled", (reason:any)=>{
    console.log("rejectionHandled", reason)

    server.close(()=>{
        process.exit(1)
    })
})