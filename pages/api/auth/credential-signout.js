import { serialize } from 'cookie';

const emptyCookie = serialize('session-token', '', {
  httpOnly: true,
  path: '/',
  maxAge: 1,
});

async function handler(req, res) {
  if (req.method !== 'POST')
    return res.status(403).json({ status: 'failure', message: 'bad request' });
  const token = req.cookies['session-token'];
  if (!token) {
    return res.status(200).json({
      status: 'successful',
      message: 'قبلا خارج شدی',
    });
  }
  if (token) {
    return res.status(200).setHeader('Set-Cookie', emptyCookie).json({
      status: 'successful',
      message: 'خارج شدی از حسابت',
    });
  }
}
export default handler;
