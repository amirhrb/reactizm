import { genSalt, hash } from "bcryptjs";
import { formatDistanceToNow } from "date-fns";
import { faIR } from "date-fns/locale";

export const timeFunc = (posts) => {
  const dates = posts.map((post) => post.publishDate);
  const lastDate = new Date(dates.sort((a, b) => new Date(b) - new Date(a))[0]);
  return formatDistanceToNow(lastDate, { locale: faIR });
};

//return proper errors for email or password on login
export const isUnvalidEmailPass = ({ email, password }) => {
  const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

  //check if there is email and pass
  if (!email) return "missingEmail";
  if (!password) return "missingPassword";

  //check the validity of email and pass
  if (!emailRegex.test(email)) return "badEmail";
  if (!passwordRegex.test(password)) return "badPassword";

  //if there is no error gives false
  return false;
};

//make hash
export const hashPassword = async (pass) => {
  //make a salt by 10 complexity
  const salt = await genSalt(10);
  const hashedPassword = await hash(pass, salt);
  return hashedPassword;
};
