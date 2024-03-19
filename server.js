const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");

dotenv.config();
connectDb();
const app = express();
const PORT = process.env.PORT || 3000;

const baseUrl = process.env.BASE_URL || "api/employees";
const baseRouter = require("./routes/employeeRouter");

app.use(express.json());
app.use(baseUrl, baseRouter);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
