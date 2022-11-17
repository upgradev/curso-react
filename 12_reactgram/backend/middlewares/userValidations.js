const { body } = require("express-validator");

const userCreateValidation = () => {
  return [
    body("name")
      .isString()
      .withMessage("O nome é obrigatório")
      .isLength({ min: 3 })
      .withMessage("O nome precisa ter pelo menos três caracteres"),
    body("email")
      .isString()
      .withMessage("E-mail é obrigatorio ")
      .isEmail()
      .withMessage("Insira um email valido"),
    body("password")
      .isString()
      .withMessage("Senha Obrigatoria")
      .isLength({ min: 5 })
      .withMessage("A senha precisa ter pelo menos 5 caracteres"),
    body("confirmPassword")
      .isString()
      .withMessage("A confirmação de senha é obrigatória.")
      .custom((value, { req }) => {
        if (value != req.body.password) {
          throw new Error("As senhas não são iguais.");
        }
        return true;
      }),
  ];
};

const loginValidation = () => {
  return [
    body("email")
      .isString()
      .withMessage("O e-mail é obrigatorio")
      .isEmail()
      .withMessage("Insira um e-mail valido"),
    body("password").isString().withMessage("A senha é obrigatoria"),
  ];
};

const userUpdateValidation = () => {
  return [
    body("name")
      .optional()
      .isLength({ min: 3 })
      .withMessage("O nome precisa ter pelo menos três caracteres"),
    body("password")
      .optional()
      .isLength({ min: 5 })
      .withMessage("A senha precisa ter pelo menos 5 caracteres"),
  ];
};

const commentsValidation = () => {
  return [body("comment").isString().withMessage("O comentario é obrigatório")];
};

module.exports = {
  userCreateValidation,
  loginValidation,
  userUpdateValidation,
  commentsValidation,
};
