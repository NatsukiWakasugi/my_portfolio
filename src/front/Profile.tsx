import * as React from 'react';
import { Container } from '@mui/material';

const Profile: React.VFC = () => {
  return (
    <div style={{ marginTop: '3rem' }}>
      <Container>
        <div
          style={{
            width: '20rem',
            height: '20rem',
            backgroundColor: '#C1C1C1',
          }}
        />
        <h1>Profile</h1>
        name: 大山奈津妃 githubリンク
      </Container>
    </div>
  );
};

export default Profile;
