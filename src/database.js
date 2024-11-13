import {connect} from 'mongoose';

(async() => {
    try{
        const db = await connect("mongodb://localhost:27017/Cuevanita")
        console.log('Database connection established to:', db.connection.name)
    } catch (error){
        console.error(error);
    }
})()