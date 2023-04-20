import { Divider, Grid, Tooltip, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AuthorsInCol = ({ authors }) => {
  return (
    <>
      {authors.map((author, index) => (
        <Grid item key={author.id}>
          <Grid
            container
            sx={{
              marginBottom: 1,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Link
              href={`authors/${author.slug}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Image
                src={author.avatar.url}
                alt={author.avatar.filename || 'avatar'}
                width={45}
                height={45}
                style={{ borderRadius: '50%', cursor: 'pointer' }}
              />
            </Link>
            <Grid
              item
              sx={{
                display: 'flex',
                flexDirection: 'column',
                maxWidth: '100px',
                marginRight: 1,
              }}
            >
              <Link href={`authors/${author.slug}`} style={{ height: '20px' }}>
                <Tooltip title={author.name} placement="bottom-end">
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: '16px',
                      fontWeight: 'bold',
                      marginY: 0,
                      padding: 0,
                      width: '100px',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: 'inline-block',
                      whiteSpace: 'nowrap',
                      cursor: 'pointer',
                    }}
                  >
                    {author.name}
                  </Typography>
                </Tooltip>
              </Link>
              <span>{author.field}</span>
            </Grid>
          </Grid>
          {index < authors.length - 1 ? <Divider /> : ''}
        </Grid>
      ))}
    </>
  );
};
export default AuthorsInCol;
