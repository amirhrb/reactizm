import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";

//components
import Login from "../../components/modules/Login";
import Register from "../../components/modules/Register";

import styles from "../styles/AuthTemplate.module.scss";

const AuthTemplate = () => {
  const [value, setValue] = useState("register");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
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
          value="login"
          aria-label="login"
          sx={{ px: "13px" }}
        >
          ورود
        </ToggleButton>
        <ToggleButton
          dir="rtl"
          value="register"
          aria-label="module"
          sx={{ px: 1 }}
        >
          ثبت نام
        </ToggleButton>
      </ToggleButtonGroup>
      <div className={styles.wraper}>
        <Register
          className={
            value === "register" ? styles.activeReg : styles.disableReg
          }
        />
        <Login
          className={
            value === "login" ? styles.activeLogin : styles.disableLogin
          }
        />
      </div>
    </Box>
  );
};

export default AuthTemplate;
