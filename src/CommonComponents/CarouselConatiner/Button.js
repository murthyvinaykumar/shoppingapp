import React from 'react';
import {Button, Grid} from '@material-ui/core';

const MensDetails = ({classes, img}) => {
    return <Grid container item spacing={1} direction='column' className={classes.gridCss} justify='center'>
				<Grid item xs={6} className={classes.contentCss}>{img.includes('slider1.cd7e554f.jpg') ? 'Ubran Style' : "Men's Casusal"}</Grid>
				<Grid style={{marginLeft: '15rem'}}item xs={4}><Button className={classes.btnCss} size='large'>Shop Collection</Button></Grid>
		</Grid>
}
export default MensDetails;