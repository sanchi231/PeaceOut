const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const User = require('../../model/user');

//@route    POST api/user
//@desc     User Registration
//@access   Public

router.post(
	'/',
	[
		check('name', 'Name is required').not().isEmpty(),
		check('email', 'Please include a valid email').isEmail(),
		check(
			'password',
			'Please enter a password with 8 or more characters'
		).isLength({ min: 8 })
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { name, email, password } = req.body;

		try {
			// See if the user exits
			let user = await User.findOne({ email });
			if (user) {
				return res.status(400).json({
					errors : [
						{ msg: 'User Already Exists' }
					]
				});
			}
			//New User
			user = new User({
				name,
				email,
				password
			});

			// Encrypt the password using bcrypt
			const salt = await bcrypt.genSalt(10);
			user.password = await bcrypt.hash(password, salt);
			//console.log(user);
			await user.save();

			// Return jsonwebtoken
			const payload = {
				user : {
					id : user.id
				}
			};
			jwt.sign(
				payload,
				config.get('jwtSecret'),
				{ expiresIn: 360000 }, // before deployment change it
				(err, token) => {
					if (err) throw err;
					res.json({ token });
				}
			);
		} catch (err) {
			console.log(err.message);
			res.status(500).send('Server error');
		}
	}
);

module.exports = router;
