import React, { FC, useState } from "react";
import Menu from "antd/lib/menu";
import Image from "antd/lib/image";
import Row from "antd/lib/row";
import Space from "antd/lib/space";
import Typography from "antd/lib/typography";
import { MailOutlined, AppstoreOutlined } from "@ant-design/icons";
//import { AmplifySignOut } from "@aws-amplify/ui-react";

const { Text } = Typography;

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
      <Row>
        <Image src="https://www.lsmradio.com/img/logo-only.jpg" />
        <Space direction="vertical">
          <Text italic>Pelajaran Hayat</Text>
          <Text italic>Pelajaran Hayat</Text>
        </Space>
      </Row>
      <Row>
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
          <Menu.Item key="mail" icon={<MailOutlined />}>
            Program
          </Menu.Item>
          <Menu.Item key="app" icon={<AppstoreOutlined />}>
            Hubungi Kami
          </Menu.Item>
          <Menu.Item key="app" icon={<AppstoreOutlined />}>
            Menu 1
          </Menu.Item>
          <Menu.Item key="app" icon={<AppstoreOutlined />}>
            Menu 2
          </Menu.Item>
        </Menu>
      </Row>
    </>
  );
};

export default HeaderPanel;
