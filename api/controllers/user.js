const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const User = require('../models/User');
const keys = require('../config/keys')
const errorHandler = require('../utils/errorHandler')

module.exports.login = async (req, res) => {
  const candidate = await User.findOne({email: req.body.email})
  if (candidate) {
    // проверка пороля , пользователь существует
    try {
      const passwordResult = typeof req.body.password === 'string' && bcrypt.compareSync(req.body.password, candidate.password);
      if (passwordResult ){
        //генерация токера, пароли совпали
        const token = jwt.sign({
          email: candidate.email,
          userId: candidate._id
        }, keys.jwt,{expiresIn: 60 * 60})

        res.status(200).json({
          token: `Bearer ${token}`
        })
      } else {
        res.status(401).json({
          message: 'Пароли не совпали'
        })
      }
    } catch (e) {
      res.status(500).json({
        message: 'error'
      })
    }
  } else {
    // error
    res.status(404).json({
      message: 'Пользователь с таким email не найден'
    })
  }
}

module.exports.register = async (req, res) => {
  // email password
  const candidate = await User.findOne({email: req.body.email})

  if(candidate) {
    // пользователь сущемтвует, отдаем ошибку
    res.status(409).json({
      message: 'Такой email уже занят',
    })
  } else {
    // нужно создать пользователя
    const salt = bcrypt.genSaltSync(10);
    const password = req.body.password;
    try {
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(password, salt),
      })
      try {
        await user.save();
        res.status(201).json(user);
      } catch (e) {
        errorHandler(e);
      }
    } catch(e){
      req.status(500).json({
        message: 'error',
      });
    }
  }
}