import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";

//components
import LoginMock from "./LoginMock";
import RegisterMock from "./RegisterMock";

const AuthTemplate = ({ contBgColor, ...args }) => {
  const [value, setValue] = useState(() => "register");
  const handleChange = (event, newValue) => {
    if (newValue !== null) setValue(newValue);
  };
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: 400,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: contBgColor && "Background.default",
      }}
      dir="rtl"
    >
      <ToggleButtonGroup
        value={value}
        exclusive
        onChange={handleChange}

        // dir="ltr"
      >
        <ToggleButton
          dir="rtl"
          value="register"
          aria-label="module"
          disableRipple
          sx={{ px: 1 }}
        >
          ثبت نام
        </ToggleButton>
        <ToggleButton
          dir="rtl"
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
          <RegisterMock {...args} />
          <LoginMock {...args} />
        </Box>
      </Box>
    </Box>
  );
};

export default AuthTemplate;
