var express = require("express");
var router = express.Router();

const {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  updateTodoDone,
  sortTodoByDate,
  sortTodoByDone,
} = require("./controller/todoController");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.json(true);
});

router.get("/get-all-todos", getAllTodos);

router.get("/get-todos-by-sort", sortTodoByDate);

router.get("/get-todos-by-done", sortTodoByDone);

router.post("/create-todo", createTodo);

router.put("/update-todo-by-id/:id", updateTodo);

router.put("/update-done-by-id/:id", updateTodoDone);

router.delete("/delete-todo-by-id/:id", deleteTodo);

module.exports = router;

//create a PUT path that update isDone
//get it to work using postman first
//hook it up in the frontend side
