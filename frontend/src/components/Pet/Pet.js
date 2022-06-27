import React from "react";

const Pet = ({ health, hunger, happiness }) => {
  const getPictureFromPetState = () => {
    let petPictureName = "";
    if (health <= 33) petPictureName = "health25";
    else if (hunger <= 33) petPictureName = "hunger25";
    else if (happiness <= 33) petPictureName = "happiness25";
    else if (health <= 66) petPictureName = "health50";
    else if (hunger <= 66) petPictureName = "hunger50";
    else if (happiness <= 66) petPictureName = "happiness50";
    else petPictureName = "all100";
    return `/pet/${petPictureName}.png`;
  };
  return (
    <div>
      <img src={getPictureFromPetState()} alt="" />
    </div>
  );
};

export default Pet;
