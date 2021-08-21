import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Chip from '@material-ui/core/Chip'


const About = () => {

    const skills = [ "HTML", "CSS", "SCSS", "BOOTSTRAP", "JS", 
                     "JQUERY", "REACT", "NEXT JS", "REDUX", "MATERIAL UI" ]

    return (
        <>
            <Box mb={5} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                <Typography variant="body2" gutterBottom>
                    Get to know me
                </Typography>

                <Typography variant="h4" gutterBottom>
                    About Me
                </Typography>

                <Box clone borderRadius="50%" my={6}>
                    <img src="n1.jpg" width="200" height="200" alt="fkldlkf" />
                </Box>

                <Grid container>

                    <Box clone display={{ xs : 'none', sm : "block"}}>
                        <Grid item sm={1} md={2}></Grid>
                    </Box>

                    <Grid item xs={12} sm={10} md={8}>
                        <Typography variant="h6" gutterBottom align="center">
                            I am Nazim Musayev, a Front-end developer
                        </Typography>

                        <Typography variant="body2" gutterBottom align="justify">
                            I am a Front-end developer based in Azerbaijan and i have been learning development 
                            for 7 months.This is my portfolio website, where you can find my projects, 
                            contact information and also a little bit personal information about me.
                        </Typography>           

                        <Box mt={3}>
                            <Divider/>
                        </Box>

                        <Box my={5}>
                            <Typography variant="h5" gutterBottom>
                                Skills
                            </Typography>

                            <Box bgcolor="info.main" display="flex" flexWrap="wrap" justifyContent="center"
                             p={2} borderRadius={20} borderLeft={5} borderColor="secondary.main">
                                {skills.map(skill => (
                                    <Box key={skill} m={0.4}>
                                      <Chip size="small" label={skill} color="secondary" variant="outlined" />
                                    </Box>
                                ))}
                            </Box>
                        </Box>

                        <Box mb={5}>
                            <Typography color="primary" variant="h5" gutterBottom>
                               Education
                            </Typography>

                            <Box bgcolor="info.main" p={1.5} display="flex" alignItems="center" 
                            justifyContent="center" borderLeft={5} borderColor="secondary.main">

                                <img src="unec2.png" alt="unec logo" width={60} height={60} />

                                <Box ml={2}>
                                    <Typography color="primary" variant="h6">
                                         University of Economics
                                    </Typography>

                                    <Typography color="primary" variant="body2">
                                        Bachelor's Degree in Laws of Economics 
                                    </Typography>

                                    <Typography color="primary" variant="body2">
                                         2013-2017
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>

                    </Grid>

                    <Box clone display={{ xs : 'none', sm : "block"}}>
                     <Grid item sm={1} md={2}></Grid>
                    </Box>

                </Grid>

            </Box>  
        </>
    )
}

export default About
