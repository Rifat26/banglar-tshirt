/* eslint-disable no-unused-vars */
import React from 'react';
import Father from '../components/Father/Father';
import Uncle from '../components/Uncle/Uncle';
import Aunty from '../components/Aunty/Aunty';
import './Grandpa.css';

const Grandpa = () => {
    return (
        <div className='grandpa'>
            <h2>Grandpa</h2>
            <section className='flex'>
                <Father></Father>
                <Uncle></Uncle>
                <Aunty></Aunty>
            </section>
        </div>
    );
};

export default Grandpa;