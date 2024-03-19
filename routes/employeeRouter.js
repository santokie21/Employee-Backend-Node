const express = require("express");
const {
  getAllEmployees,
  getEmployeeWithId,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} = require("../controller/employeeController");
const router = express.Router();

router.route("/").get(getAllEmployees).post(createEmployee);

router
  .route("/:id")
  .get(getEmployeeWithId)
  .put(updateEmployee)
  .delete(deleteEmployee);

module.exports = router;
