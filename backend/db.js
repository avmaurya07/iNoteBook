const mongoose = require('mongoose');
require('dotenv').config();
const mongoURI = process.env.MONGOURI || "mongodb+srv://avmaurya07:avmaurya07@inotebook.aod5xyr.mongodb.net/?retryWrites=true&w=majority&appName=iNoteBookmongodb+srv://avmaurya07:avmaurya07@inotebook.aod5xyr.mongodb.net/";
const connectToMongo = () => {
    mongoose.connect(mongoURI);
}
module.exports = connectToMongo;