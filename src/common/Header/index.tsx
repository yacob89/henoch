import { FC, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Menu from "antd/lib/menu";
import Image from "antd/lib/image";
import Row from "antd/lib/row";
import Space from "antd/lib/space";
import { MailOutlined, AppstoreOutlined } from "@ant-design/icons";
//import { AmplifySignOut } from "@aws-amplify/ui-react";

const TitleStyled = styled.span`
  margin-left: 12px;
  margin-bottom: 0px;
  font-size: 24px;
`;

const SubTitleStyled = styled.span`
  margin-left: 12px;
  font-size: 16px;
  margin-top: 2px;
`;

const RowStyled = styled(Row)`
  background-color: white;
  width: 100%;
`;

interface TypeProps {
  title?: string;
}

const HeaderPanel: FC<TypeProps> = ({ title }) => {
  const [current, setCurrent] = useState("");

  const handleClick = (event: any) => {
    setCurrent(event.key);
  };

  return (
    <>
      <RowStyled>
        <Image src="https://www.lsmradio.com/img/logo-only.jpg" />
        <Space direction="vertical">
          <TitleStyled>Yasperin</TitleStyled>
          <SubTitleStyled>Radio Pelajaran Hayat Alkitab</SubTitleStyled>
        </Space>
      </RowStyled>
      <Row>
        <Menu
          onClick={handleClick}
          selectedKeys={[current]}
          mode="horizontal"
          style={{ width: "100%" }}
        >
          <Menu.Item key="mail" icon={<MailOutlined />}>
            Program
          </Menu.Item>
          <Menu.Item key="contact" icon={<AppstoreOutlined />}>
            Hubungi Kami
          </Menu.Item>
          <Menu.Item key="admin" icon={<AppstoreOutlined />}>
            <Link to="/admin">Admin</Link>
          </Menu.Item>
          <Menu.Item key="menu2" icon={<AppstoreOutlined />}>
            Menu 2
          </Menu.Item>
        </Menu>
      </Row>
    </>
  );
};

export default HeaderPanel;
