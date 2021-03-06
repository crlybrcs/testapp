import React from 'react';

const ArticleBox = () => {
	return (
		<div className="box main-box">
			<div className="box small-box1">
				<span>
					<img src="image-regular.svg" width="40px" height="40px" className="image-svg" alt="icon-picture" />
				</span>
				<h5 className="title-one">Turpis Massa Sed Elementum</h5>
				<p>
					Viverra ipsum nunc aliquet bibendum enim facilisis. Bibendum neque egestas congue quisque. Cursus
					euismod quis viverra nibh cras. Et egestas quis ipsum suspendisse ultrices gravida dictum.
				</p>
				<a href="#" className="a-color">
					READ MORE
				</a>
			</div>

			<div className="box small-box">
				<span>
					<img src="image-regular.svg" width="40px" height="40px" className="image-svg" alt="icon-picture" />
				</span>
				<h5 className="title-one">Curabitur Vitae Nunc</h5>
				<p>
					Viverra ipsum nunc aliquet bibendum enim facilisis. Bibendum neque egestas congue quisque. Cursus
					euismod quis viverra nibh cras. Et egestas quis ipsum suspendisse ultrices gravida dictum.
				</p>
				<a href="#" className="a-color">
					READ MORE
				</a>
			</div>

			<div className="box small-box1">
				<span>
					<img src="image-regular.svg" width="40px" height="40px" className="image-svg" alt="icon-picture" />
				</span>
				<h5 className="title-one">Tellus Orci Ac Auctor</h5>
				<p>
					Viverra ipsum nunc aliquet bibendum enim facilisis. Bibendum neque egestas congue quisque. Cursus
					euismod quis viverra nibh cras. Et egestas quis ipsum suspendisse ultrices gravida dictum.
				</p>
				<a href="#" className="a-color">
					READ MORE
				</a>
			</div>
		</div>
	);
};
export default ArticleBox;
