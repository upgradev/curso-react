const mongoose = require("mongoose");
const Photo = require("../models/Photo");
const User = require("../models/User");

// inserir foto com um usuario relacionado
const insertPhoto = async (req, res) => {
  const { title } = req.body;
  const image = req.file.filename;

  const reqUser = req.user;

  const user = await User.findById(reqUser._id);

  //   criar foto
  const newPhoto = await Photo.create({
    image: image,
    title: title,
    userId: user._id,
    userName: user.name,
  });

  //   se a foto foi criada com sucesso
  if (!newPhoto) {
    res
      .status(422)
      .json({ errors: ["Houe um problema, tente novamente mais tarde"] });
    return;
  }

  res.status(201).json(newPhoto);
};

// excluir fotos

const deletePhoto = async (req, res) => {
  const { id } = req.params;
  const reqUser = req.user;

  try {
    const photo = await Photo.findById(mongoose.Types.ObjectId(id));

    //   se a foto existe
    if (!photo) {
      res.status(404).json({ errors: ["Foto não encontrada"] });
      return;
    }

    //   se a foto pertence ao usuario
    if (!photo.userId.equals(reqUser._id)) {
      res
        .status(422)
        .json({ errors: ["Ocorreu um erro, tente novamente mais tarde"] });
      return;
    }

    await Photo.findByIdAndRemove(photo._id);

    res
      .status(200)
      .json({ id: photo._id, message: "Foto excluida com sucesso" });
  } catch (error) {
    res.status(404).json({ errors: ["Foto não encontrada"] });
  }
};

// pegas todas as fotos
const getAllPhotos = async (req, res) => {
  const photos = await Photo.find({})
    .sort([["createdAt", -1]])
    .exec();

  return res.status(200).json(photos);
};

// pegar fotos do usuario
const getUserPhotos = async (req, res) => {
  const { id } = req.params;

  const photos = await Photo.find({ userId: id })
    .sort([["createdAt", -1]])
    .exec();

  return res.status(200).json(photos);
};

// pegar foto por id

const getPhotoById = async (req, res) => {
  const { id } = req.params;

  const photo = await Photo.findById(mongoose.Types.ObjectId(id));

  if (!photo) {
    res.status(404).json({ errors: ["Foto não encontrado"] });
    return;
  }

  res.status(200).json(photo);
};

// atualizar foto
const updatePhoto = async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const reqUser = req.user;

  const photo = await Photo.findById(id);

  if (!photo) {
    res.status(404).json({ errors: ["Foto não encontrada"] });
    return;
  }

  if (!photo.userId.equals(reqUser._id)) {
    res
      .status(422)
      .json({ errors: ["Ocorreu um erro, tente novamente mais tarde"] });
    return;
  }

  if (title) {
    photo.title = title;
  }

  await photo.save();

  res.status(200).json({ photo, message: "Foto atualizada com sucesso!" });
};

// like fotos
const likePhoto = async (req, res) => {
  const { id } = req.params;
  const reqUser = req.user;

  const photo = await Photo.findById(id);

  if (!photo) {
    res.status(422).json({ errors: ["Ocorreu um erro, foto não encontrada"] });
    return;
  }

  // checar se o usuario ja deu o like
  if (photo.likes.includes(reqUser._id)) {
    res.status(422).json({ errors: ["Você ja curtiu a foto"] });
    return;
  }

  // adicionar o id do usuario no array de likes
  photo.likes.push(reqUser._id);
  photo.save();

  res
    .status(200)
    .json({ photoId: id, userId: reqUser._id, message: "A foto foi curtida" });
};

// comentarios na foto
const commentPhoto = async (req, res) => {
  const { id } = req.params;

  const { comment } = req.body;

  const reqUser = req.user;

  const user = await User.findById(reqUser._id);

  const photo = await Photo.findById(id);

  if (!photo) {
    res.status(422).json({ errors: ["Ocorreu um erro, foto não encontrada"] });
    return;
  }

  // inserir comentarios no array
  const userComment = {
    comment,
    userName: user.name,
    userImage: user.profileImage,
    userId: user._id,
  };

  photo.comments.push(userComment);
  await photo.save();

  return res.status(200).json({
    comment: userComment,
    message: "O Comentário foi adicionado com sucesso",
  });
};

// buscar imagem por titulo
const searchPhotos = async (req, res) => {
  const { q } = req.query;

  const photos = await Photo.find({ title: new RegExp(q, "i") }).exec();

  res.status(200).json(photos);
};

module.exports = {
  insertPhoto,
  deletePhoto,
  getAllPhotos,
  getUserPhotos,
  getPhotoById,
  updatePhoto,
  likePhoto,
  commentPhoto,
  searchPhotos
};
