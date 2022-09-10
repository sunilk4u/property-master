const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  try {
    const decode = jwt.verify(token, process.env.JWT_KEY);
    req.user = decode;
    next();
  } catch (err) {
    res.clearCookie("token");
    return res.status(400).json({
      message: err.message,
    });
  }
};

module.exports = verifyToken;
