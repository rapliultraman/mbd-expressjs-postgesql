require('dotenv').config();
const express = require('express');
const authRoutes = require('./routes/authRoutes.js');
const homeRoutes = require('./routes/homeRoutes.js');
const customersRoutes = require('./routes/customersRoutes.js');
const bookingRoutes = require('./routes/bookingRoutes.js');
const kelolaLapanganRoutes = require('./routes/kelolaLapanganRoutes.js');
const kelolaPenawaranRoutes = require('./routes/kelolaPenawaranRoutes.js');
const kelolaBookingRoutes = require('./routes/kelolaBookingRoutes.js')
const penawaranRoutes = require('./routes/penawaranRoutes.js');
const ratingReviewRoutes = require('./routes/ratingReviewRoutes.js')
const { authMiddleware } = require('./middleware/authMiddleware.js');
const app = express();

app.use(express.json());
app.use('/auth', authRoutes);

// Rute yang membutuhkan autentikasi
app.use('/user', authMiddleware, homeRoutes, bookingRoutes, penawaranRoutes, ratingReviewRoutes);
app.use('/admin', authMiddleware, homeRoutes, customersRoutes, kelolaLapanganRoutes, kelolaPenawaranRoutes, kelolaBookingRoutes, ratingReviewRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
