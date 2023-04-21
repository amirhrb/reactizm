import { serialize } from 'cookie';
import { isVaildToken } from '../../../helper/utils/functions';
import { User } from '../../../helper/utils/Models';

const emptyCookie = serialize('session-token', '', {
  httpOnly: true,
  path: '/',
  maxAge: 1,
});

async function handler(req, res) {
  if (req.method !== 'GET')
    return res.status(403).json({ status: 'failure', message: 'bad request' });
  const token = req.cookies['session-token'];
  if (!token) {
    return res.status(401).json({
      status: 'failure',
      message: 'مجددا وارد شوید',
    });
  }
  const tokenResult = isVaildToken(token);
  if (!tokenResult) {
    return res.status(401).setHeader('Set-Cookie', emptyCookie).json({
      status: 'failure',
      message: 'مجددا وارد شوید',
    });
  }
  //check if user is there
  try {
    const user = await User.findOne({ email: tokenResult.email });
    if (!user)
      return res.status(404).json({
        status: 'failure',
        session: {
          user: { email: null, image: null },
          status: null,
        },
      });

    res.status(202).json({
      status: 'success',
      session: {
        user: { email: user.email, image: null },
        status: 'authenticated',
      },
    });
  } catch (error) {
    res.status(503).json({
      status: 'failure',
      session: {
        user: { email: null, image: null },
        status: null,
      },
    });
  }
}
export default handler;
