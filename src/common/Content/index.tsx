import React, { FC } from "react";
import styled from "styled-components";
import Layout from "antd/lib/layout";
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import Button from "antd/lib/button";
import Row from "antd/lib/row";
import Col from "antd/lib/col";

const { Content } = Layout;

const ContentStyled = styled(Content)`
  margin: 24px 16px 0;
`;

const FormItemButtonStyled = styled(Form.Item)`
  margin-right: 20px;
`;

interface TypeProps {
  title?: string;
}

const ContentPanel: FC<TypeProps> = ({ title }) => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <ContentStyled>
      <Form name="basic" onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Row wrap={false}>
          <Col flex="auto">
            <Form.Item
              label="Write your note"
              name="note"
              rules={[{ required: true, message: "Please input your note!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col flex="none">
            <FormItemButtonStyled wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </FormItemButtonStyled>
          </Col>
        </Row>
      </Form>
    </ContentStyled>
  );
};

export default ContentPanel;
