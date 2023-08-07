const addressControoler = require("../controller/addressController");
const userController = require("../controller/userController")
const express = require("express");
const userTodoList = require("../controller/todoListController");
const router = express()

router.get("/user", userController.getUser);
router.post("/addUser", userController.addUser);
router.get("/user/:id",userController.getOneUser)
router.post("/addAddress", addressControoler.addAddress)
router.post("/addLists", userTodoList.addTodoList)
router.get("/lists", userTodoList.getTodoList)
module.exports = router


