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
    >
      <ToggleButtonGroup
        value={value}
        exclusive
        onChange={handleChange}
        dir="ltr"
      >
        <ToggleButton value="login" aria-label="login" sx={{ px: "13px" }}>
          ورود
        </ToggleButton>
        <ToggleButton value="register" aria-label="module" sx={{ px: 1 }}>
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
