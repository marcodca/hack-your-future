//We require mysql and dotenv. We also config this last one.
const mysql =  require('mysql');
require('dotenv').config()

//A constant variable containing all the data we need for the database connection in the .env file

const config = {
    host : process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    database: process.env.DB_DB
}

//We create the connection

const { host, user, password, port, database } = config;
const connection = mysql.createConnection({
    host,
    user,
    password,
    port,
    database
});

//A method to get all the users

connection.getAllUsers = function () {
    this.connect(() => {
        console.log('Connected to database');
    })

    return new Promise((resolve, reject) => {
        this.query('SELECT * FROM `user`', (error, result) => {
            if (error) reject(error)
            resolve(result)
        })
    })

}

//A method to search through users first and last names.

connection.searchFirstOrLastName= function (valueToSearch){
    this.connect(() => {
        console.log('Connected to database');
    })
    valueToSearch = `"%${valueToSearch}%"`
    return new Promise((resolve, reject) => {
        this.query(`SELECT * FROM user WHERE user.first_name LIKE ${valueToSearch} OR user.last_name LIKE ${valueToSearch}`, (error, result) => {
            if (error) reject(error)
            resolve(result)
        })
    })
}

connection.deleteUser = function(userIdToDelete){
    this.connect(() => {
        console.log('Connected to database');
    })
    return new Promise((resolve, reject)=>{
        this.query(`DELETE FROM user WHERE user.id = ?`, [userIdToDelete], (error, result) =>{
            if (error) reject(error)
            resolve(result)
        })
    })
}


module.exports = connection;
