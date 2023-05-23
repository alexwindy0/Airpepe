"use client";

import React from 'react';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavBar = () => {
  return (
      <Navbar variant="dark" expand="lg" className='text-center d-flex justify-content-center'>
        <Container className='mt-4'>
          <div className='airpepe'>
            <Navbar.Brand href="/">
              <img
                src="/assets/icons/logo512.png"
                width="30"
                height="30"
                className="d-inline-block align-top logo-image mt-1"
                alt="React Bootstrap logo"
              />
                AIRPEPE
            </Navbar.Brand>
          </div>
      
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav-links m-auto gap-5">
              <Link href="#about">
                ABOUT
              </Link>
              <Link href="#How_to_buy">
                HOW TO BUY
              </Link>
              <Link href="#Token0mics">
                TOKENOMICS
              </Link>
              <Link href="#Roadmap">
                ROADMAP
              </Link>
              <Link href="#Litepaper">
                LITEPAPER
              </Link>
            </Nav>
            <span className='btn-span'>
              <button className='btn btn-outline-light rounded-pill'>BUY NOW</button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default NavBar;