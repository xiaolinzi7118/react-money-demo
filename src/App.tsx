import Nav from "components/Nav";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  height:100vh;
  display:flex;
  flex-direction:column;
`;
const Main = styled.div`
  flex-grow:1;
  overflow:auto;
`;



function App() {
  return (
    <Router>
      <div>
        <Wrapper>
          <Main>
            <Switch>
              <Route path="/tags">
                <Tags />
              </Route>
              <Route path="/money">
                <Money />
              </Route>
              <Route path="/statistics">
                <Statistics />
              </Route>
              <Redirect exact from="/" to="money" />
              <Route path="*">
                <NoMatch />
              </Route>
            </Switch>
          </Main>
          <Nav />
        </Wrapper>
      </div>
    </Router>
  );
}

function Tags() {
  return <h2>标签页</h2>;
}

function Money() {
  return <h2>记账页</h2>;
}

function Statistics() {
  return <h2>统计页</h2>;
}

function NoMatch() {
  return (
    <div>页面不存在哦</div>
  )
}

export default App