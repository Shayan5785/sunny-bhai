import * as React from 'react';
import PostData from './components/PostData';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PollIcon from '@mui/icons-material/Poll';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Copyright from './components/Copyright';

// Creating Theme
const theme = createTheme();

function App() {

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    PostData(data.get('email'), data.get('password'))
  };

  return (

<ThemeProvider theme={theme}>
{/* Container */}
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <PollIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
          Impact of Social Media Marketing Activities 
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            {/* name field  */}
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
            />

            {/* gender field */}
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                required
                name="gender"
              >
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
              </RadioGroup>

            {/* age group */}
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              required
              name="age"
            >
              <FormControlLabel value="below 18" control={<Radio />} label="below 18" />
              <FormControlLabel value="18-24" control={<Radio />} label="18-24" />
              <FormControlLabel value="25-29" control={<Radio />} label="25-29" />
              <FormControlLabel value="above 30" control={<Radio />} label="above 30" />
            </RadioGroup>

            {/* brand */}
            <FormLabel id="demo-radio-buttons-group-label">Which of the following is your prefered brand?
</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              required
              name="age"
            >
              <FormControlLabel value="Outfitters" control={<Radio />} label="Outfitters" />
              <FormControlLabel value="J." control={<Radio />} label="J." />
              <FormControlLabel value="Alkaram" control={<Radio />} label="Alkaram" />
            </RadioGroup>

            {/* email field  */}
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />

            {/* password field  */}
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit Form
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
