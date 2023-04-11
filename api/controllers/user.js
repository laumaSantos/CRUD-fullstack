import {db} from '../db.js'

export const getUsers = (_, res) => {
    const queryDB = 'SELECT * FROM usuarios';
    
    db.query(queryDB, (err, data) => {
        if (err) { return res.json(err) }
        else { return res.status(200).json(data) }
    })
}