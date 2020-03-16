import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

class CarouselItem extends Component {
	render() {
		return (
			<Carousel>
				<Carousel.Item bsPrefix="carousel-item">
					<img
						className="d-block w-100"
						src="https://images.unsplash.com/photo-1499428665502-503f6c608263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2400&q=80"
						alt="First slide"
						width="1920px"
						height="1080px"
					/>
					<Carousel.Caption>
						<div className="innerbox">
							<h1>First slide label</h1>
							<p className="text-container">
								Nulla vitae elit libero, a pharetra augue mollis interdum. Stet clita kasd gubergren, no
								sea takimata sanctus est Lorem ipsum dolor sit amet.{' '}
							</p>
							<button>BUTTON</button>
						</div>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item bsPrefix="carousel-item">
					<img
						className="d-block w-100"
						src="https://images.unsplash.com/photo-1468657988500-aca2be09f4c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
						alt="Third slide"
						width="1920px"
						height="1080"
					/>

					<Carousel.Caption>
						<div className="innerbox">
							<h1>Second slide label</h1>
							<p className="text-container">
								Nulla vitae elit libero, a pharetra augue mollis interdum. Stet clita kasd gubergren, no
								sea takimata sanctus est Lorem ipsum dolor sit amet.
							</p>
							<button>BUTTON</button>
						</div>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item bsPrefix="carousel-item">
					<img
						className="d-block w-100"
						src="https://images.unsplash.com/photo-1504672281656-e4981d70414b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
						alt="Third slide"
						width="1920px"
						height="1080px"
					/>

					<Carousel.Caption>
						<div className="innerbox">
							<h1>Third slide label</h1>
							<p className="text-container">
								Nulla vitae elit libero, a pharetra augue mollis interdum. Stet clita kasd gubergren, no
								sea takimata sanctus est Lorem ipsum dolor sit amet.
							</p>
							<button>BUTTON</button>
						</div>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		);
	}
}

export default CarouselItem;
