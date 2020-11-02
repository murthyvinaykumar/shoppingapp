import React, { Component } from 'react'
import ShopDemoCategory from '../ItemCategory/ShopDemoCategory';
import {Wrapper,SideflexWrapper,DemoWrapper,ShopDemoCategoryWidthFifty, ShopDemoCategoryWidthHeight} from './Style'; 
import Shoes from '../ItemCategory/Shoes';
import HandBag from '../ItemCategory/HandBag';
import Cap from '../ItemCategory/Cap';
import Watch from '../ItemCategory/Watch';
import {Grid, Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';

const styles = () => ({
	gridCss: {
		width: '70%',
	},
});
 class CategoryWrapper extends Component {
    render() {
			const {classes} = this.props;
        return (
					<Grid container item justify='center'>
					<Grid item xs={10} style={{color: 'grey', margin: '3rem'}}><Typography variant='h5'>Featured Categories</Typography></Grid>
					<Grid container spacing={4} item xs={10} className={classes.gridCss}>
							<Wrapper>
									<DemoWrapper>
									<ShopDemoCategory size="Large"/>
									</DemoWrapper>
									<SideflexWrapper>
											<Shoes style={{width: '50%'}} size="small"/>
											<HandBag style={{width: '50%'}} size="small"/>
											<Cap style={{width: '50%'}} size="small"/>
											<Watch style={{width: '50%'}} size="small"/>
									</SideflexWrapper>
							</Wrapper>
						</Grid>
					</Grid>
        )
    }
}
export default withStyles(styles)(CategoryWrapper);