import * as React from 'react';
import { Box, Container, Typography } from '@mui/material';
import useWindowDimensions from './common';

const style = {
  pie: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '2rem',
    marginBottom: '2rem',
    width: '7.5rem',
    height: '7.5rem',
    borderRadius: '50%',
  },
  smallPie: {
    marginLeft: '1.5rem',
    marginRight: '0.25rem',
    width: '2rem',
    height: '2rem',
    borderRadius: '50%',
  },
};

const Skill: React.VFC = () => {
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
          <div style={{ padding: '3rem' }}>
            <div
              style={{
                display: 'flex',
              }}
            >
              <div
                style={{
                  ...style.pie,
                  backgroundImage:
                    'radial-gradient(#C1C1C1 40%, transparent 31%), conic-gradient(#a790a7 50% 75%, #FFFFFF 60% 100%)',
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: '#555555',
                  }}
                >
                  Ruby
                </Typography>
              </div>
              <div
                style={{
                  ...style.pie,
                  backgroundImage:
                    'radial-gradient(#C1C1C1 40%, transparent 31%), conic-gradient(#a790a7 0% 75%, #FFFFFF 10% 100%)',
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: '#555555',
                  }}
                >
                  JavaScript
                </Typography>
              </div>
              <div
                style={{
                  ...style.pie,
                  backgroundImage:
                    'radial-gradient(#C1C1C1 40%, transparent 31%), conic-gradient(#a790a7 0% 75%, #FFFFFF 60% 100%)',
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: '#555555',
                  }}
                >
                  TypeScript
                </Typography>
              </div>
              <div
                style={{
                  ...style.pie,
                  backgroundImage:
                    'radial-gradient(#C1C1C1 40%, transparent 31%), conic-gradient(#a790a7 0% 50%, #FFFFFF 15% 100%)',
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: '#555555',
                  }}
                >
                  Java
                </Typography>
              </div>
              <div
                style={{
                  ...style.pie,
                  backgroundImage:
                    'radial-gradient(#C1C1C1 40%, transparent 31%), conic-gradient(#a790a7 0% 25%, #FFFFFF 10% 100%)',
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: '#555555',
                  }}
                >
                  PHP
                </Typography>
              </div>
              <div
                style={{
                  ...style.pie,
                  backgroundImage:
                    'radial-gradient(#C1C1C1 40%, transparent 31%), conic-gradient(#a790a7 0% 25%, #FFFFFF 10% 100%)',
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: '#555555',
                  }}
                >
                  Go
                </Typography>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
              }}
            >
              <div
                style={{
                  ...style.pie,
                  backgroundImage:
                    'radial-gradient(#C1C1C1 40%, transparent 31%), conic-gradient(#a790a7 0% 75%, #FFFFFF 60% 100%)',
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: '#555555',
                  }}
                >
                  Rails
                </Typography>
              </div>
              <div
                style={{
                  ...style.pie,
                  backgroundImage:
                    'radial-gradient(#C1C1C1 40%, transparent 31%), conic-gradient(#a790a7 0% 75%, #FFFFFF 60% 100%)',
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: '#555555',
                  }}
                >
                  React
                </Typography>
              </div>
              <div
                style={{
                  ...style.pie,
                  backgroundImage:
                    'radial-gradient(#C1C1C1 40%, transparent 31%), conic-gradient(#a790a7 0% 75%, #FFFFFF 60% 100%)',
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: '#555555',
                  }}
                >
                  MySQL
                </Typography>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                color: '#555555',
                alignItems: 'center',
                marginLeft: '-1.5rem',
                marginTop: '4rem',
              }}
            >
              <div
                style={{
                  ...style.smallPie,
                  backgroundImage:
                    'radial-gradient(#C1C1C1 40%, transparent 31%), conic-gradient(#a790a7 0% 100%, #FFFFFF 60% 100%)',
                }}
              />
              5年以上
              <div
                style={{
                  ...style.smallPie,
                  backgroundImage:
                    'radial-gradient(#C1C1C1 40%, transparent 31%), conic-gradient(#a790a7 0% 75%, #FFFFFF 0% 100%)',
                }}
              />
              3年以上
              <div
                style={{
                  ...style.smallPie,
                  backgroundImage:
                    'radial-gradient(#C1C1C1 40%, transparent 31%), conic-gradient(#a790a7 0% 50%, #FFFFFF 0% 100%)',
                }}
              />
              1年以上
              <div
                style={{
                  ...style.smallPie,
                  backgroundImage:
                    'radial-gradient(#C1C1C1 40%, transparent 31%), conic-gradient(#a790a7 0% 25%, #FFFFFF 10% 100%)',
                }}
              />
              1年未満
            </div>
            <Box
              sx={{
                position: 'absolute',
                width: '45%',
                height: '60%',
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
                  padding: '0 3rem 0 7rem',
                  borderBottom: '0.2rem solid;',
                  borderBottomColor: '#FFFFFF',
                }}
              >
                Skill
              </Typography>
              <Typography
                sx={{
                  paddingLeft: '6rem',
                  borderBottom: '0.2rem solid;',
                  borderBottomColor: '#a790a7',
                }}
              />
            </div>
          </div>
        </Box>
      </Container>
    </div>
  );
};

export default Skill;
