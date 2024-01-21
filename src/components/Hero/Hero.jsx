import React from 'react';
import { BiSolidShoppingBag } from "react-icons/bi";
import minar from '../../assets/minar.png'
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section id="hero">
            <div className="heroContent">
                <span className="hello">Hello</span>
                <p className="introHead"><span>I'am </span>
                    <span className='introName'>Minar Hossain</span></p>

                <p className="developer">Web Developer</p>

                <p className='introPara'>I am learning and passionate web developer  with experience <br />in coding and programming  with JavaScript</p>

                <Link to='#'><button className='heroBtn'><BiSolidShoppingBag className='icon' /> Hire Me</button></Link>

            </div>
            <img src={minar} alt="" className='bg' />
        </section>
    );
};

export default Hero;