//mui theme
import Theme from '@/helper/MUI/Theme';

//context
import DrawerContextProvider from '@/helper/contexts/DrawerContextProvider';

import { ReactNode } from 'react';
import { ClerkProvider } from '@clerk/nextjs';

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <Theme>
      <ClerkProvider
        appearance={{
          variables: {
            colorPrimary: '#ffb300',
          },
        }}
      >
        <DrawerContextProvider>{children}</DrawerContextProvider>
      </ClerkProvider>
    </Theme>
  );
};

export default Providers;
