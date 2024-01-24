import React, { useState, useEffect } from 'react';
import './banner.css';
import { motion, AnimatePresence } from 'framer-motion';
import Banner_img from '../assets/banner.png';
import Emoji_1 from '../assets/cool.png';
import Emoji_2 from '../assets/shocked.png';
import Emoji_3 from '../assets/love.png';
import Emoji_4 from '../assets/fires.png';

const Banner = () => {
    const [currentEmojiIndex, setCurrentEmojiIndex] = useState(0);
    const emojis = [Emoji_1, Emoji_2, Emoji_3, Emoji_4];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentEmojiIndex((prevIndex) => (prevIndex + 1) % emojis.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [currentEmojiIndex]);

    return (
        <AnimatePresence>
            <div className="banner_container">
            <motion.div
                key="banner_text"
                initial={{opacity: 0, x:-50}}
                animate={{ opacity: 1, x:0}}
                className='banner_text'
                transition={{duration: 1}}
                >
                    <div className='banner_text_text'>
                        <h1>Coleção de inverno</h1>
                        <h1>Acaba de chegar</h1>
                    </div>
                    <div className='banner_text_emoji'>
                        {emojis.map((emoji, index) => (
                            <img
                                key={index}
                                src={emoji}
                                alt=""
                                className={`emoji ${index === currentEmojiIndex ? 'show' : ''}`}
                            />
                        ))}
                    </div>
            </motion.div>
            <motion.div
                key="banner_text"
                initial={{opacity: 0, x:50}}
                animate={{ opacity: 1, x:0}}
                className='banner_img'
                transition={{duration: 1}}
                >
                    <img src={Banner_img} alt="" />
            </motion.div>
        </div>
        </AnimatePresence>
    );
};

export default Banner;