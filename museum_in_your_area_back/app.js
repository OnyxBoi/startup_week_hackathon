const express = require("express");
const museumRoutes = require("./routes/museumRoutes");
const mapBoxRoutes = require("./routes/mapBoxRoutes");
const sequelize = require("./dbConfig");

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/api/v1/museums", museumRoutes);
app.use("/api/v1/maps", mapBoxRoutes);

sequelize.sync().then(async () => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
