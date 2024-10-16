import GlobalStyles from "./styles/GlobalsStyles";
import Button from "./ui/Button";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Row type="horizontal">
        <Heading type="h1">Here</Heading>
        <Heading type="h2">Here</Heading>
        <Heading type="h3" as="h3">
          Here
        </Heading>
        <Button variation="secondary" size="small">
          Click
        </Button>
      </Row>
      <Row>
        <Heading type="h3" as="h3">
          Here
        </Heading>
        <Button variation="danger" size="medium">
          Click
        </Button>
      </Row>
    </div>
  );
};

export default App;
