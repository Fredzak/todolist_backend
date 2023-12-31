const addressControoler = require("../controller/addressController");
const userController = require("../controller/userController")
const express = require("express");
const userTodoList = require("../controller/todoListController");
const auth = require("../middleware/authentication")
const authr = require("../middleware/authorization")
const role = require("../middleware/roleMiddleware")
const router = express()

router.get("/user",authr,role, userController.getUser);
router.post("/addUser", role,userController.addUser);
router.post("/login",auth.auth)
router.get("/user/:id",userController.getOneUser)
router.post("/addAddress", addressControoler.addAddress)
router.post("/addLists", userTodoList.addTodoList)
router.get("/lists", userTodoList.getTodoList)
module.exports = router


