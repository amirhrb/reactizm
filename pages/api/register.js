//libraries
import nextConnect from "next-connect";

//db and models
import connectDB from "../../helper/utils/connectDB";
import User from "../../helper/models/User";

//custom two languaged messages
import messages from "../../helper/utils/messages";

//fns
import { hashPassword, isUnvalidEmailPass } from "../../helper/utils/functions";

const handler = nextConnect();

handler.post(async (req, res) => {
  //check if requested lang is "fa" or by default is "en" to dynamicly get the error in proper language
  const acceptLanguage = req.headers["accept-language"];
  let lang;
  acceptLanguage === "fa-IR" ? (lang = "fa") : (lang = "en");

  //get the data from body
  const { email, password } = req.body;

  //validating the 'email' and 'password' and get dynamic error
  if (isUnvalidEmailPass({ email, password })) {
    return res.status(400).json({
      status: "failed",
      message: messages[lang][isUnvalidEmailPass({ email, password })],
    });
  }

  //try to connect to DB
  try {
    await connectDB();
  } catch (error) {
    //catch the err and responding it
    return res
      .status(502)
      .json({ status: error.result, message: messages[lang].connectionError });
  }

  //check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res
      .status(409)
      .json({ status: "failed", message: messages[lang].alreadyExists });
  }

  const hashedPassword = await hashPassword(password);

  //and if nothing goes wrong create new user
  try {
    const user = await User.create({ email: email, password: hashedPassword });
    return res.status(201).json({
      status: "success",
      data: { email: user.email },
      message: messages[lang].successRegister,
    });
  } catch (error) {
    return res.status(503).json({
      status: "failed",
      message: messages[lang].connectionError,
    });
  }
});
export default handler;
