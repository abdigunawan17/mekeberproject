import React from "react";
import Borabora from "../assets/borabora.jpg";
import Borabora2 from "../assets/borabora2.jpg";
import Keywest from "../assets/keywest.jpg";
import Maldives from "../assets/maldives.jpg";
import Maldives2 from "../assets/maldives2.jpg";
import Maldives3 from "../assets/maldives3.jpg";
import SelectCard from "./SelectCard";

const Selects = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <SelectCard bg={Maldives} text="Bora Bora" />
      <SelectCard bg={Borabora} text="Bali" />
      <SelectCard bg={Borabora2} text="Bromo" />
      <SelectCard bg={Maldives2} text="Nusa Penida" />
      <SelectCard bg={Keywest} text="Giri Trawangan" />
      <SelectCard bg={Maldives3} text="Maldive" />
    </div>
  );
};

export default Selects;
