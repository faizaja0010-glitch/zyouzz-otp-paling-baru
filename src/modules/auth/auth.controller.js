const authService = require("./auth.service");

async function register(req, res) {
  try {
    return res.status(200).json({
      success: true,
      message: "Register endpoint masih dalam pengembangan",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

async function login(req, res) {
  try {
    return res.status(200).json({
      success: true,
      message: "Login endpoint masih dalam pengembangan",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

module.exports = {
  register,
  login,
};
