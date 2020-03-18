import React, { Component } from 'react';
import CarouselItem from './CarouselItem';
import Features from './Features';
import ArticleBox from './ArticleBox';
import Work from './Work';
import Blog from './Blog';
import Summary from './Summary';

class MainContainer extends Component {
	render() {
		return (
			<div>
				<CarouselItem />
				<Features />
				<ArticleBox />
				<Work />
				<Blog />
				<Summary />
			</div>
		);
	}
}

export default MainContainer;
