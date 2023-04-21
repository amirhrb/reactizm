import { User } from '../../../helper/utils/Models';
import {
  serializer,
  validateEmailPass,
  verifyPassword,
} from '../../../helper/utils/functions';
import connectDB from '../../../helper/utils/mongooseDB';

export default async (req, res) => {
  //check bad req's
  if (req.method !== 'POST')
    return res
      .status(400)
      .json({ status: 'failure', message: 'درخواست اشتباهه' });

  //connect to db
  try {
    await connectDB();
  } catch (err) {
    res
      .status(502)
      .json({ status: 'failure', message: 'مشکل در اتصال از سمت سرور' });
  }
  const { email, password } = req.body;

  //check if user is there
  try {
    const user = await User.findOne({ email: email });
    if (!user)
      return res
        .status(404)
        .json({ status: 'failure', message: 'کاربر ثبت نام نکرده!' });

    //validate email and password
    const isValid = validateEmailPass(email, password);
    if (isValid !== 'valid' || password.includes(' ')) {
      return res.status(402).json({ status: 'failure', message: isValid });
    }

    //check if password is ok
    const isRightPass = await verifyPassword(password, user.password);
    if (!isRightPass)
      return res
        .status(402)
        .json({ status: 'failure', message: 'رمز یا نام کاربری اشتباهه' });
  } catch (err) {
    res
      .status(503)
      .json({ status: 'failure', message: 'مشکل در اتصال از سمت سرور' });
  }

  const days = 90;
  try {
    const serialized = serializer({ email }, days, 'session-token');
    return res
      .status(200)
      .setHeader('Set-Cookie', serialized)
      .json({ status: 'successful', message: 'خوش آمدی!' });
  } catch (error) {
    return res
      .status(498)
      .json({ status: 'failure', message: 'مشکلی در فرایند رخ داد' });
  }
};
