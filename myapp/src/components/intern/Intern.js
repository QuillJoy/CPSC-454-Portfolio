import { Link, Typography } from "@mui/material";
import { Grid, Box } from '@mui/material';
import { Link as RouterLink } from "react-router-dom";
import Button from "@mui/material/Button";
const Intern = () => {
    return ( 
        <div>
            <Grid alignContent={"center"} alignItems={"center"} display={'flex'} direction={'column'}>
            <Grid  container maxWidth="sm" display={'flex'} direction={'row'} justifyContent={"space-around"} >
                    <Grid item>
                        <RouterLink to="../experience/suits">
                        <Button
                        variant="contained"
                        color="secondary"
                        sx={{
                            xs: 50,
                            sm: 50,
                            md: 100,
                            lg: 100,
                            xl: 100, 
                        }}>
                            Return
                        </Button>
                        </RouterLink>

                    </Grid>

                    <Grid item>
                    <RouterLink to="../experience/student">
                        <Button
                            variant="contained"
                            color="secondary"
                            sx={{
                                xs: 50,
                                sm: 50,
                                md: 100,
                                lg: 100,
                                xl: 100, 
                            }}>
                            Next
                        </Button>
                        </RouterLink>
                    </Grid>
                </Grid>
                <Grid item>
                        <Typography
                        variant="h4"
                        align="center"
                        sx={{
                            fontFamily: 'Georgia',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            margin: {
                                xs: 2,
                                sm: 2,
                                md: 4,
                                lg: 4,
                                xl: 4, 
                            },
                        }}
                        >
                            Software Engineer Intern
                        </Typography>
                    </Grid>
                <Grid item>
                    <Box
                    component="img"
                    sx={{
                        height: {
                            xs: 300,
                            sm: 400,
                            md: 400,
                            lg: 500,
                            xl: 500, 
                        }, 
                    }}
                    alt="Picture of me at Avenda"
                    src="/exp-intern.jpg"
                    />
                </Grid>
                <Grid item sx={{p:3, backgroundColor: 'rgba(255, 255, 255, 1)', borderRadius: 5, mt: 5, border:3}}>
                    <Typography
                    sx={{
                        width: {
                            xs: 300,
                            sm: 400,
                            md: 400,
                            lg: 500,
                            xl: 500, 
                        }, 
                    
                    }}
                    variant="body2"
                    align="center"
                    fontSize={20}
                    >
                        From May 2023 to May 2024, I worked as Software Engineer intern 
                        at <Link href="https://avendahealth.com/" color={"secondary"}>Avenda Health</Link>
                        , an AI medtech startup. Their mission is to create
                        artificial intelligence that augments doctors to better treat
                        prostate cancer. I had the lucky opportunity to be exposed to many
                        areas of software engineering through a myriad of tasks throughout my internship, 
                        such as data science, DevOps, frontend, backend,
                        infrastructure, and testing.  

                    </Typography>
                </Grid>
            </Grid>
        </div>
     );
}
 
export default Intern;