const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./../models/UserSchema');

const JWT_SECRET = process.env.JWT_SECRET;


exports.loginForm = async (req, res) => {
    res.render('auth');
}

exports.registerForm = async (req, res) => {
    res.render('auth');
}

exports.register = async (req, res) => {
    const { email, firstname, lastname, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const user = new User({
            email,
            firstname,
            lastname,
            password: hashedPassword
        });

        await user.save();
        res.redirect('auth/login');
    } catch (error) {
        res.status(500).send('Registering error');
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).send('User not found');
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).send('Incorrect password');
        }

        const token = jwt.sign({ email: user.email }, JWT_SECRET, { expiresIn: '1h' });

        res.cookie('token', token, { httpOnly: true });
        res.redirect('/');
    } catch (error) {
        res.status(500).send('Auth error');
    }
};
