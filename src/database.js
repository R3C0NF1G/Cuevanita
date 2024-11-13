import {connect} from 'mongoose';

(async() => {
    try{
        const db = await connect("mongodb://localhost/Moviemongo")
        console.log('Database connection established to:', db.connection.name)
    } catch (error){
        console.error(error);
    }
})()