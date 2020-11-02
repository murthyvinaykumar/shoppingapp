import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import sunglasses from '/home/prashant/shoppingapp/src/Assets/Images/glass05.jpg';
import purse from '/home/prashant/shoppingapp/src/Assets/Images/purse.jpg';
import shirt from '/home/prashant/shoppingapp/src/Assets/Images/shirt.jpg';
import tshirt from '/home/prashant/shoppingapp/src/Assets/Images/tshirt.jpg';
import watch from '/home/prashant/shoppingapp/src/Assets/Images/shop-demo-category-05.jpg';
import cap from '/home/prashant/shoppingapp/src/Assets/Images/cap01.jpg';
import Details from './Button';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Typography} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles(() => ({
	leftArrow:{
		left: 0,
	},
	rightArrow:{
		zIndex: 2,
		right: 0,
	},
  //  divClass: {
	// 	width: 55,
	// 	height: 60,
	// 	backgroundColor: 'white',
	// 	'&:hover':{
	// 		color: 'white',
	// 		backgroundColor: 'red',
	// 		cursor: 'pointer',
	// 		transition: '.2s',
	// 	}
	//  },
	 gridCss:{
		 	zIndex: 200,
		 	position: 'absolute',
		 	bottom: 350,
			maxWidth: 2950,
	 },
	 contentCss:{
		 fontSize: 90,
		 fontWeight: 500,
		 color: 'white',
	 },
	 imgCss:{
			// position: 'absolute',
			// zIndex: 2,
			width: 300,
			height: 400,
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

function Arrow(props) {
  let className = props.type === "next" ? "nextArrow" : "prevArrow";
	className += " arrow";
	const classes = useStyles();
  const char = props.type === "next" ? <ArrowForwardIosIcon/> : <ArrowBackIosIcon/>;
  return (
    <Grid className={''}  onClick={props.onClick}>
      {char}
    </Grid>
  );
};
 
export default () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
		slidesToShow: 1,
		variableWidth: true,
		slidesToScroll: 1,
		centerMode: true,
		nextArrow:<Arrow type="next" />,
    prevArrow:<Arrow type="prev" />,
	};
	const classes = useStyles();
  return (
		<div>
		<Typography  style={{color: 'grey', margin: '3rem'}} variant='h5'>New Arrivals</Typography>
		<Grid container justify='center' xs={10}>
    <Slider {...settings}>
		  {[cap, watch, sunglasses, purse, shirt, tshirt].map((img, index) => {
				return  <Grid key={index}>
        <img  className={classes.imgCss} src={img}/>
				<Grid item> 
				 {img.includes('cap01.26c6ffee.jpg') ? 'Cap' : img.includes('shop-demo-category-05.676f8a13.jpg') ? 'Watches' : img.includes('glass05.9fe64948.jpg')  ? 'Glasses' : img.includes('shirt.e83f9be6.jpg')  ?  'shirt' : img.includes('purse.ffe96082.jpg') ? 'purse' : img.includes('tshirt.d1f91622.jpg')  ? 'Tshirt' : ''}
				</Grid>
      </Grid>
			})}
    </Slider>
		</Grid>
		</div>
  );
};