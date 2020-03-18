import React from 'react';

const Summary = () => {
	return (
		<div className="sum-main">
			<div className="box-sum">
				<h5>Tempor Nec Feugiat Nisl </h5>
				<p>
					Sit amet consectetur adipiscing elit ut aliquam. Quam elementum pulvinar etiam non. Gravida rutrum
					quisque non tellus orci. Sem fringilla ut morbi tincidunt augue interdum.
				</p>
			</div>
			<div className="box-percentage">
				<img src="percent.icon.svg" width="40px" height="40px" alt="" />
				<img src="percent.icon.svg" width="40px" height="40px" alt="" />
				<img src="percent.icon.svg" width="40px" height="40px" alt="" />
				<img src="percent.icon.svg" width="40px" height="40px" alt="" />
			</div>
			<div className="box-div">
				<div className="box-sample">
					<h5>WREMP</h5>
					<p>
						Amet luctus venenatis lectus magna fringilla urna porttitor. Facilisi cras fermentum odio eu
						feugiat pretium nibh ipsum consequat.
					</p>
					<button className="btn-reg"> BUTTON</button>
				</div>
				<div className="box-sample">
					<h5>About</h5>
					<p>
						Sit amet consectetur adipiscing elit ut aliquam. Quam elementum pulvinar etiam non. Gravida
						rutrum quisque non tellus orci. Sem fringilla ut morbi tincidunt augue interdum.
					</p>
					<button class="btn-green">BUTTON</button>
				</div>
				<div className="box-sample">
					<h5>Contact Us</h5>

					<span className="box-insta">INSTAGRAM.COM</span>

					<div className="box-insta">
						<span>+49 000 000 000</span>
					</div>
					<div className="box-social">
						<a href="#">
							<img src="instagram.svg" width="20px" height="20px" alt="instagram-icon" />
						</a>
						<a href="#">
							<img src="facebook.svg" width="20px" height="20px" alt="facebook-icon" />
						</a>
						<a href="#">
							<img src="twitter.svg" width="20px" height="20px" alt="twitter-icon" />
						</a>
					</div>
				</div>
			</div>
			<div className="nav-btm">
				<div className="box-ins">
					<a href="#">HOME</a>
				</div>
				<div className="box-ins">
					<a href="#">SERVICES</a>
				</div>
				<div className="box-ins">
					<a href="#">PRICING</a>
				</div>
				<div className="box-ins">
					<a href="#">CONTACT</a>
				</div>
				<div className="box-ins">
					<a href="#">BLOG</a>
				</div>
			</div>
		</div>
	);
};

export default Summary;
