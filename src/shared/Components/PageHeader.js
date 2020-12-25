import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SITE_CONFIG from "../../shared/config";
import avatar from "./avataaars.png";

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4px;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  border-radius: ${SITE_CONFIG.borderRadius};
  gap: 24px;
  flex-wrap: wrap;

  .logo-inc {
    font-size: 24px;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 6px;
    line-height: 34px;
    margin-bottom: 6px;
    text-align: center;
  }

  .logo-slogan {
    color: white;
    font-size: 12px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 6.5px;
    background-color: #9a35ef;
    padding: 4px 84px;
    border-radius: ${SITE_CONFIG.borderRadius};
    text-align: center;
  }
`;

const LogoText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PageHeader = props => {
  return (
    <LogoWrapper>
      <Link to={"/"}>
        <Logo>
          <img src={avatar} alt="Logo" width="100" />
          <LogoText>
            <div className="logo-inc">{SITE_CONFIG.siteName}</div>
            <div className="logo-slogan">{SITE_CONFIG.slogan}</div>
          </LogoText>
        </Logo>
      </Link>
    </LogoWrapper>
  );
};

export default PageHeader;
