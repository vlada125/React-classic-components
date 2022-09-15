import { Box, Grid, Typography } from "@mui/material"
import { Container } from "@mui/system"
import ClientCard from "../components/ClientCard"
import { GrayBoxPanel } from "../style/styledComponents"

const ClientCardProps = {
    name: "Suki Wealthmanager",
    title: "MyCo",
};

const Header = () => {
    return(
        <Box bgcolor='#828282' width='100%' color='#fff' py={2}>
            <Container>
                <Grid container>
                    <Grid item xs={12}>
                        <Grid container spacing={6} alignItems='center'>
                            <Grid item>
                                <Typography fontSize={24} fontWeight='bold'>Trayecto</Typography>
                            </Grid>
                            <Grid item flexGrow={1}>
                                <Grid container spacing={6}>
                                    <Grid item>
                                        <Typography fontSize={16} fontWeight='bold'>Clients</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography fontSize={16} fontWeight='bold'>Employers</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography fontSize={16} fontWeight='bold'>Downstop Wealth</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Grid container>
                                    <ClientCard {...ClientCardProps} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Header