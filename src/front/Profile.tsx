import * as React from 'react';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { GitHub as GitHubIcon } from '@mui/icons-material';

import useWindowDimensions from './common';

const Profile: React.VFC = () => {
  const height = useWindowDimensions().height;
  const style = {
    item: {
      width: '100%',
      height: `calc(${height}px * 0.5`,
      borderBottomColor: '#a790a7',
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      display: 'flex',
      alignItems: 'center',
    },
    circle: {
      width: `calc(${height}px / 7)`,
      height: `calc(${height}px / 7)`,
      borderRadius: '100%',
      color: 'inherit',
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
            margin: '0 0 0 auto',
            width: '90%',
            height: `calc(${height}px * 2/3)`,
            backgroundColor: 'rgba(190, 190, 190, 0.75)',
          }}
        >
          <div style={{ padding: '3rem' }}>
            <Grid container spacing={4}>
              <Grid item xs={4.5}>
                <Stack
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="center"
                  spacing={0}
                >
                  <a
                    href="https://github.com/NatsukiWakasugi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon sx={{ width: '2.5rem', height: '2.5rem' }} />
                  </a>
                </Stack>
              </Grid>
              <Grid item xs={7.5}>
                <div>
                  <Stack spacing={3.5} justifyContent="space-evenly">
                    <div style={style.item}>
                      <Typography variant="h6" pl="2rem">
                        ・Natsuki <br />
                        ・システムエンジニア
                        <br />
                        ・福井出身、千葉在住
                        <br />
                        ・スマブラを嗜んでます。
                      </Typography>
                    </div>
                  </Stack>
                </div>
              </Grid>
            </Grid>
            <Box
              sx={{
                position: 'absolute',
                width: '45%',
                height: '60%',
                left: '-6rem',
                bottom: '-4rem',
                backgroundColor: 'rgba(179, 175, 180, 0.75)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                display: 'flex',
                left: '-12rem',
                bottom: '4rem',
              }}
            >
              <Typography
                sx={{
                  paddingLeft: '6rem',
                  borderBottom: '0.2rem solid;',
                  borderBottomColor: '#a790a7',
                }}
              />
              <Typography
                variant="h2"
                sx={{
                  color: '#555555',
                  padding: '0 6rem 0 3rem',
                  borderBottom: '0.2rem solid;',
                  borderBottomColor: '#FFFFFF',
                }}
              >
                Profile
              </Typography>
            </div>
          </div>
        </Box>
      </Container>
    </div>
  );
};

//             {/*<a*/}
//             {/*  href="https://github.com/NatsukiWakasugi"*/}
//             {/*  target="_blank"*/}
//             {/*  rel="noopener noreferrer"*/}
//             {/*>*/}
//             {/*  <Box sx={{ ...style.circle }}>*/}
//             {/*    <Typography variant="h6">*/}
//             {/*      <GitHubIcon />*/}
//             {/*    </Typography>*/}
//             {/*  </Box>*/}
//             {/*</a>*/}

export default Profile;
