
import { Container, Typography } from "@mui/material";
import { Grid, Box } from '@mui/material';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Suits from "../suits/Suits";
import Intern from "../intern/Intern";
import Student from "../student/Student";
import { useEffect } from "react";

const Experience = () => {
    useEffect(() => {
        document.title=`Portfolio: Experience`
    })
    return ( 
        <Container maxWidth="lg" alignContent="center">
            <Typography
                variant="h4"
                align="center"
                sx={{
                    fontFamily: 'Georgia',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    margin: 4,
                }}
                >
                    Experience
                </Typography>
                <Grid  container spacing={5 }justifyContent={'space-around'} alignContent={'space-around'} display={'flex'} direction={'row'} wrap="wrap"
                sx={{mb: 5}}>
                    <Grid item>
                        <RouterLink to="suits">
                        <Card sx={{
                            width: {
                                xs: 250,
                                sm: 300,
                                md: 300,
                                lg: 300,
                                xl: 300, 
                            }, 
                            height: 300,
                            background: 'linear-gradient(#FFD700, #FFFFFF)'
                            }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            sx={{
                                objectFit: 'contain',
                                height: '200px'
                            }}
                            image="/NASASUITS-logo.png"
                            alt="NASA SUITS LOGO"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div" fontFamily={"Georgia"}>
                                Software Design Lead
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        </Card>
                        </RouterLink>
                    </Grid>
                    <Grid item>
                       <RouterLink to="intern">
                        <Card sx={{
                            width: {
                                xs: 250,
                                sm: 300,
                                md: 300,
                                lg: 300,
                                xl: 300, 
                            }, 
                            height: 300, background: 'linear-gradient(#29E0D7, #FFFFFF)' }}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                sx={{
                                    objectFit: 'contain',
                                    height: '200px'
                                }}
                                image="/avenda.png"
                                alt="Avenda Health Logo"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div" fontFamily={"Georgia"}>
                                    Software Engineer Intern
                                </Typography>

                                </CardContent>
                            </CardActionArea>
                        </Card>
                        </RouterLink>
                    </Grid>
                    <Grid item>
                    <RouterLink to="student">
                    <Card sx={{
                        width: {
                            xs: 250,
                            sm: 300,
                            md: 300,
                            lg: 300,
                            xl: 300, 
                        }, 
                        height: 300,
                        background: 'linear-gradient(#111D4F, #FFFFFF)' }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            sx={{
                                objectFit: 'contain',
                                height: '200px'
                            }}
                            image="/csuf.png"
                            alt="CSUF Logo"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div" fontFamily={"Georgia"}>
                                Computer Science Student
                            </Typography>

                            </CardContent>
                        </CardActionArea>
                        </Card>
                        </RouterLink>

                    </Grid>
                </Grid>
            <Routes>
                <Route path="suits" element={<Suits />} />
                <Route path="intern" element={<Intern />} />
                <Route path="student" element={<Student />} />
            </Routes>
        </Container>
     );
}
 
export default Experience;