import { PureComponent } from "react";
import { Container } from "reactstrap";
import Example from "../Components/Carousel-home.js";
class Home extends PureComponent {
  render() {
    return (
      <Container>
        <Example />
      </Container>
    );
  }
}
export default Home;
