import * as React from 'react';
import { Box, Typography } from '@mui/material';
import useWindowDimensions from './common';

const Home: React.VFC = () => {
  const height = useWindowDimensions().height;

  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: '#C1C1C1',
        height: height,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.8,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: height,
          backgroundColor: '#B3AFB4',
          clipPath: 'polygon(0 0, 66% 0, 33% 100%, 0% 100%)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: height,
          backgroundColor: '#a790a7',
          clipPath: 'polygon(0 0, 0 66%, 66% 0)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: height,
          backgroundColor: '#FFFFFF',
          clipPath: 'polygon(100% 66%, 67% 100%, 100% 100%)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: `calc(${height}px / 2.5)`,
          height: `calc(${height}px / 2.5)`,
          left: '66%',
          borderRadius: '100%',
          backgroundColor: '#a790a7',
          opacity: 0.8,
        }}
      />
      <Typography
        variant="h2"
        sx={{
          color: '#434343',
          zIndex: 50,
          padding: '0 4rem 0',
          borderBottom: '0.2rem solid;',
          borderBottomColor: 'rgba(255, 255, 255, 0.75)',
        }}
      >
        Welcome to my Portfolio
      </Typography>
    </Box>
  );
};

export default Home;
