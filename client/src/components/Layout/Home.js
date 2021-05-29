import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const Home = ({ isAuthenticated, user }) => {
	if (isAuthenticated) {
		<Redirect to='/dashboard' />;
	}
	return (
		<Container>
			<Row>
				<Col />
				<Col md='auto'>
					<Card
						style={{
							width           : '30rem',
							height          : '22rem',
							marginTop       : '5em',
							backgroundColor : 'lightgrey',
							border          : '1px grey'
						}}>
						<Card.Body>
							<Card.Title>
								<h3>Welcome!</h3>
							</Card.Title>
							PeaceOut is an approach to develop awareness about
							mental health.
							<br />
							It will help people learn more about their mental
							health and take better care of their well-being in
							these challenging times that have significantly
							impacted our day-to-day lives.
							<br />
							<br />
							<h6 style={{ color: 'red', fontWeight: '600' }}>
								For Register, see the menu bar at the top!
								<br />
								If already a user kindly login to check your activities!
							</h6>
						</Card.Body>
					</Card>
				</Col>
				<Col />
			</Row>
		</Container>
	);
};

Home.propTypes = {
	isAuthenticated : PropTypes.bool,
	user            : PropTypes.object
};

const mapStateToProps = (state) => ({
	isAuthenticated : state.auth.isAuthenticated,
	user            : state.auth.user
});

export default connect(mapStateToProps)(Home);
