import React, { Component } from 'react';
import CarouselItem from './CarouselItem';
import Features from './Features';
import ArticleBox from './ArticleBox';
import Work from './Work';
import Blog from './Blog';

class MainContainer extends Component {
	render() {
		return (
			<div>
				<CarouselItem />
				<Features />
				<ArticleBox />
				<Work />
				<Blog />
			</div>
		);
	}
}

export default MainContainer;
