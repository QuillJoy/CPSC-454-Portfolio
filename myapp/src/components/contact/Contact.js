
import { Container, Typography, TextField, Button } from "@mui/material";
import { Grid, Box } from '@mui/material';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Link from "@mui/material/Link";

import { useState, useEffect} from "react";


const Contact = () => {
    const [formData, setFormData] = useState({name: '',email : '', message: ''})
    useEffect(() => {
        document.title=`Contact Me`
    })
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData)
        setFormData({
            name: '',
            email: '',
            message: ''
        })

    }


    return ( 
        <Container maxWidth="lg">
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
                    Contact Me
                </Typography>
                <Grid  container display={'flex'} justifyContent={'space-around'} direction={'row'} wrap="wrap">
                    <Grid item>
                        <Link href="https://github.com/QuillJoy" target="_blank">
                        <Card sx={{ width: 300, height: 300, backgroundColor:"indigo", color:'white' }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            sx={{
                                objectFit: 'contain',
                                height: '200px'
                            }}
                            image="/github.png"
                            alt="github logo"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div" fontFamily={"Georgia"}>
                                Github
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        </Card>
                        </Link>
                    </Grid>
                    <Grid item sx={{
                        p:5, 
                        backgroundColor: 'rgba(255, 255, 255, 1)', 
                        borderRadius: 5, 
                        mt: 5, 
                        mb: 5,
                        border:3,
                        width: {
                            xs: 250,
                            sm: 300,
                            md: 300,
                            lg: 300,
                            xl: 300, 
                        }}}>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3, justifyContent: 'center'}}>
                            <Grid container spacing={2}>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                autoComplete="given-name"
                                name="name"
                                required
                                fullWidth
                                id="name"
                                label="Name"
                                autoFocus
                                value={formData.name}
                                onChange={ e => setFormData({...formData, name: e.target.value})}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                value={formData.email}
                                onChange={ e => setFormData({...formData, email: e.target.value})}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                required
                                fullWidth
                                id="message"
                                label="Message"
                                name="message"
                                multiline
                                rows={4}
                                variant="outlined"
                                value={formData.message}
                                onChange={ e => setFormData({...formData, message: e.target.value})}
                                />
                            </Grid>
                            </Grid>
                            <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={handleSubmit}
                            >
                            Submit
                            </Button>
                            <Grid container justifyContent="flex-end">
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item>
                    <Link href="https://www.linkedin.com/in/john-quill/" target="_blank" >
                    <Card sx={{ width: 300, height: 300, backgroundColor:"steelblue", color:"white" }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            sx={{
                                objectFit: 'contain',
                                height: '200px',
                            }}
                            image="/linkedin.webp"
                            alt="LinkedIn Logo"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div" fontFamily={"Georgia"}>
                                LinkedIn
                            </Typography>

                            </CardContent>
                        </CardActionArea>
                        </Card>
                        </Link>

                    </Grid>
                </Grid>
        </Container>

     );
}
 
export default Contact;