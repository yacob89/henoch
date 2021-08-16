import React, { FC } from "react";
import styled from "styled-components";
import { Layout } from "antd";

import SiderPanel from "src/common/Sider";
import HeaderPanel from "src/common/Header";
import FooterPanel from "src/common/Footer";
import ContentPanel from "src/common/Content";

const LayoutStyled = styled(Layout)`
  height: 100%;
`;

interface TypeProps {
  title?: string;
}

const Home: FC<TypeProps> = ({ title }) => {
  return (
    <LayoutStyled>
      <SiderPanel />
      <Layout>
        <HeaderPanel />
        <ContentPanel />
        <FooterPanel />
      </Layout>
    </LayoutStyled>
  );
};

export default Home;
