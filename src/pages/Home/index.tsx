import React, { FC } from "react";
//import styled from "styled-components";
import { Layout } from "antd";

import SiderPanel from "src/common/Sider";

const { Header, Content, Footer } = Layout;

/* const TabsMarginBottomStyled = styled(Tabs)`
  .ant-tabs-nav {
    margin-bottom: 0px;
  }
  .ant-tabs-tab {
    padding-left: 28px;
    padding-right: 28px;
    margin-right: 0px;
  }
  .ant-tabs-tab-active {
    background-color: white;
  }
`; */

interface TypeProps {
  title?: string;
}

const Home: FC<TypeProps> = ({ title }) => {
  return (
    <Layout>
      <SiderPanel />
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{ padding: 0 }}
        />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            content
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Yacob Madiana ©2021</Footer>
      </Layout>
    </Layout>
  );
};

export default Home;
