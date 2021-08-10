import React, { FC } from "react";
import { Layout } from "antd";

const { Header } = Layout;

interface TypeProps {
  title?: string;
}

const HeaderPanel: FC<TypeProps> = ({ title }) => {
  return (
    <Header
      className="site-layout-sub-header-background"
      style={{ padding: 0 }}
    />
  );
};

export default HeaderPanel;
