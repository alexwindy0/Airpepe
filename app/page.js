"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import '@styles/globals.css';
import { Container, Row, Col } from 'react-bootstrap';

import { AiFillTwitterCircle, AiFillGithub, AiFillRedditCircle } from 'react-icons/ai';
import { BsTelegram } from 'react-icons/bs';
import Image from 'next/image';
import bsc from '../public/assets/icons/bsc.svg';

const page = () => {
  return (
    <div>
      <Container className='hero p-5 mt-5 text-center'>
          <h1 className='hero-text'>
            AIRPEPE
          </h1>
          <h4 className='mb-3'>Revive your lifeless meme coins with $AIRPEPE – Air-Lifting the bearish to bullish!</h4>
      </Container>
      <Container className='hero-container'>
        <Row>
          <Col lg={6} sm={12} md={12} className='hero-icons d-flex align-items-center justify-content-center'>
            <AiFillGithub className='github'/>
            <AiFillRedditCircle className='reddit' />
            <AiFillTwitterCircle className='twitter' />
            <BsTelegram className='telegram' />
          </Col>
          <Col lg={6} sm={12} md={12} className='hero-buttons d-flex align-items-center justify-content-center'>
            <button className='btn btn-outline-danger rounded-pill'>KYC</button>
            <button className='btn btn-outline-primary rounded-pill'>SAFU</button>
            <button className='btn btn-outline-success rounded-pill'>AUDITED</button>
          </Col>
        </Row>
      </Container>
      <Container className=' mt-5 p-5 text-center'>
        <Row lg={12} md={12} sm={12}>
          <Col>
            <div className='coin-wrapper'>
              <button className='btn btn-outline-light rounded-pill text-center'>
                <a href='https://bscscan.com/' target='_'>BSCSCAN</a>
                <Image className="img" src="/assets/icons/bsc.svg"  width={30} height={30} alt='bscscan' />
              </button>
            </div>
          </Col>
          <Col>
            <div className='coin-wrapper'>
              <button className='btn btn-outline-light rounded-pill text-center'>
                <a href='https://www.pinksale.finance/' target='_'>PINKSALE</a>
                <Image className="img" src="/assets/icons/pinksale.png"  width={30} height={30} alt='bscscan' />
              </button>
            </div>
          </Col>
          <Col>
            <div className='coin-wrapper'>
              <button className='btn btn-outline-light rounded-pill text-center'>
                <a href='https://pancakeswap.finance/' target='_'>PANCAKESWAP</a>
                <Image className="img" src="/assets/icons/pancakeswap.png"  width={30} height={30} alt='bscscan' />
              </button>
            </div>
          </Col>
        </Row>
        <Row className='mt-5'>
        <Col>
          <div className='coin-wrapper'>
            <button className='btn btn-outline-light rounded-pill text-center'>
              <a href='https://poocoin.app/' target='_'>POOCOIN</a>
              <Image className="img" src="/assets/icons/poocoin.png"  width={30} height={30} alt='bscscan' />
            </button>
          </div>
        </Col>
        <Col>
          <div className='coin-wrapper'>
            <button className='btn btn-outline-light rounded-pill text-center'>
              <a href='https://dextools.io/' target='_'>DEXTOOLS</a>
              <Image className="img" src="/assets/icons/dextools.png"  width={30} height={30} alt='bscscan' />
            </button>
          </div>
        </Col>
        <Col>
          <div className='coin-wrapper'>
            <button className='btn btn-outline-light rounded-pill text-center'>
              <a href='https://www.rugfreecoins.com/' target='_'>RUGFREECOIN</a>
              <Image className="img" src="/assets/icons/rugfree.png"  width={30} height={30} alt='bscscan' />
            </button>
          </div>
        </Col>
        </Row>
      </Container>
    </div>

  )
};

export default page;
