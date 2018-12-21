const mongoose = require('mongoose');

const angSchema = new mongoose.Schema({
  angId: {type: Number, required: true, unique: true}
  , name: String
  , type: String
  , breedOf: String
  , birthDate: Date
  , age: Number
  , gender: String
  , neutralization: Boolean
  , size: String
  , house: String
  , isAlive: Boolean
  , memo: String
  , resqued: Schema.Types.Mixed
  , supporter: Schema.Types.Mixed
  , medical: Schema.Types.Mixed
  , family: Schema.Types.Mixed
  , friend: Schema.Types.Mixed
  , photo: Schema.Types.Mixed
});

angSchema.plugin(
  mongooseAutoIncrement.plugin
  , {model: 'Ang', field: 'angId', startAt: 1, incrementBy: 1}
);
