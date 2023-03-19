import { Box, Button, TextField } from "@mui/material";

const Login = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.contrastText",
        display: "flex",
        flexDirection: "column",
      }}
      dir="rtl"
    >
      <h2 style={{ padding: "0 16px" }}>ورود</h2>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <TextField
          type="email"
          id="standard-basic"
          label="ایمیل خود را اینجا بنویسید"
          sx={{ mx: 2, mb: 1 }}
        />
        <TextField
          id="standard-password-input"
          label="رمز عبور"
          type="password"
          sx={{ mx: 2, mb: 1 }}
          autoComplete="current-password"
        />
        <Button
          variant="contained"
          type="submit"
          onClick={(e) => e.preventDefault()}
        >
          ثبت نام
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
