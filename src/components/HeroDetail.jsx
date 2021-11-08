import { useState, useEffect } from "react";

const HeroDetail = ({ hero, onChangeHero }) => {
  useEffect(() => {}, [hero.name]);
  return (
    <div>
      <div>ID: {hero.id}</div>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={hero.name}
            onChange={(e) => onChangeHero(e.target.value)}
          />
        </label>
      </div>
    </div>
  );
};

export default HeroDetail;
