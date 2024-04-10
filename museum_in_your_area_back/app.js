const express = require("express");
const museumRoutes = require("./routes/museumRoutes");
const departmentRoutes = require("./routes/departmentRoutes")
const cityRoutes = require("./routes/cityRoutes")
const regionRoutes = require("./routes/regionRoutes")
const themeRoutes = require("./routes/themeRoutes")
const sequelize = require("./dbConfig");

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/api/v1/museums", museumRoutes);
app.use("/api/v1/departments", departmentRoutes);
app.use("/api/v1/cities", cityRoutes);
app.use("/api/v1/regions", regionRoutes);
app.use("/api/v1/themes", themeRoutes);


sequelize.sync().then(async () => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
