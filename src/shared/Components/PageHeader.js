import React from "react";
import Icon from "@ant-design/icons";
import styled from "styled-components";
import SITE_CONFIG from "../../shared/config";
import PandaSvg from "./Logo";

const PandaIcon = props => <Icon component={PandaSvg} {...props} />;

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

  .logo-inc {
    font-size: 34px;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 8px;
    line-height: 34px;
    margin-bottom: 6px;
  }

  .logo-slogan {
    color: white;
    font-size: 12px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 6.5px;
    background-color: #9a35ef;
    padding: 4px 14px;
    border-radius: ${SITE_CONFIG.borderRadius};
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
      <Logo>
        <PandaIcon style={{ fontSize: "64px" }} />
        <LogoText>
          <div className="logo-inc">Smart Panda</div>
          <div className="logo-slogan">SHOP THE BESTSELLERS</div>
        </LogoText>
      </Logo>
    </LogoWrapper>
  );
};

export default PageHeader;
