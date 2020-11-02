import React from 'react';
import {Button, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import jeans from '/home/prashant/shoppingapp/src/Assets/Images/jeans2.jpg';

const useStyles = makeStyles(() => ({
	gridCss: {
		position: 'absolute',
		zIndex:200,
	},
	contentCss: {
		fontSize: '50px',
		fontWeight: 800,
		color: 'white',
		paddingTop: 100,
	},
	contentCss1: {
		fontSize: '40px',
		fontWeight: 200,
		color: 'white',
		paddingTop: 110,
	},
	imgCss: {
		width: '100%',
		height: 400,
		position: 'relative',
		zIndex:-1,
	},
	btnCss:{
		  color: 'white',
			backgroundColor: 'red',
			fontWeight: 500,
			border: '2px solid red',
			bordeRadius: 5,
			cursor: 'pointer',
	 }
}));

const MensDetails = () => {
	const classes = useStyles();
  return <Grid  container item spacing={1} style={{marginTop: '3rem'}} justify='center'>
	      <img className={classes.imgCss} src={jeans}/>
				<Grid container item spacing={2} className={classes.gridCss} justify='center'>
					<Grid item xs={12} className={classes.contentCss}>End of season sale</Grid>
					<Grid item xs={12} className={classes.contentCss1}>Upto 50% jeans collection</Grid>
					<Grid item xs={4}><Button className={classes.btnCss} size='large'>View Collection</Button></Grid>
				</Grid>
		</Grid>
}
export default MensDetails;