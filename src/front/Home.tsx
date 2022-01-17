import * as React from 'react';
import { Box, Typography } from '@mui/material';

const useWindowDimensions = () => {
  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
  };

  const [windowDimensions, setWindowDimensions] = React.useState(
    getWindowDimensions()
  );
  React.useEffect(() => {
    const onResize = () => {
      setWindowDimensions(getWindowDimensions());
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return windowDimensions;
};

const Home: React.VFC = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#C1C1C1',
        height: useWindowDimensions().height,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '-3rem',
      }}
    >
      <div>
        <Typography variant="h2">welcome to my portfolio</Typography>
      </div>
    </Box>
  );
};

export default Home;
