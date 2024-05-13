import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import './Navbar.css';

import * as React from 'react'
function Navbar() {

  return (
    <div className='Navbar'>
    <AppBar position="static" elevation={1}>
      <Container maxWidth="xl">
        <Grid container alignContent={"center"} alignItems={"center"} display={'flex'} direction={'column'}>
          <Grid item>
            <Typography
              variant="h5"
              align="center"
              sx={{
                fontFamily: 'Georgia',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                mt: 4,
              }}
              >
                John Quilantang
            </Typography>
          </Grid>
          <Grid item>
            <ul>
              <li>
                <Link to="/"  underline='hover'>About</Link>
              </li>
              <li>
                <Link to="experience/*"  underline='hover'>Experience</Link>
              </li>
              <li>
                <Link to="contact"  underline='hover'>Contact Me</Link>
              </li>
            </ul>
          </Grid>

        </Grid>

      </Container>
    </AppBar>
    </div>

  );
}
export default Navbar;
