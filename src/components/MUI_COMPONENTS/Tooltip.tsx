'use client';

import Theme from '@/helper/MUI/Theme';
import TooltipMain, { TooltipProps } from '@mui/material/Tooltip';

function Tooltip(props: TooltipProps): JSX.Element {
  return (
    <Theme>
      <TooltipMain {...props} />
    </Theme>
  );
}

export default Tooltip;
