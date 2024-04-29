import db from '../database/mysql.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const authController = (req, res) => {
    console.log(req.body);

    const { userName, userEmail, userPassword, confirmPass } = req.body;
    const select = 'SELECT userEmail FROM users WHERE userEmail = ?';

    db.query(select, [userEmail], async (error, result) => {
        if (error) {
            console.log(error);
        }

        if (result > 0) {
            return res.render('register', {
                message: 'Este email já cadastrado!!'
            })
        }
        else if (userPassword !== confirmPass) {
            return res.render('register', {
                message: 'Senhas estão diferentes!'
            })
        }

        const hashPwd = await bcrypt.hash(userPassword, 8);
        console.log(hashPwd);
    });

    res.send('Cadastrado!');
}

export default authController;