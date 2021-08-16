import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";
import Layout from "antd/lib/layout";
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import Button from "antd/lib/button";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import { DataStore } from "aws-amplify";

import { TypeNote } from "src/types/TypeNote";

import TableContent from "src/common/Content/components/TableContent";
import { Todo } from "src/models";

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

  useEffect(() => {
    loadNotes();
  }, []);

  useEffect(() => {
    loadNotes();
  }, [notesData]);

  const loadNotes = async () => {
    try {
      const posts = await DataStore.query(Todo);
      console.log(
        "Posts retrieved successfully!",
        JSON.stringify(posts, null, 2)
      );
      setNotesData(posts);
    } catch (error) {
      console.log("Error retrieving posts", error);
    }
  };

  const createResponseBeforeSubmit = (
    formValues: TypeNotesFormValues,
    originData?: TypeNote
  ): TypeNote => {
    return {
      name: formValues.name || originData?.name || "",
    };
  };

  const onFinish = async (values: TypeNotesFormValues): Promise<void> => {
    let tempNotesData = [...notesData];
    try {
      await DataStore.save(new Todo(createResponseBeforeSubmit(values)));
      console.log("Post saved successfully!");
      tempNotesData.push(createResponseBeforeSubmit(values));
      setNotesData(tempNotesData);
    } catch (error) {
      console.log("Error saving post", error);
    }
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
