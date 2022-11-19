import User from "../models/User.js";
import createError from "../utility/createError.js";
import { hashPassword, passwordVerify } from "../utility/hash.js";
import { getRandom } from "../utility/math.js";
import {
  sendActivationLink,
  sentForgotPasswordLink,
} from "../utility/sendMail.js";
import { createToken } from "../utility/token.js";
import { isEmail } from "../utility/validate.js";

/**
 * @access public
 * @route /api/user/register
 * @method post
 */
export const register = async (req, res, next) => {
  try {
    // fomr data
    const {
      name,
      email,
      password,
      gender,
      birth_day,
      birth_month,
      birth_year,
    } = req.body;

    // email axists validator

    const userEmail = await User.findOne({ email: email });

    // form validate
    if (!name || !email || !password || !gender) {
      next(createError(400, "All fields are required"));
    } else if (!isEmail(email)) {
      next(createError(400, "Invalid email address"));
    } else if (userEmail) {
      next(createError(400, "Email address already axists"));
    }

    // verify activation code
    let activationcode = getRandom(100000, 999999);

    // check activation code
    const checkCode = await User.findOne({ access_token: activationcode });

    // check code
    if (checkCode) {
      activationcode = getRandom(100000, 999999);
    }

    // create user
    const user = await User.create({
      name,
      email,
      password: hashPassword(password),
      gender,
      birth_day,
      birth_month,
      birth_year,
      access_token: activationcode,
    });

    if (user) {
      sendActivationLink(user.email, {
        name: user.first_name + " " + user.sur_name,
        code: activationcode,
      });

      // send respone
      res.status(200).json({
        message: "User Created Successful",
        user: user,
      });
    }
  } catch (error) {}
};

/**
 * @access public
 * @route /api/user/login
 * @method post
 */
export const login = async (req, res, next) => {
  try {
    // fomr data
    const { email, password } = req.body;

    // email axists validator

    const loggedInUser = await User.findOne({ email: email });

    // form validate
    if (!email || !password) {
      next(createError(400, "All fields are required"));
    } else if (!isEmail(email)) {
      next(createError(400, "Invalid email address"));
    } else if (!loggedInUser) {
      next(createError(400, "Login user not found"));
    } else if (!passwordVerify(password, loggedInUser.password)) {
      next(createError(400, "Wrong password"));
    } else {
      // create token
      const token = createToken({ id: loggedInUser._id }, "30d");

      res.status(200).cookie("authToken", token).json({
        messege: "Login user successfull",
        user: loggedInUser,
        token: token,
      });
    }
  } catch (error) {}
};

/**
 * @access public
 * @route /api/user/me
 * @method Get
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const loggedInUser = async (req, res, next) => {
  try {
    const auth_token = req.headers.authorization;

    if (!auth_token) {
      next(createError(400, "Token not found"));
    } else {
      const token = auth_token.split(" ")[1];
      const user = tokenVerify(token);

      if (!user) {
        next(createError(400, "Invalid Token"));
      } else {
        const loggedInUser = await User.findById(user.id);

        if (!loggedInUser) {
          next(createError(400, "User data not found"));
        } else {
          res.status(200).json({
            message: "User data Stable",
            user: loggedInUser,
          });
        }
      }
    }
  } catch (error) {
    next(error);
  }
};

/**
 * @access public
 * @route /api/user/account activate by activate Account By Code
 * @method Post
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const activateAccountByCode = async (req, res, next) => {
  try {
    const { code } = req.body;

    const user = await User.findOne().and([
      { access_token: code },
      { isActivate: false },
    ]);

    if (!user) {
      next(createError(400, "Activation user not found"));
    } else {
      await User.findByIdAndUpdate(user.id, {
        isActivate: true,
        access_token: "",
      });

      res.status(200).json({
        message: "User account activation successful",
      });
    }
  } catch (error) {
    next(error);
  }
};

/**
 * @access public
 * @route /api/user/account activate by forgot Password
 * @method Post
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

export const forgotPassword = async (req, res, next) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email: email });

    if (!user) {
      next(createError(400, "User not found"));
    } else {
      // verify activation code
      let sentForgotPassowrdcode = getRandom(100000, 999999);

      // check activation code
      const checkCode = await User.findOne({
        access_token: sentForgotPassowrdcode,
      });

      // check code
      if (checkCode) {
        sentForgotPassowrdcode = getRandom(klde54, kja359);
      }

      sentForgotPasswordLink(user.email, {
        name: user.first_name + " " + user.sur_name,
        code: sentForgotPassowrdcode,
      });

      await User.findByIdAndUpdate(user.id, {
        access_token: sentForgotPassowrdcode,
        isActivate: false,
      });

      // send respone
      res.status(200).json({
        message: "A password reset link has send to your password",
      });
    }
  } catch (error) {
    next(error);
  }
};

/**
 * @access public
 * @route /api/user/account activate by activate Account By Code
 * @method Post
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const forgotPasswordAccountByCode = async (req, res, next) => {
  try {
    const { code } = req.body;
    const { password } = req.body;

    const user = await User.findOne().and([
      { access_token: code },
      { isActivate: false },
    ]);

    if (!user) {
      next(createError(400, "Activation user not found"));
    } else {
      await User.findByIdAndUpdate(user.id, {
        isActivate: true,
        access_token: "",
        password: hashPassword(password),
      });

      res.status(200).json({
        message: "User account activation successful",
      });
    }
  } catch (error) {
    next(error);
  }
};
