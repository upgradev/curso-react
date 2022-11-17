const User = require("../models/User");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtSecret = process.env.JWT_SECRET;

// gerar user token
const generateToken = (id) => {
  return jwt.sign({ id }, jwtSecret, { expiresIn: "7d" });
};

// registrar usuario e logar
const register = async (req, res) => {
  const { name, email, password } = req.body;
  // checar se o usuario existe
  const user = await User.findOne({ email });
  if (user) {
    res.status(422).json({ errors: ["Por favor utilizar outro email"] });
    return;
  }

  // gerar o hash da senha
  const salt = await bcrypt.genSalt();
  const passwordHash = await bcrypt.hash(password, salt);

  // criar usuario
  const newUser = await User.create({
    name: name,
    email: email,
    password: passwordHash,
  });

  // verificar se o usuario foi criado com sucesso retorna o token
  if (!newUser) {
    res
      .status(422)
      .json({ errors: ["Houve um erro, por favor tente mais tarde"] });
    return;
  }

  res.status(201).json({
    _id: newUser._id,
    token: generateToken(newUser._id),
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  // se existe usuario
  if (!user) {
    res.status(404).json({ errors: ["usuario não encontrado"] });
    return;
  }

  // se a senha é a certa
  if (!(await bcrypt.compare(password, user.password))) {
    res.status(422).json({ errors: ["Senha invalida"] });
    return;
  }

  res.status(201).json({
    _id: user._id,
    profileImage: user.profileImage,
    token: generateToken(user._id),
  });
};

// update do usuario
const update = async (req, res) => {
  const { name, password, bio } = req.body;
  let profileImage = null;

  if (req.file) {
    profileImage = req.file.filename;
  }

  const reqUser = req.user;

  const user = await User.findById(mongoose.Types.ObjectId(reqUser._id)).select(
    "-password"
  );

  if (name) {
    user.name = name;
  }

  if (password) {
    // gerar o hash da senha
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    user.password = passwordHash;
  }

  if (profileImage) {
    user.profileImage = profileImage;
  }

  if (bio) {
    user.bio = bio;
  }

  await user.save();

  res.status(200).json(user);
};

// usuario pelo id
const getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(mongoose.Types.ObjectId(id)).select(
      "-password"
    );
    if (!user) {
      res.status(404).json({ errors: ["usuario não encontrado"] });
      return;
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ errors: ["usuario não encontrado"] });
    return;
  }
};

// obter usuário logado atual
const getCurrentUser = async (req, res) => {
  const user = req.user;
  return res.status(200).json(user);
};

module.exports = {
  register,
  login,
  getCurrentUser,
  update,
  getUserById,
};
