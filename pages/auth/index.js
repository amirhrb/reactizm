//mui
import { Box } from '@mui/material';

//components
import BreadComponent from '../../components/modules/BreadComponent';
import AuthTemplate from '../../components/templates/AuthTemplate';

const index = () => {
  return (
    <Box sx={{ minHeight: '80vh', mt: 2 }}>
      <BreadComponent />
      <AuthTemplate />
    </Box>
  );
};

export default index;
