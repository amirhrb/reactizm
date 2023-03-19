import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";

//components
import Login from "../../components/modules/Login";
import Register from "../../components/modules/Register";

const AuthTemplate = () => {
  const [value, setValue] = useState("register");
  const handleChange = (event, newValue) => {
    if (newValue !== null) setValue(newValue);
  };
  return (
    <Box
      sx={{
        minHeight: 400,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: "Background.default",
      }}
    >
      <ToggleButtonGroup value={value} exclusive onChange={handleChange}>
        <ToggleButton
          value="register"
          aria-label="module"
          disableRipple
          sx={{ px: 1 }}
        >
          ثبت نام
        </ToggleButton>
        <ToggleButton
          value="login"
          aria-label="login"
          disableRipple
          sx={{ px: "13px" }}
        >
          ورود
        </ToggleButton>
      </ToggleButtonGroup>
      <Box
        sx={{
          width: "260px",
          position: "relative",
          overflowX: "hidden",
        }}
      >
        <Box
          sx={{
            width: "560px",
            display: "flex",
            justifyContent: "space-between",
            transition: "all 0.5s ease-out",
            transform:
              value === "login" ? "translateX(-300px)" : "translateX(0)",
          }}
        >
          <Register />
          <Login />
        </Box>
      </Box>
    </Box>
  );
};

export default AuthTemplate;
