import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slider1 from '../../Assets/Images/slider1.jpg';
import slider2 from '../../Assets/Images/slider2.jpg';
import {SliderImg} from './Style';
import Details from './Button';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Button} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles(() => ({
   divClass: {
		display: 'block',
		width: 55,
		height: 60,
		backgroundColor: 'white',
		'&:hover':{
			color: 'white',
			backgroundColor: 'red',
			cursor: 'pointer',
			transition: '.2s',
		}
	 },
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
			width: '100%',
			height: '100%',
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
    <Grid className={`${className} ${classes.divClass}`} justify='center' alignItems='center' onClick={props.onClick}>
      {char}
    </Grid>
  );
};
 
export default () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow:<Arrow type="next" />,
    prevArrow:<Arrow type="prev" />,
	};
	const classes = useStyles();
  return (
    <Slider {...settings}>
		  {[slider1, slider2].map((img, index) => {
				return  <Grid container item key={index}>
        <Grid item xs={12}><img className={classes.imgCss} src={img}/></Grid>
				<Details classes={classes} img={img}/>
      </Grid>
			})}
    </Slider>
  );
};