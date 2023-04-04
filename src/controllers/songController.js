import Song from "../models/Song";
import User from "../models/User";

export const home = async (req, res) => {
  // Song 데이터베이스에서 재생수 상위 10개 가져와 순위 속성 추가
  const songs = await Song.find({}).sort({ streams: "desc" }).limit(10);
  songs.forEach((song, idx) => {
    song.rank = idx + 1;
  });

  return res.render("home", { pageTitle: "Home", songs });
};
