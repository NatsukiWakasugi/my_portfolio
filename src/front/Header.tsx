import * as React from 'react';
import { Tab, Tabs } from '@mui/material';
import { Link } from 'react-router-dom';

const Contact: React.VFC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div style={{ width: '30rem' }}>
      <Tabs
        textColor="secondary"
        indicatorColor="secondary"
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        variant="fullWidth"
      >
        <Tab label="Home" component={Link} to="/" />
        <Tab label="Profile" component={Link} to="/profile" />
        <Tab label="Skill" component={Link} to="/skill" />
        <Tab label="Contact" component={Link} to="/contact" />
      </Tabs>
    </div>
  );
};

export default Contact;
