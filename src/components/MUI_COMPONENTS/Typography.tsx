'use client';

import Theme from '@/helper/MUI/Theme';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import MainTypography, { TypographyTypeMap } from '@mui/material/Typography';

const Typography: OverridableComponent<TypographyTypeMap<{}, 'span'>> = ({
  children,
  ...props
}: any) => {
  return (
    <Theme>
      <MainTypography {...props}>{children}</MainTypography>
    </Theme>
  );
};

export default Typography;
