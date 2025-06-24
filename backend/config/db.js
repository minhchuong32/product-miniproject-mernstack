import mongoose from 'mongoose'


async function connectDB() {
    try {
        const con = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Connected MongoDB SuccessFull at: ${con.connection.host}`) 
    }
    catch(e) {
        console.log(`Connected MongoDB Fail: ${e.message}`)
    }
}

export default connectDB;