import React from "react";
import "./styles.css";

export default function App() {
  return <Smiley isHappy={true} />;
}

function Smiley ({ isHappy }) {
if (isHappy) {return <h1>Happy me</h1>} else {return <h1>Sad me</h1>}
}