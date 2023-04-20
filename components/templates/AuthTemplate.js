import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useFormik } from 'formik';
import * as yup from 'yup';

import { signIn } from 'next-auth/react';

import {
  Button as DefaultButton,
  TextField as DefalutTextField,
  Typography,
  styled,
  Container,
  IconButton,
  Box,
  Divider,
  Tooltip,
  useTheme,
} from '@mui/material';
import { GitHub, Google } from '@mui/icons-material';

import styles from './styles/AuthTemplate.module.css';
import { toast } from 'react-toastify';

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

const TextButton = styled(DefaultButton)(({ theme }) => ({
  height: '20px',
  '&:hover, &.Mui-focusVisible': {
    color: theme.palette.error.main,
    backgroundColor: theme.palette.background.default,
  },
}));

const TextField = styled(DefalutTextField)(({}) => ({
  margin: '8px auto',
  borderRadius: '20px',
  '.Mui-focused.MuiInputLabel-outlined': {
    transform: 'translate(14px, -8px) scale(0.75)',
  },
  '.MuiFormLabel-filled.MuiInputLabel-outlined': {
    transform: 'translate(14px, -8px) scale(0.75)',
  },
  '.MuiInputLabel-outlined': {
    transform: 'translate(14px, 10px) scale(1)',
  },
  '.MuiFormHelperText-root': {
    padding: 0,
    margin: 0,
    textAlign: 'center',
  },
}));

const signUpSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, 'letters and numbers')
    .min(8, 'minimum 8 characters')
    .required('Password is required'),
  cpassword: yup
    .string()
    .required('Confirm the password')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

const signInSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'minimum 8 characters')
    .required('Password is required'),
});

const AuthTemplate = () => {
  const [isLogin, setLogin] = useState(false);

  const router = useRouter();

  const theme = useTheme();

  const signUpFormik = useFormik({
    initialValues: {
      email: '',
      password: '',
      cpassword: '',
    },
    validationSchema: signUpSchema,
    onSubmit: async (values, { resetForm }) => {
      const res = await fetch('/api/auth/credential-signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cpassword: values.cpassword,
          password: values.password,
          email: values.email,
        }),
      });
      const data = await res.json();
      if (res.status === 201) {
        toast.success(data.message, { theme: theme.palette.mode });
        resetForm();
        setLogin(false);
      } else if (res.status === 402) {
        toast.warning(data.message, { theme: theme.palette.mode });
      } else {
        toast.error(data.message, { theme: theme.palette.mode });
        resetForm();
      }
    },
  });
  const signInFormik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: signInSchema,
    onSubmit: async (values, { resetForm }) => {
      const res = await signIn('credentials', {
        redirect: false,
        email: values.email,
        password: values.password,
      });
      if (!res.ok) {
        toast.error(res.error);
        return;
      }
      if (res.ok) {
        toast.success('you are signed in now');
        await new Promise((res) => {
          setTimeout(res, 1000);
        });
        router.replace('/');
      }
    },
  });

  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: 3,
        p: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        dir="ltr"
        className={`${styles.container} ${isLogin && styles.rightPanelActive}`}
      >
        <div className={`${styles.formContainer} ${styles.signUpContainer}`}>
          <form className={styles.form} onSubmit={signUpFormik.handleSubmit}>
            <Typography dir="rtl"> ورود با گیت هاب یا گوگل</Typography>
            <Box sx={{ display: 'flex' }}>
              <IconButton onClick={() => signIn('github', { redirect: false })}>
                <GitHub />
              </IconButton>
              <Tooltip title="فعلا ممکنه درست کار نکنه/:">
                <IconButton
                  onClick={() => signIn('google', { redirect: false })}
                >
                  <Google />
                </IconButton>
              </Tooltip>
            </Box>
            <Typography
              component="h1"
              sx={{ fontWeight: 'bold', fontSize: 25 }}
            >
              ثبت نام
            </Typography>
            <TextField
              id="textField-register-email"
              type="email"
              variant="outlined"
              label="ایمیل"
              name="email"
              value={signUpFormik.values.email}
              onChange={signUpFormik.handleChange}
              error={
                signUpFormik.touched.email && Boolean(signUpFormik.errors.email)
              }
              helperText={
                signUpFormik.touched.email && signUpFormik.errors.email
              }
            />
            <TextField
              id="textField-register-password"
              type="password"
              variant="outlined"
              label="رمز عبور"
              name="password"
              value={signUpFormik.values.password}
              onChange={signUpFormik.handleChange}
              error={
                signUpFormik.touched.password &&
                Boolean(signUpFormik.errors.password)
              }
              helperText={
                signUpFormik.touched.password && signUpFormik.errors.password
              }
            />
            <TextField
              id="textField-register-name"
              type="password"
              variant="outlined"
              label="تکرار رمز"
              name="cpassword"
              value={signUpFormik.values.cpassword}
              onChange={signUpFormik.handleChange}
              error={
                signUpFormik.touched.cpassword &&
                Boolean(signUpFormik.errors.cpassword)
              }
              helperText={
                signUpFormik.touched.cpassword && signUpFormik.errors.cpassword
              }
            />
            <Button disableRipple variant="contained" type="submit">
              ثبت نام
            </Button>
          </form>
        </div>
        <div className={`${styles.formContainer} ${styles.signInContainer}`}>
          <form className={styles.form} onSubmit={signInFormik.handleSubmit}>
            <Typography dir="rtl"> ورود با گیت هاب یا گوگل</Typography>
            <Box sx={{ display: 'flex' }}>
              <IconButton onClick={() => signIn('github')}>
                <GitHub />
              </IconButton>
              <Tooltip title="فعلا ممکنه درست کار نکنه/:">
                <IconButton onClick={() => signIn('google')}>
                  <Google />
                </IconButton>
              </Tooltip>
            </Box>
            <Divider />
            <Typography
              component="h1"
              sx={{ fontWeight: 'bold', fontSize: 25 }}
            >
              ورود
            </Typography>

            <TextField
              id="textField-login-email"
              type="email"
              variant="outlined"
              label="ایمیل"
              name="email"
              value={signInFormik.values.email}
              onChange={signInFormik.handleChange}
              error={
                signInFormik.touched.email && Boolean(signInFormik.errors.email)
              }
              helperText={
                signInFormik.touched.email && signInFormik.errors.email
              }
            />
            <TextField
              id="textField-login-password"
              type="password"
              variant="outlined"
              label="رمز عبور"
              name="password"
              value={signInFormik.values.password}
              onChange={signInFormik.handleChange}
              error={
                signInFormik.touched.password &&
                Boolean(signInFormik.errors.password)
              }
              helperText={
                signInFormik.touched.password && signInFormik.errors.password
              }
            />
            <TextButton
              disableRipple
              variant="text"
              component={Link}
              dir="rtl"
              href="/forget-password"
            >
              رمز یادم رفته...
            </TextButton>
            <Button disableRipple variant="contained" type="submit">
              ورود
            </Button>
          </form>
        </div>
        <div className={styles.overlayContainer}>
          <div className={styles.overlay}>
            <div className={`${styles.overlayPanel} ${styles.overlayLeft}`}>
              <Typography
                dir="rtl"
                component="h1"
                sx={{ fontWeight: 'bold', fontSize: 25 }}
              >
                خوش برگشتی!
              </Typography>
              <p dir="rtl">اگه حساب کاربری داری میتونی از اینجا وارد شی😌</p>
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
                dir="rtl"
                component="h1"
                sx={{ fontWeight: 'bold', fontSize: 25 }}
              >
                سلام دوستان!
              </Typography>
              <p dir="rtl">
                اگه قبلا ثبت نام نکردی اول از اینجا با مشخصات خودت ثبت نام کن!
              </p>
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
    </Container>
  );
};

export default AuthTemplate;
