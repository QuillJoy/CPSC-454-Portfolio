import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";
import './About.css';
import { Typography } from "@mui/material";
import { Grid, Box } from '@mui/material';
const About = () => {
    return ( 
        <div>
            <Grid container alignItems={"center"} display={'flex'} direction={'column'}>
                <Grid item>
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
                        About
                    </Typography>
                </Grid>
                <Grid item>
                    <Box
                    component="img"
                    sx={{
                        height: 400,
                    }}
                    alt="Picture of me"
                    src="about.jpg"
                    borderRadius={15}
                    />

                </Grid>
                <Grid item>
                    <Typography sx={{maxWidth: "sm"}} variant="body2" align="center" fontSize={20}>

                            Hello! I'm John Alfred Quilantang and welcome to my portfolio website.
                            I am currently majoring in my last year of Computer Science at 
                            California State University, Fullerton. I have experience that ranges
                            from small class projects, to a nationwide design competion, and
                            of course internships. Feel free to check out the `Experience`
                            section to learn more about me.
                    </Typography>
                </Grid>
            </Grid>
        </div>
     );
}
 
export default About;