'use client';

import Theme from '@/helper/MUI/Theme';
import BreadcrumbsMain, { BreadcrumbsTypeMap } from '@mui/material/Breadcrumbs';
import { OverridableComponent } from '@mui/material/OverridableComponent';

const Breadcrumbs: OverridableComponent<BreadcrumbsTypeMap<{}, 'nav'>> = ({
  children,
  ...props
}: any) => {
  return (
    <Theme>
      <BreadcrumbsMain {...props}>{children}</BreadcrumbsMain>
    </Theme>
  );
};
export default Breadcrumbs;
