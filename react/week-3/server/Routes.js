const express = require('express');
const database = require('./database/database');

const Router = express.Router;

const Routes = Router();

Routes
    //Get all the users
    .get('/', (req, res) => {
        database.getAllUsers()
        .then((result) => {
            res.send(result);
            //database.destroy();
        })
        .catch((error)=>{ throw error})
    })

    //Search users by name OR last name
    .get('/search/:value', (req, res)=>{
        database.searchFirstOrLastName(req.params.value)
            .then((result)=>{
                res.send(result);
                //database.destroy();
            })
            .catch((error)=>{ throw error})
    })

    //Delete a user
    .delete('/delete/:id', (req, res)=>{
        database.deleteUser(req.params.id)
        .then((result)=>{
            console.log(result);
            res.send('The user has been deleted');
            //database.destroy();
        })
        .catch((error)=>{ throw error})
    })


module.exports = Routes;