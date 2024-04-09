const express = require('express');
const museumRoutes = require('./routes/museumRoutes')
const { db } = require('./models/db');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/api/v2/museums", museumRoutes)

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})

// db.sync()
// .then(async () => {
//     app.listen(PORT, () => {
//         console.log(`Server running on http://localhost:${PORT}`)
//     })
// });