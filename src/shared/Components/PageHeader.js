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
  gap: 14px;
  flex-wrap: wrap;
`;

const LogoText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
    width: 100%;
    font-size: 12px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 6.5px;
    background-color: #9a35ef;
    padding: 4px 4px;
    border-radius: ${SITE_CONFIG.borderRadius};
    text-align: center;
  }
`;

const PageHeader = props => {
  return (
    <LogoWrapper>
      <Link to={"/"}>
        <Logo>
          <img
            src={avatar}
            alt="Logo"
            width="10%"
            style={{ minWidth: "70px" }}
          />
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
