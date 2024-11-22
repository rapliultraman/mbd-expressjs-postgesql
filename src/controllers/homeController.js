const homeAdmin = (req, res) => {
    res.status(200).json({ message: 'Selamat datang di Home Admin' });
  };
  
  const homeUser = (req, res) => {
    res.status(200).json({ message: 'Selamat datang di Home User' });
  };
  
  module.exports = { homeAdmin, homeUser };
  