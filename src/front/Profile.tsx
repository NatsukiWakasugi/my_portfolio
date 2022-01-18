import * as React from 'react';
import { Box, Container, Typography } from '@mui/material';
import useWindowDimensions from './common';

const Profile: React.VFC = () => {
  const height = useWindowDimensions().height;
  return (
    <div style={{ marginTop: '5rem' }}>
      <Container>
        <Box
          sx={{
            position: 'relative',
            width: '90%',
            height: `calc(${height}px * 2/3)`,
            backgroundColor: 'rgba(190, 190, 190, 0.75)',
          }}
        >
          name: natsuki githubリンク
          <Box
            sx={{
              position: 'absolute',
              width: '50%',
              height: `calc(${height}px / 2)`,
              right: '-6rem',
              bottom: '-4rem',
              backgroundColor: 'rgba(179, 175, 180, 0.75)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              display: 'flex',
              right: '-12rem',
              bottom: '4rem',
            }}
          >
            <Typography
              variant="h2"
              sx={{
                color: '#555555',
                padding: '0 3rem 0 6rem',
                borderBottom: '0.2rem solid;',
                borderBottomColor: '#FFFFFF',
              }}
            >
              Profile
            </Typography>
            <Typography
              sx={{
                paddingRight: '6rem',
                borderBottom: '0.2rem solid;',
                borderBottomColor: '#a790a7',
              }}
            />
          </div>
        </Box>
      </Container>
    </div>
  );
};

export default Profile;
