'use client';

import Theme from '@/helper/MUI/Theme';
import { ExtendButtonBase } from '@mui/material';
import ButtonMain, { ButtonTypeMap } from '@mui/material/Button';

const Button: ExtendButtonBase<ButtonTypeMap<{}, 'button'>> = ({
  children,
  ...props
}: any) => {
  return (
    <Theme>
      <ButtonMain {...props}>{children}</ButtonMain>
    </Theme>
  );
};

export default Button;
