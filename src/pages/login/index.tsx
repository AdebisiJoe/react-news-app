import React, { useState } from 'react';
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const fetcher = (url: string, options: object) =>
  fetch(url, options).then((res) => res.json());

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    try {
      const response = await fetcher('http://0.0.0.0/api/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
  
      if (response.success) {
        // Registration success
        console.log('Registration success:', response);
        // You can handle success response here, e.g., redirect to another page
      } else {
        // Registration failure
        console.log('Registration failure:', response);
        setErrorMessage(response.message);
      }
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center" sx={{ height: '100vh' }}>
      <Grid item>
        <Paper elevation={3} sx={{ padding: 16, maxWidth: 800 }}>
          <Grid container direction="column" alignItems="center" spacing={2}>
            <Grid item>
              <Avatar sx={{ backgroundColor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
            </Grid>
            <Grid item>
              <Typography variant="h5" align="center">Login</Typography>
            </Grid>
            <Grid item>
              <form onSubmit={handleSubmit}>
                <Grid container direction="column" spacing={2}>
                  <Grid item>
                    <TextField
                      label="Username"
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      variant="outlined"
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      label="Password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      variant="outlined"
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item>
                    <Button type="submit" variant="outlined"  fullWidth>
                      Log in
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Login;
