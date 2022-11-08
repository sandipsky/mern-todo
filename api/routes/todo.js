const router = require("express").Router();


// Model
const Todo = require('../models/Todo');

//get all todos
router.get('/', async (req, res) => {
	const todos = await Todo.find();

	res.json(todos);
});

//create new todo
router.post('/new', (req, res) => {
	const todo = new Todo({
		title: req.body.title
	})

	todo.save();
	res.send("New task created");
	res.json(todo);
});

//delete a task
router.delete('/delete/:id', async (req, res) => {
	const result = await Todo.findByIdAndDelete(req.params.id);

	res.json({result});
});

//edit a task
router.put('/update/:id', async (req, res) => {
	const todo = await Todo.findById(req.params.id);

	todo.title = req.body.title;

	await todo.save();

	res.json(todo);
});



//toggle complete
router.get('/complete/:id', async (req, res) => {
	const todo = await Todo.findById(req.params.id);

	todo.complete = !todo.complete;

	todo.save();

	res.json(todo);
})

module.exports = router