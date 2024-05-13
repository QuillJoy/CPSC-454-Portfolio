import { Typography } from "@mui/material";
import { Grid, Box } from '@mui/material';
import { Link as RouterLink } from "react-router-dom";
import { Link, Button } from "@mui/material";
const Student = () => {
    return ( 
        <div>
            <Grid alignContent={"center"} alignItems={"center"} display={'flex'} direction={'column'}>
                <Grid alignContent={"center"} alignItems={"center"} display={'flex'} direction={'row'}>
                            <Grid item>
                                <RouterLink to="../experience/intern">
                                <Button variant="contained" color="secondary" sx={{width:100}}>
                                    Previous
                                </Button>
                                </RouterLink>

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
                                    margin: 4,
                                }}
                                >
                                    Computer Science Student
                                </Typography>
                            </Grid>
                            <Grid item>
                            <RouterLink to="../experience">
                                <Button variant="contained" color="secondary" sx={{width:100}}>
                                    Return
                                </Button>
                                </RouterLink>
                            </Grid>
                        </Grid>
                <Grid item>
                    <Typography sx={{maxWidth: "sm"}} variant="body2" align="center" fontSize={20}>
                        <p>
                            From August 2022 to December 2024, I studied Computer Science at
                            Californa State University, Fullerton. I worked on various class
                            projects such as creating a compiler and full-stack apps.
                        </p>
                    </Typography>
                </Grid>
            </Grid>
        </div>
     );
}
 
export default Student;