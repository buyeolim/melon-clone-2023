import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  artist: { type: String, required: true, trim: true },
  // fileUrl: { type: String, required: true },
  // thumbUrl: { type: String, required: true },
  // date: { type: Date, required: true },
  streams: { type: Number, required: true, default: 0 },
  rank: { type: Number },
});

const Song = mongoose.model("Song", songSchema);

export default Song;
