import { Typography } from "@mui/material";
import { Grid, Box } from '@mui/material';
import { Link as RouterLink } from "react-router-dom";
import { Link, Button } from "@mui/material";
const Student = () => {
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
                            Computer Science Student
                        </Typography>
                    </Grid>
                    <Grid item>
                    <Box
                    component="img"
                    sx={{
                        height: {
                            xs: 200,
                            sm: 300,
                            md: 400,
                            lg: 500,
                            xl: 500, 
                        }, 
                    }}
                    alt="Picture of me at Avenda"
                    src="/exp-student.png"
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
                            From August 2022 to December 2024, I studied Computer Science at
                            Californa State University, Fullerton. I worked on various class
                            projects such as creating a compiler and full-stack apps.
                    </Typography>
                </Grid>
            </Grid>
        </div>
     );
}
 
export default Student;