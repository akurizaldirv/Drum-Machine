import React, {createRef, useEffect} from "react";
import { Button } from "react-bootstrap";

const AudioBtn = ({ data, setDisplay }) => {
  const audioRef = createRef();

  const handlePlay = (event) => {
    audioRef.current.play();
    setDisplay(data.id);
  };

  return (
    <div>
      <Button onClick={handlePlay} id={data.id} className="btn btn-light drum-pad">
        {data.padLetter}
        <audio ref={audioRef} className="clip" id={data.padLetter} src={data.src} />
      </Button>
    </div>
  );
};

export default AudioBtn;
