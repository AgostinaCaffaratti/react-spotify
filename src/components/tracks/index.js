import React, { Fragment, useState } from "react";
import "./style.scss";

const Tracks = ({ album = [] }) => {
  const tracks = album.tracks && album.tracks.items;
  console.log(tracks);

  const [state, setState] = useState(
    {
      playingUrl: "",
      audio: null,
      playing: false,
    },
    []
  );

  const playAudio = (previewUrl) => {
    const audio = new Audio(previewUrl);
    if (!state.playing) {
      audio.play();
      setState(
        {
          playing: true,
          playingUrl: previewUrl,
          audio,
        },
        []
      );
    } else {
      if (state.playingUrl === previewUrl) {
        state.audio.pause();
        setState(
          {
            playing: false,
          },
          []
        );
      } else {
        state.audio && state.audio.pause();
        audio.play();
        setState(
          {
            playing: true,
            playingUrl: previewUrl,
            audio,
          },
          []
        );
      }
    }
  };

  const tracksCd1 =
    tracks &&
    tracks.filter((track) => {
      return track.disc_number === 1;
    });
  console.log(tracksCd1);

  const tracksCd2 =
    tracks &&
    tracks.filter((track) => {
      return track.disc_number === 2;
    });

  console.log(tracksCd2);

  return (
    <Fragment>
      <div className="song-container__tables__album">
        {tracksCd1 !== null && (
          <header className="song-container__tables__album--header">CD 1</header>
        )}
        {tracksCd1 &&
          tracksCd1.map((track) => (
            <div className="song-container__tables__album--song">
              <p onClick={() => playAudio(track && track.preview_url)}>{track && track.name} </p>
              <img
                className="song-container__tables__album--star"
                src={process.env.PUBLIC_URL + "/assets/star.png"}
                alt="star"
              ></img>
            </div>
          ))}
      </div>

      <div className="song-container__tables__album">
        {tracksCd2 && tracksCd2.length > 0 && (
          <header className="song-container__tables__album--header">CD 2</header>
        )}
        {tracksCd2 &&
          tracksCd2.map((track) => (
            <div className="song-container__tables__album--song">
              <p onClick={() => playAudio(track && track.preview_url)}>{track && track.name}</p>
              <img
                className="song-container__tables__album--star"
                src={process.env.PUBLIC_URL + "/assets/star.png"}
                alt="star"
              ></img>
            </div>
          ))}
      </div>
    </Fragment>
  );
};

export default Tracks;
