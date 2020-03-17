import React from 'react';

const Blog = () => {
	return (
		<div>
			<div className="blog-top">
				<h1>Our Blog</h1>
				<p>
					Facilisis gravida neque convallis a cras semper auctor neque. Eget egestas purus viverra accumsan in
					nisl. Urna duis convallis convallis tellus id interdum velit laoreet id. Vitae turpis massa sed
					elementum tempus egestas sed sed.
				</p>
			</div>
			<div className="blog-container">
				<div className="boxin">
					<div className="blog-box">
						<img
							src="image-regular.svg"
							width="40px"
							height="40px"
							className="image-blog"
							alt="icon-blog"
						/>
					</div>
					<div className="size-box">
						<h5>Maecenas ultricies</h5>
						<span>Berlin | 12 April 2019</span>
						<p>
							Aliquet enim tortor at auctor urna. Aliquam purus sit amet luctus venenatis lectus
							magna.Gravida rutrum quisque non tellus orci.
						</p>
					</div>
				</div>
				<div className="boxin">
					<div className="blog-box">
						<img
							src="image-regular.svg"
							width="40px"
							height="40px"
							className="image-blog"
							alt="icon-blog"
						/>
					</div>
					<div className="size-box">
						<h5>Amet mauris</h5>
						<span>Paris | 23 June 2019</span>
						<p>
							Nisi scelerisque eu ultrices vitae auctor eu augue ut. Aliquam ut porttitor leo a diam
							sollicitudin tempor id eu.
						</p>
					</div>
				</div>
				<div className="boxin">
					<div className="blog-box">
						<img
							src="image-regular.svg"
							width="40px"
							height="40px"
							className="image-blog"
							alt="icon-blog"
						/>
					</div>
					<div className="size-box">
						<h5> Aliquet enim</h5>
						<span>Amsterdam | 14 October 2019</span>
						<p>
							Tempus imperdiet nulla malesuada pellentesque elit eget. Nibh venenatis cras sed felis eget.
						</p>
					</div>
				</div>
				<div className="boxin">
					<div className="blog-box">
						<img
							src="image-regular.svg"
							width="40px"
							height="40px"
							className="image-blog"
							alt="icon-blog"
						/>
					</div>
					<div className="size-box">
						<h5>Feugiat sed lectus</h5>
						<span>Warsaw | 2 November 2019</span>
						<p>
							Tempor nec feugiat nisl pretium fusce id. Amet consectetur adipiscing elit pellentesque
							habitant morbi tristique.
						</p>
					</div>
				</div>
			</div>
			<div className="box-color">
				<div className="blog-footnote">
					<h5>Maecenas ultricies </h5>
					<div className="box-email">
						<form action="">
							<label htmlFor="emailAddress">
								<input type="email" placeholder="Your email" />
							</label>
							<button className="blog-button">SUBSCRIBE</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blog;
