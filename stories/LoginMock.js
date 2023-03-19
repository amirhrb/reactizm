import { Box, Button, TextField } from "@mui/material";

const Login = ({ bgColor, bRadius }) => {
  return (
    <Box
      sx={{
        width: 260,
        backgroundColor: bgColor?.length ? bgColor : "background.paper",
        display: "flex",
        flexDirection: "column",
        borderRadius: bRadius?.length ? bRadius : 5,
      }}
      dir="rtl"
    >
      <h2 style={{ padding: "0 16px" }}>ورود</h2>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          // alignItems: "center",
          // p: 2,
        }}
      >
        <TextField
          type="email"
          id="standard-basic"
          label="ایمیل"
          sx={{ my: 1, mx: 2, borderRadius: bRadius?.length ? bRadius : 5 }}
        />
        <TextField
          id="standard-password-input"
          label="رمز عبور"
          type="password"
          sx={{ my: 1, mx: 2, borderRadius: bRadius?.length ? bRadius : 5 }}
          autoComplete="current-password"
        />
        <Button
          variant="contained"
          type="submit"
          onClick={(e) => e.preventDefault()}
          sx={{
            m: 2,
            borderRadius: bRadius?.length ? bRadius : 5,
          }}
        >
          ورود
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
