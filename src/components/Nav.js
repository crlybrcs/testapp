import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import { Navbar as Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
	return (
		// <Navbar collapseOnSelect bg="light" variant="light" expand="lg" sticky="top">
		// 	<Nav.Brand>
		// 		<Link to="/">Brand</Link>
		// 	</Nav.Brand>
		// 	<Nav.Toggle aria-controls="basic-navbar-nav" />
		// 	<Nav.Collapse id="basic-navbar-nav">
		// 		<Nav className="ml-auto">
		// 			<Link to="/home">Home</Link>
		// 			<Link to="/service">Service</Link>
		// 			<Link to="/about">About</Link>
		// 			<NavDropdown title="Dropdown" id="collasible-nav-dropdown">
		// 				<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
		// 				<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
		// 				<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
		// 			</NavDropdown>
		// 		</Nav>
		// 	</Nav.Collapse>
		// </Navbar>

		<div className="fluid-container">
			<nav class="navbar navbar-expand-lg navbar-light bg-light">
				<a class="navbar-brand " href="/">
					Brand
				</a>
				<button
					class="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon" />
				</button>
				<div class="collapse navbar-collapse flex-grow-1 text-right" id="navbarNavDropdown">
					<ul class="navbar-nav ml-auto flex-nowrap">
						<li class="nav-item active">
							<a class="nav-link" href="#">
								Home <span class="sr-only">(current)</span>
							</a>
						</li>

						<li class="nav-item dropdown">
							<a
								class="nav-link dropdown-toggle"
								href="#"
								id="navbarDropdown"
								role="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								Services
							</a>
							<div class="dropdown-menu" aria-labelledby="navbarDropdown">
								<a class="dropdown-item" href="#">
									Action
								</a>
								<a class="dropdown-item" href="#">
									Another action
								</a>
								<div class="dropdown-divider" />
								<a class="dropdown-item" href="#">
									Something else here
								</a>
							</div>
						</li>

						<li class="nav-item">
							<a class="nav-link" href="#">
								Pricing
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">
								Contact
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">
								Blog
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
