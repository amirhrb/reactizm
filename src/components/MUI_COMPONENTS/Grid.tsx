'use client';

import Theme from '@/helper/MUI/Theme';
import MainGrid, { GridTypeMap } from '@mui/material/Grid';
import { OverridableComponent } from '@mui/material/OverridableComponent';

const Grid: OverridableComponent<GridTypeMap<{}, 'div'>> = ({
  children,
  ...props
}: any) => {
  return (
    <Theme>
      <MainGrid {...props}>{children}</MainGrid>
    </Theme>
  );
};

export default Grid;
