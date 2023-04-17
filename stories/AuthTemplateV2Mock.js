import React, { useState } from 'react';

import styles from './styles.module.css';
import {
  Button as DefaultButton,
  TextField as DefalutTextField,
  Typography,
  styled,
} from '@mui/material';

const Button = styled(DefaultButton)(({ theme }) => ({
  borderRadius: '45px',
  padding: '10px 20px',
  fontSize: '1.1rem',
  lineHeight: '20px',
  '&:active': {
    transform: 'scale(0.98) translateY(2px)',
  },
  '&:hover, &.Mui-focusVisible': {
    backgroundColor: theme.palette.primary.main,
  },
}));

const TextField = styled(DefalutTextField)(({ theme }) => ({
  margin: '10px auto',
  borderRadius: '20px',
}));

const AuthTemplateV2Mock = () => {
  const [isLogin, setLogin] = useState(false);
  return (
    <div
      className={`${styles.container} ${
        isLogin ? styles.rightPanelActive : ''
      }`}
    >
      <div className={`${styles.formContainer} ${styles.signUpContainer}`}>
        <form action="#">
          <Typography component="h1" sx={{ fontWeight: 'bold', fontSize: 25 }}>
            ثبت نام
          </Typography>
          <TextField type="text" variant="outlined" label="ایمیل" />
          <TextField type="email" variant="outlined" label="ایمیل" />
          <TextField type="password" variant="outlined" label="ایمیل" />
          <Button disableRipple variant="contained">
            ثبت نام
          </Button>
        </form>
      </div>
      <div className={`${styles.formContainer} ${styles.signInContainer}`}>
        <form action="#">
          <Typography component="h1" sx={{ fontWeight: 'bold', fontSize: 25 }}>
            ورود
          </Typography>

          <TextField type="email" variant="outlined" label="ایمیل" />
          <TextField type="password" variant="outlined" label="ایمیل" />
          <a href="#">Forgot your password?</a>
          <Button disableRipple variant="contained">
            ورود
          </Button>
        </form>
      </div>
      <div className={styles.overlayContainer}>
        <div className={styles.overlay}>
          <div className={`${styles.overlayPanel} ${styles.overlayLeft}`}>
            <Typography
              component="h1"
              dir="rtl"
              sx={{ fontWeight: 'bold', fontSize: 25 }}
            >
              خوش برگشتی!
            </Typography>
            <p>
              To keep connected with us please login with your personal info
            </p>
            <Button
              disableRipple
              variant="contained"
              onClick={() => setLogin(false)}
            >
              ورود
            </Button>
          </div>
          <div className={`${styles.overlayPanel} ${styles.overlayRight}`}>
            <Typography
              component="h1"
              dir="rtl"
              sx={{ fontWeight: 'bold', fontSize: 25 }}
            >
              سلام دوستان!
            </Typography>
            <p>Enter your personal details and start journey with us</p>
            <Button
              disableRipple
              variant="contained"
              onClick={() => setLogin(true)}
            >
              ثبت نام
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthTemplateV2Mock;
