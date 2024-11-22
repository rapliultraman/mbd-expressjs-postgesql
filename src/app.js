require('dotenv').config();
const express = require('express');
const authRoutes = require('./routes/authRoutes.js');
const homeRoutes = require('./routes/homeRoutes.js');
const customersRoutes = require('./routes/customersRoutes.js')
const lapanganRoutes = require('./routes/lapanganRoutes.js');
const { authMiddleware, adminMiddleware,userMiddleware } = require('./middleware/authMiddleware.js');
const app = express();

app.use(express.json());
app.use('/auth', authRoutes);

// Rute yang membutuhkan autentikasi
app.use('/user', authMiddleware, homeRoutes);
app.use('/admin', authMiddleware, homeRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
