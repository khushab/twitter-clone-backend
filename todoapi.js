const express = require('express')
const pool = require('./todoDB')
const app = express()

app.use(express.json())

// Routes--------

// get all todos
app.get('/todos', async (req, res) => {
    try {
        const allTodos = await pool.query(
            'SELECT * FROM todo'
        )
        res.send(allTodos.rows)
    } catch (error) {
        console.error(error.message)
    }
})

// get a todo
app.get('/todos/:id', async (req, res) => {
    try {
        const id = req.params.id
        console.log(id)

        const todo = await pool.query(
            'SELECT * FROM todo WHERE todo_id = $1',
            [id]
        )
        res.json(todo.rows)

    } catch (error) {
        console.log(error.message)

    }
})

// create a todo
app.post('/todos', async (req, res) => {
    try {
        const { description } = req.body;
        const newTodo = await pool.query(
            'INSERT INTO todo (description) VALUES ($1) RETURNING *',
            [description]
        )

        res.json(newTodo)
    } catch (error) {
        console.error(error.message)
    }
})

// update a todo
app.put('/todos/:id', async (req, res) => {
    const id = req.params.id
    const description = req.body.description
    try {
        const updateTodo = pool.query(
            'UPDATE todo SET description = $1 WHERE todo_id = $2',
            [description, id]
        )

        res.json("Todo was updated")
    } catch (error) {
        console.log(error.message)

    }

})

// delete a todo
app.delete('/todos/:id', async (req, res) => {
    const id = req.params.id
    try {

        await pool.query(
            'DELETE FROM todo WHERE todo_id = $1',
            [id]
        )
        res.json('Todo was deleted')

    } catch (error) {
        console.log(error.message)

    }
})

app.listen(3200, () => {
    console.log('Database connected')
})