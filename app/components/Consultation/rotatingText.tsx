"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  text: string;
};

const RotatingText = (props: Props) => {
  return (
    <>
      <motion.p
        initial={{ y: 0 }}
        whileHover={{ y: -20 }}
        whileTap={{ y: 20 }}
        transition={{ duration: 0.5 }}
      >
        {props.text}
      </motion.p>
      <motion.p
        initial={{ y: 20 }}
        whileHover={{ y: 0 }}
        whileTap={{ y: -20 }}
        transition={{ duration: 0.5 }}
      >
        {props.text}
      </motion.p>
    </>
  );
};

export default RotatingText;
