import Grid from '@mui/material/Grid';
import Amelie from './Amelie'
import Nino from './Nino'
import Brotodeau from './Brotodeau'
import Raymond from './Raymond'

function Principal () {
    return (
        <div>
            <Grid container alignItems="center" justifyContent="center">
                <Grid item xs={12} sm={6} md={3}>
                    <Amelie  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Nino />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Brotodeau />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Raymond />
                </Grid>
            </Grid>
        </div>
    )
}

export default Principal;