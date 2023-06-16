//apollo client
import { ApolloWrapper } from '@/helper/graphql/apollo-wrapper';

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
        <DrawerContextProvider>
          <ApolloWrapper>{children}</ApolloWrapper>
        </DrawerContextProvider>
      </ClerkProvider>
    </Theme>
  );
};

export default Providers;
