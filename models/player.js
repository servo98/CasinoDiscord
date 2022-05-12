import mongoose from 'mongoose';

const { Schema } = mongoose;

const playerSchema = new Schema({
  discordId: {
    required: true,
    type: String,
  },
  pipicoins: {
    required: true,
    default: 0,
    type: Number,
  },
  winRate: {
    type: Number,
    required: true,
    default: 0,
  },
});

export default mongoose.model('Player', playerSchema);
