let userModel = require("../Model/userSchema");
let bcrypt = require("bcrypt");
let jwt = require("jsonwebtoken");
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password, isAdmin } = req.body;
    const existed = await userModel.findOne({ email });
    if (existed) {
      return res.status(400).json({ mse: "User already existed..." });
    }

    const hashedpassword = await bcrypt.hash(password, 10);
    var userData = await userModel.create({
      name: name,
      email: email,
      password: hashedpassword,
      isAdmin: isAdmin || false,
    });
    res.status(201).json({ mse: "User Added Successfully", user: userData });
  } catch (err) {
    res.status(500).json({ mse: "Something went Wrong", Err: err });
  }
};
exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ mse: "User not register..." });
    }
    if (user && (await bcrypt.compare(password, user.password))) {
      return res
        .status(201)
        .json({
          mse: "Login successfully",
          user: user,
          token: generateToken(user._id),
        });
    }
    return res.status(400).json({ mse: "Invalid email or password" });
  } catch (err) {
    res.status(500).json({ mse: "Something went Wrong", Err: err });
  }
};
