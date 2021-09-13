import { FC } from "react";
import styled from "styled-components";
import { Layout } from "antd";

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
      <Layout>
        <ContentPanel />
      </Layout>
    </LayoutStyled>
  );
};

export default Home;
