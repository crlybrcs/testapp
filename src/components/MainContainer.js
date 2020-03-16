import React, { Component } from 'react';
import CarouselItem from './CarouselItem';
import Features from './Features';
import ArticleBox from './ArticleBox';

class MainContainer extends Component {
	render() {
		return (
			<div>
				<CarouselItem />
				<Features />
				<ArticleBox />
			</div>
		);
	}
}

export default MainContainer;
