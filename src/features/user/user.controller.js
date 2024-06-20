import UserModel from "./user.model.js";
import jwt from 'jsonwebtoken';
export default class UserController{
    signup(req,res){
       const {
        name,
        email,
        password
       }=req.body;
       const user=UserModel.signup(name,email,password);
       res.status(201).send(user);
    }

    signin(req,res){
        const result=UserModel.signin(
            req.body.email,
            req.body.password
        );
        if(!result){
            return res.status(400).send("Incorrect Credentials");
        }
        else{
            const token=jwt.sign(
                {
                    userID:result.id,
                    email:result.email
                },
                "AIb6d35fvJM4O9pXqXQNla2jBCH9kuLz",
                {
                    expiresIn:'2h'
                }
            );
            return res.status(200).send(token);
        }
    }
}