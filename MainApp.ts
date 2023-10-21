import express, { Application, Request, Response } from 'express'

const MainApp=(app:Application)=>{
    app.get("/get-users", (req:Request, res:Response)=>{
        try{
            res.status(200).json({
                message:"Succesffuly read data"
            })

        }catch(error){
            res.status(404).json({
                message:"Error from client side"
            })
        }
    })
};
export default MainApp;