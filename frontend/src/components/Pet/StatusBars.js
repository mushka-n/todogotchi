import React, { useContext } from "react";
import { ReactSVG } from "react-svg";
import { Context } from "../..";

const StatusBar = ({ value, bgColor, mainColor, icon }) => {
  const colors = [
    { pctMin: 0, pctMax: 33, bgColor: "#fda4af", mainColor: "#be123c" },
    { pctMin: 34, pctMax: 66, bgColor: "#fef08a", mainColor: "#facc15" },
    { pctMin: 65, pctMax: 100, bgColor: "#6ee7b7", mainColor: "#059669" },
  ];

  const [currentColorSet] = colors.filter(
    (color) => color.pctMin <= value && color.pctMax >= value
  );

  return (
    <div
      style={{ background: currentColorSet.bgColor }}
      className={`w-16 h-64  flex items-end justify-center p-2 rounded-full `}
    >
      <div
        style={{
          height: `${value}%`,
          background: currentColorSet.mainColor,
        }}
        className={`w-full  rounded-full flex items-end justify-center py-3 min-h-[42px]`}
      >
        <ReactSVG className="svg-white" src={icon} />
      </div>
    </div>
  );
};

const StatusBars = () => {
  const { pet } = useContext(Context);

  return (
    <div className="flex items-center justify-around w-64">
      <StatusBar
        value={pet.petStatus.health}
        icon={"/icons/heart.svg"}
        bgColor="#fda4af"
        mainColor="#be123c"
      />
      <StatusBar
        value={pet.petStatus.hunger}
        icon={"/icons/soup.svg"}
        bgColor="#fef08a"
        mainColor="#facc15"
      />
      <StatusBar
        value={pet.petStatus.happiness}
        icon={"/icons/smile.svg"}
        bgColor="#6ee7b7"
        mainColor="#059669"
      />
    </div>
  );
};

export default StatusBars;
