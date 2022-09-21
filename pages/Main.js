import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { motion } from "framer-motion";
import { ColorData, QuoteData } from "./data";

const Main = () => {
  const [fade, setFade] = useState(false);
  const [bgColor, setBgColor] = useState("bg-[#16A085]");
  const [textColor, setTextColor] = useState("text-[#16A085]");
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    getRamdomQuoteAndAutor();
  }, []);

  const variants = {
    open: { opacity: 0 },
    close: { opacity: 1 },
  };

  const bgVariants = {
    open: { opacity: 0.5 },
    close: { opacity: 1 },
  };

  const newQuote = () => {
    setFade(true);

    getRamdomColor();

    setTimeout(() => {
      setFade(false);
      getRamdomQuoteAndAutor();
    }, 1200);
  };

  const getRamdomColor = () => {
    const getColor = ColorData[Math.floor(Math.random() * ColorData.length)];

    setBgColor(getColor.bg);
    setTextColor(getColor.text);
  };

  const getRamdomQuoteAndAutor = () => {
    const randomQuoteAndAuthor =
      QuoteData[Math.floor(Math.random() * QuoteData.length)];

    setQuote(randomQuoteAndAuthor.quote);
    setAuthor(randomQuoteAndAuthor.author);
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center relative">
      <motion.div
        animate={fade ? "open" : "close"}
        variants={bgVariants}
        transition={{
          duration: 0.3,
        }}
        className={`${bgColor} absolute top-0 left-0 w-screen h-screen -z-10`}
      ></motion.div>

      <div className="md:w-3/5 w-11/12 sm:py-10 sm:px-20 py-10 px-5 bg-white rounded-md z-10">
        <motion.div
          animate={fade ? "open" : "close"}
          variants={variants}
          transition={{
            duration: 1,
          }}
          className={`sm:text-3xl text-2xl font-medium ${textColor}`}
        >
          <FontAwesomeIcon icon={faQuoteLeft} className="mr-3 text-4xl" />
          {quote}
        </motion.div>

        <div className="w-full h-12 my-3 flex justify-end items-center sm:text-xl text-lg font-thin">
          -
          <motion.div
            animate={fade ? "open" : "close"}
            variants={variants}
            transition={{ duration: 1 }}
            className={`ml-2 ${textColor}`}
          >
            {author}
          </motion.div>
        </div>

        <div className="w-full h-24 flex justify-between items-center">
          <div className="flex space-x-3">
            <div
              className="sm:w-12 sm:h-12 w-10 h-10 flex justify-center items-center p-3 rounded-sm cursor-pointer 
            hover:bg-opacity-80 relative"
            >
              <motion.div
                animate={fade ? "open" : "close"}
                variants={bgVariants}
                transition={{
                  duration: 0.3,
                }}
                className={`${bgColor} absolute top-0 left-0 w-full h-full -z-10`}
              ></motion.div>

              <Image
                src={require("../public/images/twitter.png")}
                alt="Twitter Icon"
                width={512}
                height={512}
              />
            </div>
            <div
              className="sm:w-12 sm:h-12 w-10 h-10 flex justify-center items-center p-3 rounded-sm cursor-pointer
            hover:bg-opacity-80 relative"
            >
              <motion.div
                animate={fade ? "open" : "close"}
                variants={bgVariants}
                transition={{
                  duration: 0.3,
                }}
                className={`${bgColor} absolute top-0 left-0 w-full h-full -z-10`}
              ></motion.div>

              <Image
                src={require("../public/images/tumblr.png")}
                alt="Tumblr Icon"
                width={512}
                height={512}
              />
            </div>
          </div>

          <div
            className="sm:w-32 sm:h-12 w-28 h-10 rounded-sm flex justify-center items-center
           text-white font-medium cursor-pointer hover:bg-opacity-80 relative"
            onClick={newQuote}
          >
            <motion.div
              animate={fade ? "open" : "close"}
              variants={bgVariants}
              transition={{
                duration: 0.3,
              }}
              className={`${bgColor} absolute top-0 left-0 w-full h-full -z-10`}
            ></motion.div>
            New Quote
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
