import * as React from 'react';
import useWindowDimensions from './common';
import {
  Box,
  createTheme,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { LoadingButton } from '@mui/lab';

import { init, send } from 'emailjs-com';

const theme = createTheme({
  palette: {
    primary: {
      main: '#a790a7',
      dark: '#968196',
    },
  },
});

const Contact: React.VFC = () => {
  const height = useWindowDimensions().height;
  const [formParams, setFormParams] = React.useState<{
    name: string;
    email: string;
    message: string;
  }>({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const handleClick = React.useCallback(async () => {
    const userID = process.env.REACT_APP_USER_ID;
    const serviceID = process.env.REACT_APP_SERVICE_ID;
    const templateID = process.env.REACT_APP_TEMPLATE_ID;

    if (userID && serviceID && templateID) {
      init(userID);
      const templateParam = {
        to_name: formParams.name,
        from_email: formParams.email,
        message: formParams.message,
      };
      try {
        setIsLoading(true);
        await send(serviceID, templateID, templateParam).then(() => {
          setIsLoading(false);
          alert('お問い合わせを送信致しました。');
          setFormParams({ name: '', email: '', message: '' });
        });
      } catch (e) {
        setIsLoading(false);
        alert('エラーが発生しました。時間を空けてから再度送信して下さい。');
      }
    }
  }, [formParams.name, formParams.email, formParams.message]);

  const disabled =
    formParams.name === '' ||
    formParams.email === '' ||
    formParams.message === '';

  return (
    <div style={{ marginTop: '5rem' }}>
      <Container>
        <Box
          sx={{
            position: 'relative',
            margin: '9rem 0 0 auto',
            width: '90%',
            height: `calc(${height}px * 2/3)`,
            backgroundColor: 'rgba(190, 190, 190, 0.75)',
          }}
        >
          <div style={{ padding: '3rem' }}>
            <Grid container spacing={4}>
              <Grid item xs={4.5} />
              <Grid item xs={7.5}>
                <Stack>
                  <TextField
                    fullWidth
                    id="name"
                    label="お名前"
                    variant="filled"
                    value={formParams.name}
                    onChange={(e) =>
                      setFormParams({ ...formParams, name: e.target.value })
                    }
                    sx={{ mb: '2rem', backgroundColor: '#FFFFFF' }}
                  />
                  <TextField
                    fullWidth
                    id="email"
                    label="メールアドレス"
                    value={formParams.email}
                    variant="filled"
                    onChange={(e) =>
                      setFormParams({ ...formParams, email: e.target.value })
                    }
                    sx={{ mb: '2rem', backgroundColor: '#FFFFFF' }}
                  />
                  <TextField
                    fullWidth
                    multiline
                    id="message"
                    label="問い合わせ内容"
                    value={formParams.message}
                    variant="filled"
                    rows={5}
                    onChange={(e) =>
                      setFormParams({ ...formParams, message: e.target.value })
                    }
                    sx={{ mb: '2rem', backgroundColor: '#FFFFFF' }}
                  />

                  <ThemeProvider theme={theme}>
                    <LoadingButton
                      disabled={disabled}
                      color="primary"
                      variant="contained"
                      onClick={handleClick}
                      loading={isLoading}
                    >
                      送信
                    </LoadingButton>
                  </ThemeProvider>
                </Stack>
              </Grid>
            </Grid>
          </div>
          <Box
            sx={{
              position: 'absolute',
              width: '45%',
              height: '60%',
              left: '-6rem',
              top: '-4rem',
              backgroundColor: 'rgba(179, 175, 180, 0.75)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              display: 'flex',
              left: '-12rem',
              top: '4rem',
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
              Contact
            </Typography>
          </div>
        </Box>
      </Container>
    </div>
  );
};

export default Contact;
