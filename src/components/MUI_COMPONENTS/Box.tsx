'use client';

import Theme from '@/helper/MUI/Theme';
import MainBox from '@mui/material/Box';
import { BoxTypeMap } from '@mui/system';
import { OverridableComponent } from '@mui/types';

const Box: OverridableComponent<BoxTypeMap<{}, 'div'>> = ({
  children,
  ...props
}: any) => {
  return (
    <Theme>
      <MainBox {...props}>{children}</MainBox>
    </Theme>
  );
};

export default Box;
