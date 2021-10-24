import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
///import { withAuthenticator } from "@aws-amplify/ui-react";
import { Layout } from "antd";
import "./App.css";

import Home from "./pages/Home";
import EditPeople from "./pages/EditPeople";
//import SiderPanel from "src/common/Sider";
import HeaderPanel from "src/common/Header";
import FooterPanel from "src/common/Footer";

const LayoutStyled = styled(Layout)`
  height: 100%;
`;

function App() {
  return (
    <LayoutStyled>
      <Router>
        {/* <SiderPanel /> */}
        <Layout>
          <HeaderPanel />
          <Switch>
            <Route exact path="/admin">
              <Home />
            </Route>
            <Route exact path="/edit-people">
              <EditPeople />
            </Route>
          </Switch>
          <FooterPanel />
        </Layout>
      </Router>
    </LayoutStyled>
  );
}

//export default withAuthenticator(App);
export default App;
