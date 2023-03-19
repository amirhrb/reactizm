import { Box } from "@mui/material";

const Register = () => {
  // try {
  //     const response = await fetch("http://localhost:3000/api/register", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Accept-Language": "fa-IR",
  //       },
  //       body: JSON.stringify({
  //         email: "amir@gmail.com",
  //         password: "123456AAd",
  //       }),
  //     });
  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  return (
    <Box>
      <h2>Register</h2>
      <form>
        <label htmlFor="emailInput">ایمیل</label>
        <input
          type="text"
          id="emailInput"
          placeholder="ایمیل خود را اینجا بنویسید"
        />
        <label htmlFor="passwordInput">رمز عبور</label>
        <input type="password" id="passwordInput" placeholder="یک رمز بنویس" />
        <input type="submit" onClick={(e) => e.preventDefault()} />
      </form>
    </Box>
  );
};

export default Register;
