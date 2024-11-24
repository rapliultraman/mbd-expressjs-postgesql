const db = require('../config/db');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
  const { nama, email, password } = req.body;

  try {
    await db.query('CALL register_user($1, $2, $3)', [nama, email, password]);
    res.status(201).json({ message: 'Registrasi berhasil' });
  } catch (error) {
    if (error.message.includes('Email sudah terdaftar')) {
      return res.status(400).json({ error: 'Email sudah terdaftar.' });
    }
    res.status(500).json({ error: 'Terjadi kesalahan pada server.' });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await db.query('CALL login_user($1, $2)', [email, password]);

    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Email tidak terdaftar atau password salah.' });
    }

    const isAdmin = email.includes('admin');
    const token = jwt.sign({ email, isAdmin }, process.env.SECRET_KEY, { expiresIn: '1h' });

    const responseMessage = isAdmin
      ? { message: 'Login berhasil sebagai Admin', redirectTo: '/admin/homeadmin', token }
      : { message: 'Login berhasil sebagai User', redirectTo: '/user/homeuser', token };

    res.status(200).json(responseMessage);
  } catch (error) {
    res.status(500).json({ error: 'Terjadi kesalahan pada server.' });
  }
};

module.exports = { registerUser, loginUser };
