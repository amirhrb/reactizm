'use client';

import Theme from '@/helper/MUI/Theme';
import MainContainer, { ContainerTypeMap } from '@mui/material/Container';
import { OverridableComponent } from '@mui/material/OverridableComponent';

const Container: OverridableComponent<ContainerTypeMap<{}, 'div'>> = ({
  children,
  ...props
}: any) => {
  return (
    <Theme>
      <MainContainer {...props}>{children}</MainContainer>
    </Theme>
  );
};

export default Container;
