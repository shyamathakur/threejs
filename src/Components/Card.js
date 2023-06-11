import React from "react";
import Women from "../Img/trans.png";
import logoimg from "../Img/logoimg.png";
import { useMotionValue, useTransform, motion } from "framer-motion";

function Card() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [100, -100], [-30, 30]);
  const colors = [
    { value: "#185bca" },
    { value: "#272425" },
    { value: "#617453" },
    { value: "#f2c758" },
    { value: "#ffffff" },
  ];
  return (
    <div style={{ perspective: 2000 }}>
      <motion.div
        style={{ x, y, rotateX, rotateY, z: 100 }}
        drag
        dragElastic={0.18}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: "grabbing" }}
        className="w-[426px] min-h-[600px] bg-[#e3e2df] rounded-[30px] border-[4px] 
    border-white px-[40px] py-[25px] cursor-grab relative"
      >
        <div className="mb-6 ">
          <img src={logoimg} alt="logoimg" className="w-[50px]" />
        </div>
        <h1 className="text-5xl mb-6 font-extrabold">fation stylish</h1>
        <p className="max-w-[300px] tex-[#000] mb-6">
          your order made our day. we hope thad makes your! your support means
          the wold, we would love if you share a snap on social media. please
          tag us.
        </p>
        <div className="flex items-center gap-x-[20px] mb-12">
          <button className="bg-[#617453] text-white text-base font-medium py-[16px] px-[40px] rounded-lg">
            Order Nov
          </button>
          <div className="text-[24px] font-bold text-[#000]">$135.00</div>
        </div>
        <ul className="flex gap-x-[10px]">
          {colors.map((color, index) => {
            return (
              <li
                key={index}
                style={{ backgroundColor: color.value }}
                className="w-8 h-8 rounded-full cursor-pointer"
              ></li>
            );
          })}
        </ul>
        <motion.div
          style={{ x, y, rotateX, rotateY, z: 100000 }}
          className="absolute top-[2.8rem] -right-[22.8rem] w-[620px]"
        >
          <img
            src={Women}
            alt="women"
            draggable="false"
            className="w-[480px]"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Card;
