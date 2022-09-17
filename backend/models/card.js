const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({ // схема карточки
  name: { // имя карточки, строка от 2 до 30 символов, обязательное поле;
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },

  link: { // ссылка на картинку, строка, обязательно поле
    type: String,
    required: true,
    validate: {
      validator(value) {
        return /https?:\/\/(\w{3}\.)?[1-9a-z\-.]{1,}\w\w(\/[1-90a-z.,_@%&?+=~/-]{1,}\/?)?#?/i.test(value);
      },
    },
  },

  owner: { // ссылка на модель автора карточки, тип ObjectId, обязательное поле
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },

  likes: [{ // список лайкнувших пост юзеров, массив ObjectId, по умолчанию — пустой массив
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    default: [],
  }],

  createdAt: { // дата создания, тип Date, значение по умолчанию Date.now
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('card', cardSchema);