import { Typography } from "@mui/material";
import { Grid, Box } from '@mui/material';
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";
const Suits = () => {
    return ( 
        <div>
            <Grid alignContent={"center"} alignItems={"center"} display={'flex'} direction={'column'}>
                <Grid alignContent={"center"} alignItems={"center"} display={'flex'} direction={'row'}>
                    <Grid item>
                        <RouterLink to="../experience/*">
                        <Button variant="contained" color="secondary" sx={{width:100}}>
                            Return
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
                            Software Design Lead
                        </Typography>
                    </Grid>
                    <Grid item>
                    <RouterLink to="../experience/intern">
                        <Button variant="contained" color="secondary" sx={{width:100}}>
                            Next
                        </Button>
                        </RouterLink>
                    </Grid>
                </Grid>
                <Grid item>
                    <Box
                    component="img"
                    sx={{
                        height: 400,
                    }}
                    alt="Picture of me at SUITS event"
                    src="/exp-suits.jpg"
                    />
                    <Box
                    component="img"
                    sx={{
                        height: 400,
                    }}
                    alt="Picture of my team at SUITS presentation"
                    src="/exp-suits-2.jpg"
                    />
                </Grid>
                <Grid item>
                    <Typography sx={{maxWidth: "sm"}} variant="body2" align="center" fontSize={20}>
                        <p>

                            From August 2022 to May 2023, I worked with a team as part
                            of <Link
                            href="https://www.nasa.gov/learning-resources/spacesuit-user-interface-technologies-for-students/"
                            color={"secondary"}
                            >
                                NASA's SUITS challenge.
                            </Link>
                            This was a design challenge where the focus was developing mixed-reality
                            software that could assist astronauts in doing EVA's on the moon or Mars. 
                            My main responsibility throughout the challenge was enabling the team
                            to reach our various deadlines by producing numerous design, architecture, code,
                            and testing artifacts. Our team was selected to be one of the few able to fly out
                            to Houston and test our software in a simulated lunar scenario with various NASA
                            workers. The repository for the software can be
                            found <Link href="https://github.com/Team-InterScholar/VIRGIL" color={"secondary"}>here</Link>.
                        </p>
                    </Typography>
                </Grid>

                <Grid item>
                    <Box
                    component="img"
                    sx={{
                        height: 400,
                    }}
                    alt="gif of our software"
                    src="/Animation.gif"
                    borderRadius={5}
                    />
                </Grid>

            </Grid>
        </div>
     );
}
 
export default Suits;