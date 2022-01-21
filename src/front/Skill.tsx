import * as React from 'react';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import useWindowDimensions from './common';

const Skill: React.VFC = () => {
  const height = useWindowDimensions().height;

  const style = {
    item: {
      width: '100%',
      borderBottomColor: '#a790a7',
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      display: 'flex',
      alignItems: 'center',
    },
    circle: {
      width: `calc(${height}px / 6.5)`,
      height: `calc(${height}px / 6.5)`,
      borderRadius: '100%',
      color: 'inherit',
      // borderColor: '#a790a7',
      // border: 'solid ',
      backgroundColor: '#a790a7',
      opacity: 0.65,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 3,
    },
  };
  return (
    <div style={{ marginTop: '5rem' }}>
      <Container>
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            p: '3rem',
            height: `calc(${height}px * 0.55)`,
            backgroundColor: 'rgba(190, 190, 190, 0.75)',
          }}
        >
          <Grid container spacing={4}>
            <Grid item xs={8}>
              <div>
                <Stack spacing={3.5} justifyContent="space-evenly">
                  <div style={style.item}>
                    <Typography variant="h4" pl="2rem">
                      name: natsuki
                    </Typography>
                  </div>
                  <div style={style.item}>
                    <Typography variant="h4" pl="2rem">
                      name: natsuki
                    </Typography>
                  </div>
                  <div style={style.item}>
                    <Typography variant="h4" pl="2rem">
                      name: natsuki
                    </Typography>
                  </div>
                  <div style={style.item}>
                    <Typography variant="h4" pl="2rem">
                      name: natsuki
                    </Typography>
                  </div>
                </Stack>
              </div>
            </Grid>
            <Grid item xs={4}>
              <Stack
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                spacing={3}
              >
                <a
                  href="https://github.com/NatsukiWakasugi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Box sx={{ ...style.circle }}>
                    <Typography variant="h6">github</Typography>
                  </Box>
                </a>
                <Box sx={{ ...style.circle }}>
                  <Typography variant="h6">github</Typography>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            position: 'absolute',
            width: '33%',
            height: `calc(${height}px * 0.4)`,
            right: '11%',
            bottom: '19%',
            backgroundColor: 'rgba(179, 175, 180, 0.75)',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              position: 'absolute',
              display: 'flex',
              right: '-5rem',
            }}
          >
            <Typography
              variant="h2"
              sx={{
                color: '#555555',
                padding: '0 3rem 0 7rem',
                borderBottom: '0.2rem solid;',
                borderBottomColor: '#FFFFFF',
              }}
            >
              Profile
            </Typography>
            <Typography
              sx={{
                paddingRight: '5rem',
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

export default Skill;
