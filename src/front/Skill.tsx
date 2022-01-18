import * as React from 'react';
import { Box, Container, Typography } from '@mui/material';
import useWindowDimensions from './common';

const Skill: React.VFC = () => {
  const height = useWindowDimensions().height;

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
          hoge
          <Box
            sx={{
              position: 'absolute',
              width: '50%',
              height: `calc(${height}px / 2)`,
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
              Skill
            </Typography>
          </div>
        </Box>
      </Container>
    </div>
  );
};

export default Skill;
