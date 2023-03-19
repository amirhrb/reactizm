import { Box, TextField } from "@mui/material";

const Login = () => {
  return (
    <Box>
      <h2>login</h2>
      <Box component="form" noValidate autoComplete="off">
        <label htmlFor="emailInput">ایمیل</label>
        <input
          type="text"
          id="emailInput"
          placeholder="ایمیل خود را اینجا بنویسید"
        />
        {/* <label htmlFor="passwordInput">رمز عبور</label>
        <input type="password" id="passwordInput" placeholder="یک رمز بنویس" /> */}
        <TextField
          id="outlined-password-input"
          label="رمز عبور"
          type="password"
          autoComplete="current-password"
        />
        <input type="submit" onClick={(e) => e.preventDefault()} />
      </Box>
    </Box>
  );
};

export default Login;
