import React, { FC } from "react";
import { Layout } from "antd";

const { Content } = Layout;

interface TypeProps {
  title?: string;
}

const ContentPanel: FC<TypeProps> = ({ title }) => {
  return (
    <Content style={{ margin: "24px 16px 0" }}>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360 }}
      >
        content
      </div>
    </Content>
  );
};

export default ContentPanel;
