import React, { FC } from "react";
import { Layout } from "antd";

const { Footer } = Layout;

interface TypeProps {
  title?: string;
}

const FooterPanel: FC<TypeProps> = ({ title }) => {
  return (
    <Footer style={{ textAlign: "center" }}>Church in Bandung ©2021</Footer>
  );
};

export default FooterPanel;
