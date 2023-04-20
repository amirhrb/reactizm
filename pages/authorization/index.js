//mui
import { Box } from '@mui/material';

//components
import BreadComponent from '../../components/modules/BreadComponent';
import AuthTemplate from '../../components/templates/AuthTemplate';
// import { getSession } from 'next-auth/react';

//fns
// import { isVaildToken } from '../../helper/utils/functions';
// import { User } from '../../helper/utils/Models';

const index = () => {
  return (
    <Box sx={{ minHeight: '80svh', mt: 2 }}>
      <BreadComponent />
      <AuthTemplate />
    </Box>
  );
};

export default index;
