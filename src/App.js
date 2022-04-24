import {Navbar, JobCard} from './components';
import {Row,Col} from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div style={{padding:"0px 0 0 70px"}}>
      <Row>
        <Col md={6}><JobCard/></Col>
        <Col md={5}><JobCard/></Col>
        <Col md={6}><JobCard/></Col>
        <Col md={5}><JobCard/></Col>
      </Row>
      </div>
      Remember:-
      Change font everywhere
    </div>
  );
}

export default App;
