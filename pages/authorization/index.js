//mui
import { Box } from '@mui/material';

//components
import BreadComponent from '../../components/modules/BreadComponent';
import AuthTemplate from '../../components/templates/AuthTemplate';
import { getSession } from 'next-auth/react';

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  if (!session) {
    return {
      props: {
        authState: 'unauthorized',
      },
    };
  }
  return {
    redirect: {
      destination: '/',
      permanent: false,
    },
  };
}

const index = () => {
  return (
    <Box sx={{ minHeight: '80svh', mt: 2 }}>
      <BreadComponent />
      <AuthTemplate />
    </Box>
  );
};

export default index;
