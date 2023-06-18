'use client';

import Theme from '@/helper/MUI/Theme';
import { ExtendButtonBase } from '@mui/material';
import IconButtonMain, { IconButtonTypeMap } from '@mui/material/IconButton';

const IconButton: ExtendButtonBase<IconButtonTypeMap<{}, 'button'>> = ({
  children,
  ...props
}: any) => {
  return (
    <Theme>
      <IconButtonMain {...props}>{children}</IconButtonMain>
    </Theme>
  );
};

export default IconButton;
