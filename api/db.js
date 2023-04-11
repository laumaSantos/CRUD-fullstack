import mysql from 'mysql'

export const db = mysql.createConnection({
    host:'localhost',
    user:'laumaDB',
    password: 'abacaxi123',
    database:'crud'
})