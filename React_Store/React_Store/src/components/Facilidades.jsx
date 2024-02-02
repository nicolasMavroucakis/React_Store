import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Cartao from '../assets/cartao.png';
import Caminhao from '../assets/caminhao.png';
import Troca from '../assets/troca.png';
import './Facilidades.css';

const facilities = [
    { id: 'facilidade_1', title: 'Parcelamento em', subtitle: '12x sem juros', image: Cartao },
    { id: 'facilidade_2', title: 'Entrega Rápida', subtitle: '', image: Caminhao },
    { id: 'facilidade_3', title: 'Troca e Devoluções', subtitle: '', image: Troca },
];

const Facilidades = () => {
    return (
        <div>
            <motion.div
            className='facilidades_title'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: .5, delay:.5 }}
            >
                <h1>Facilidades</h1>
            </motion.div>
            <motion.div
                className='facilidades_container'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: .5, delay:.5 }}
                
            >
                <AnimatePresence>
                    
                    {facilities.map((facility) => (
                        <div
                            key={facility.id}
                            className='facilidades'
                            id={facility.id}
                            style={{ display: 'flex', alignItems: 'center', gap: '20px' }}
                        >
                            <div className='facilidades_img'>
                                <img src={facility.image} alt='' />
                            </div>
                            <div className='facilidades_text'>
                                <h2>{facility.title}</h2>
                                <h2>{facility.subtitle}</h2>
                            </div>
                        </div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default Facilidades;