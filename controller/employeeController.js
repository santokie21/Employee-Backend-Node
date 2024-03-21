const asyncHandler = require("express-async-handler");
const Employee = require("../model/employee");

//@desc Get all employees
//@route GET /api/employees
//@access Public
const getAllEmployees = asyncHandler(async (req, res) => {
  const employees = await Employee.find({});
  res.status(200).send(employees);
});

//@desc Get employee with id
//@route GET /api/employees/:id
//@access Public
const getEmployeeWithId = asyncHandler(async (req, res) => {
  const employee = await Employee.findById(req.params.id);
  if (!employee) {
    res.status(404);
    throw new Error("Employee not found");
  }
  res.status(200).send(employee);
});

//@desc Create an employee
//@route POST /api/employees
//@access Public
const createEmployee = asyncHandler(async (req, res) => {
  // console.log(req.body);
  const { name, age, email } = req.body;
  if (!name || !age || !email) {
    res.status(400);
    throw new Error("provide all details of employee");
  }
  const employee = await Employee.create({
    name,
    age,
    email,
  });
  res.status(201).send(employee);
});

//@desc Update an employee
//@route PUT /api/employees/:id
//@access Public
const updateEmployee = asyncHandler(async (req, res) => {
  const employee = await Employee.findById(req.params.id);
  if (!employee) {
    res.status(404);
    throw new Error("Employee not found");
  }
  const updatedEmployee = await Employee.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).send(updatedEmployee);
});

//@desc Delete an employee
//@route DELETE /api/employees/:id
//@access Public
const deleteEmployee = asyncHandler(async (req, res) => {
  const employee = await Employee.findById(req.params.id);
  if (!employee) {
    res.status(404);
    throw new Error("Employee not found");
  }
  const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);
  res.status(200).send(deletedEmployee);
});

module.exports = {
  getAllEmployees,
  getEmployeeWithId,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
