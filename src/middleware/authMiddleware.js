const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Akses ditolak. Tidak ada header Authorization.' });
  }

  const token = authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'Token tidak ditemukan.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded; // Simpan data user di req
    next();
  } catch (error) {
    return res.status(403).json({ error: 'Token tidak valid.' });
  }
};

const adminMiddleware = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    return next();
  }
  return res.status(403).json({ error: 'Akses ditolak. Anda bukan admin.' });
};

const userMiddleware = (req, res, next) => {
  if (req.user && !req.user.isAdmin) {
    return next();
  }
  return res.status(403).json({ error: 'Akses ditolak. Anda bukan user.' });
};

module.exports = { authMiddleware, adminMiddleware, userMiddleware };
