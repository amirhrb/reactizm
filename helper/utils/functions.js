import { compare, hash } from 'bcryptjs';
import { serialize } from 'cookie';
import { formatDistanceToNow } from 'date-fns';
import { faIR } from 'date-fns/locale';
import { sign, verify } from 'jsonwebtoken';

export const timeFunc = (posts) => {
  const dates = posts.map((post) => post.publishDate);
  const lastDate = new Date(dates.sort((a, b) => new Date(b) - new Date(a))[0]);
  return formatDistanceToNow(lastDate, { locale: faIR });
};

export const delay = async (time) => {
  await new Promise((res) => {
    setTimeout(res, time);
  });
};

//return proper errors for email or password on login
export const validateEmailPass = (email, password) => {
  const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  //check if there is email and pass
  if (!email) return 'ایمیل وارد نشده';
  if (!password) return 'رمز وارد نشده';

  //check the validity of email and pass
  if (!emailRegex.test(email)) return 'ایمیل اشتباه';
  if (!passwordRegex.test(password)) return 'رمز ناایمن!';

  //if there is no error gives valid
  return 'valid';
};

//make hash
export const hashPassword = async (pass) => {
  //make a salt by 10 complexity
  const hashedPassword = await hash(pass, 10);
  return hashedPassword;
};

export const verifyPassword = async (pass, hashedPass) => {
  const isOk = await compare(pass, hashedPass);
  return isOk;
};

export const serializer = (data, days = 7, tokenName) => {
  const expiration = days * 24 * 60 * 60;
  const token = sign(data, process.env.SECRET_KEY, {
    expiresIn: expiration,
  });
  const serialized = serialize(tokenName, token, {
    httpOnly: true,
    path: '/',
    maxAge: expiration,
  });
  return serialized;
};

export function isVaildToken(token) {
  try {
    const result = verify(token, process.env.SECRET_KEY);
    return result;
  } catch (err) {
    return false;
  }
}
