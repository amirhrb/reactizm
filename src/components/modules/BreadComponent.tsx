'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

//mui
import HomeIcon from '@mui/icons-material/Home';
import { Breadcrumbs, Button, styled } from '@mui/material';

//styles
import styles from './styles/Breadcrumbs.module.scss';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.secondary.light,
  fontFamily: 'Segoe UI',
}));
const GreyButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontFamily: 'Segoe UI',
}));

function BreadComponent() {
  const paths = usePathname();
  const pathParts = useMemo(() => {
    return paths.split('/').slice(1);
  }, [paths]);
  let fullPath = '';
  return (
    <Breadcrumbs
      maxItems={3}
      separator="/"
      aria-label="breadcrumb"
      className={styles.crumbs}
      sx={{
        marginTop: {
          xs: 1,
          sm: 3,
        },
      }}
    >
      {pathParts.length ? (
        <Link href="/">
          <GreyButton variant="text" sx={{ fontSize: 'small' }}>
            Home
            <HomeIcon fontSize="small" />
          </GreyButton>
        </Link>
      ) : null}
      {pathParts.length
        ? pathParts.map((part, index) => {
            if (part) fullPath += `/${part}`;
            return (
              <Link href={fullPath ? fullPath : '/'} key={part}>
                {index !== pathParts.length - 1 ? (
                  <GreyButton variant="text" disableRipple>
                    {part.split('-').join(' ')}
                  </GreyButton>
                ) : (
                  <ColorButton variant="text" disableRipple>
                    {part.split('-').join(' ')}
                  </ColorButton>
                )}
              </Link>
            );
          })
        : null}
    </Breadcrumbs>
  );
}

export default BreadComponent;
