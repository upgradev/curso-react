const { body } = require("express-validator");

const photoInsertValidation = () => {
  return [
    body("title")
      .not()
      .equals("undefined")
      .withMessage("O titulo é obrigatório")
      .isString()
      .withMessage("O titulo é obrigatório")
      .isLength({ min: 3 })
      .withMessage("O titulo deve ter pelo menos 3 caracteres"),
    body("image").custom((value, { req }) => {
      if (!req.file) {
        throw new Error("A imagem é obrigatória");
      }
      return true;
    }),
  ];
};

const photoUpdatevalidation = () => {
  return [
    body("title")
      .optional()
      .isString()
      .withMessage("O título é obrigatorio")
      .isLength({ min: 3 })
      .withMessage("O titulo deve ter pelo menos 3 caracteres"),
  ];
};

module.exports = { photoInsertValidation, photoUpdatevalidation };
