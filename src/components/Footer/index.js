import React from 'react'
import styled from 'styled-components';
import { IoCall } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


const FooterContainer = styled.div`
  width: 100%;
  padding: 5rem 0;
  display: flex;
  justify-content: center;
  //background: linear-gradient(100.26deg, rgba(0, 102, 255, 0.05) 42.33%, rgba(150, 0, 225, 0.05) 127.07%);
`;

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.h1`
  font-weight: 600;
  font-size: 35px;
  color: ${({ theme }) => theme.primary};
`;

const GroupLink = styled.div`
display: flex;
margin-top: 5px;
`;

const SIcons = styled.a`
display: inline-block;
margin: 0 1rem;
font-size: 1.5rem;
color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
}
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
      <Logo>Smitu Barot</Logo>
      <GroupLink>
      <SIcons rel="stylesheet" href="#"><IoCall /></SIcons>
      <SIcons rel="stylesheet" href="#"><SiGmail /></SIcons>
      <SIcons rel="stylesheet" href="#"><FaFacebookF/></SIcons>
      <SIcons rel="stylesheet" href="#"><FaInstagram /></SIcons>
      <SIcons rel="stylesheet" href="#"><FaLinkedinIn /></SIcons>
      </GroupLink>
      <p>@ 2024 Smitu Barot. All rights reserved.</p>
      </FooterWrapper>
    </FooterContainer>

  );
}

export default Footer
