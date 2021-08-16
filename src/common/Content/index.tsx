import React, { FC, useState } from "react";
import styled from "styled-components";
import Layout from "antd/lib/layout";
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import Button from "antd/lib/button";
import Row from "antd/lib/row";
import Col from "antd/lib/col";

import { TypeNote } from "src/types/TypeNote";

import TableContent from "src/common/Content/components/TableContent";

const { Content } = Layout;

const ContentStyled = styled(Content)`
  margin: 24px 16px 0;
`;

const DivFormContainerStyled = styled.div``;

const DivTableContainerStyled = styled.div``;

const FormItemButtonStyled = styled(Form.Item)`
  margin-right: 20px;
`;

interface TypeNotesFormValues {
  name: string;
  description?: string;
}

interface TypeProps {
  title?: string;
}

const ContentPanel: FC<TypeProps> = ({ title }) => {
  const [notesData, setNotesData] = useState<TypeNote[]>([]);

  const createResponseBeforeSubmit = (
    formValues: TypeNotesFormValues,
    originData?: TypeNote
  ): TypeNote => {
    return {
      name: formValues.name || originData?.name || "",
    };
  };

  const onFinish = (values: TypeNotesFormValues): void => {
    console.log("Success:", createResponseBeforeSubmit(values));
    let tempNotesData = [...notesData];
    tempNotesData.push(createResponseBeforeSubmit(values));
    setNotesData(tempNotesData);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <ContentStyled>
      <DivFormContainerStyled>
        <Form<TypeNotesFormValues>
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Row wrap={false}>
            <Col flex="auto">
              <Form.Item
                label="Write your note"
                name="name"
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
      </DivFormContainerStyled>
      <DivTableContainerStyled>
        <TableContent datasource={notesData} />
      </DivTableContainerStyled>
    </ContentStyled>
  );
};

export default ContentPanel;
