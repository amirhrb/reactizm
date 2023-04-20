import { User } from '../../../helper/utils/Models';
import {
  hashPassword,
  validateEmailPass,
} from '../../../helper/utils/functions';
import connectDB from '../../../helper/utils/mongooseDB';
import { getSession } from 'next-auth/react';

export default async (req, res) => {
  //check bad req's
  if (req.method !== 'POST')
    return res.status(400).json({ status: 'failure', message: 'bad request' });

  //check if user is in a session already
  try {
    const session = await getSession();
    if (session)
      return res
        .status(406)
        .json({ status: 'failure', message: 'Already logged in' });
  } catch (err) {
    console.log(err);
  }

  //connect to db
  try {
    await connectDB();
  } catch (err) {
    res.status(502).json({ status: 'failure', message: err });
  }
  const { cpassword, password, email } = req.body;

  //check if user is a ghaazgholang
  const existingUser = await User.findOne({ email: email });
  if (existingUser) {
    return res.status(409).json({
      status: 'failure',
      message: 'User already exists',
    });
  }

  //validate email and password
  const isValid = validateEmailPass(email, password);
  if (isValid !== 'valid' || password.includes(' ')) {
    return res.status(402).json({ status: 'failure', message: isValid });
  }
  if (cpassword !== password) {
    return res
      .status(402)
      .json({ status: 'failure', message: 'passwords do not match' });
  }

  const hashedPassword = await hashPassword(password);

  try {
    const newUser = await User.create({
      email: email,
      password: hashedPassword,
    });
    res.status(201).json({
      status: 'successful',
      message: 'new user registered successfuly',
      user: newUser,
    });
  } catch (err) {
    return res.status(403).json({
      status: 'failure',
      message: 'An error accured in signing up process',
    });
  }
};
