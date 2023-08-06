import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-hpewge7-shard-00-00.kaynhjt.mongodb.net:27017,ac-hpewge7-shard-00-01.kaynhjt.mongodb.net:27017,ac-hpewge7-shard-00-02.kaynhjt.mongodb.net:27017/?ssl=true&replicaSet=atlas-tvo3tf-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;