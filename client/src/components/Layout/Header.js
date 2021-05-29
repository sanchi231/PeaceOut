import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Header = ({ auth: { isAuthenticated, loading, user }, logout }) => {
	const authLinks = (
		<Nav className='ml-auto'>
			<Nav.Link href='/dashboard'>
				<span className='hide-sm'>Profile</span>
			</Nav.Link>
			<Nav.Link href='/activity/:id'>
				<span className='hide-sm'>Activity</span>
			</Nav.Link>
			<Nav.Link onClick={logout} href='/'>
				<span className='hide-sm'>Logout</span>
			</Nav.Link>
		</Nav>
	);
	const guestLinks = (
		<Nav className='ml-auto'>
			<Nav.Link href='/register'>Register</Nav.Link>
			<Nav.Link href='/login'>Login</Nav.Link>
		</Nav>
	);
	return (
		<header>
			<Navbar bg='warning' variant='dark' expand='lg' collapseOnSelect>
				<Container>
					<Navbar.Brand href='/'>
						PeaceOut HackOn 2.0
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					{!loading && (
						<Navbar.Collapse id='basic-navbar-nav'>
							{
								isAuthenticated ?
								authLinks :
								guestLinks}
						</Navbar.Collapse>
					)}
				</Container>
			</Navbar>
		</header>
	);
};

Header.propTypes = {
	logout : PropTypes.func.isRequired.apply,
	auth   : PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	auth : state.auth
});

export default connect(mapStateToProps, { logout })(Header);
