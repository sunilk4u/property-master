const jwt = require("jsonwebtoken");
const jwt_key = process.env.JWT_KEY;

const generateToken = (user) => {
  let token = jwt.sign(
    {
      id: user._id,
      email: user.email,
      role: user.role,
    },
    jwt_key,
    { expiresIn: "15m" }
  );
  return token;
};

module.exports = generateToken;
