const express = require('express');
const cors = require('cors');
const PORT = 8000

const app = express();
app.use(express.json());
app.use(cors()); 

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

//DatabaseConnection
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/todo', {
	useNewUrlParser: true, 
	useUnifiedTopology: true 
}).then(() => console.log("Connected to MongoDB")).catch(console.error);

//Routes
const todoRoute = require("./routes/todo");
app.use("/todos", todoRoute);










