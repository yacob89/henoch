import React, { FC } from "react";
import { Layout } from "antd";

import SiderPanel from "src/common/Sider";
import HeaderPanel from "src/common/Header";
import FooterPanel from "src/common/Footer";
import ContentPanel from "src/common/Content";

interface TypeProps {
  title?: string;
}

const Home: FC<TypeProps> = ({ title }) => {
  return (
    <Layout>
      <SiderPanel />
      <Layout>
        <HeaderPanel />
        <ContentPanel />
        <FooterPanel />
      </Layout>
    </Layout>
  );
};

export default Home;
