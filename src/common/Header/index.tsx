import React, { FC } from "react";
import PageHeader from "antd/lib/page-header";
import { AmplifySignOut } from "@aws-amplify/ui-react";

interface TypeProps {
  title?: string;
}

const HeaderPanel: FC<TypeProps> = ({ title }) => {
  return (
    <PageHeader
      className="site-page-header"
      backIcon={false}
      title="Title"
      subTitle="This is a subtitle"
      extra={[<AmplifySignOut key="1" buttonText="Sign Out"></AmplifySignOut>]}
    />
  );
};

export default HeaderPanel;
