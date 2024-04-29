import express from 'express';
import authController from '../controllers/authController.js';

const auth = express.Router();

auth.post('/register', authController);

export default auth;