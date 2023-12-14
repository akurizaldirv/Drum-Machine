import { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import AudioBtn from "./AudioBtn";

function App() {
  const drumAudio = [
    //9 drum elements with src attribute for audio element
    {
      id: "kit & hat",
      padLetter: "Q",
      keyCode: 81,
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
      type: "audio/mp3",
    },
    {
      id: "Bld H1",
      padLetter: "W",
      keyCode: 87,
      src: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
      type: "audio/mp3",
    },
    {
      id: "Dry Ohh",
      padLetter: "E",
      keyCode: 69,
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
      type: "audio/mp3",
    },
    {
      id: "Punchy Kick",
      padLetter: "A",
      keyCode: 65,
      src: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
      type: "audio/mp3",
    },
    {
      id: "Side Stick",
      padLetter: "S",
      keyCode: 83,
      src: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
      type: "audio/mp3",
    },
    {
      id: "Heater 1",
      padLetter: "D",
      keyCode: 68,
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
      type: "audio/mp3",
    },
    {
      id: "Brk Snr",
      padLetter: "Z",
      keyCode: 90,
      src: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
      type: "audio/mp3",
    },
    {
      id: "Heater 2",
      padLetter: "X",
      keyCode: 88,
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
      type: "audio/mp3",
    },
    {
      id: "Heater 3",
      padLetter: "C",
      keyCode: 67,
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
      type: "audio/mp3",
    },
  ];

  const [display, setDisplay] = useState("____________");
  const [audioValue, setAudioValue] = useState(30);


  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
  });

  const handleKeyDown = (event) => {
    drumAudio.map(d => {
      if (event.keyCode === d.keyCode) {
        document.getElementById(d.id).click();
      }
    })
  };

  return (
    <div className="App">
      <Container id="drum-machine">
        <Row>
          <p id="drum-title">Super Drum-Pad</p>
        </Row>
        <Row>
          <Col>
            <Row>
              {drumAudio.map((d) => (
                <Col className="col-4" key={d.id}>
                  <AudioBtn data={d} setDisplay={setDisplay} />
                </Col>
              ))}
            </Row>
          </Col>
          <Col>
            <span id="display">{display}</span>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
