import { PureComponent } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  CardDeck
} from "reactstrap";
class Product extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: "9b505bcd-9440-481a-a8f8-418f30a0a8c3",
          name: "Stock - Beef, Brown",
          description:
            "nunc vestibulum ante ipsum primis in faucibus orci luctus et",
          imageUrl: "http://dummyimage.com/300x200.png/ff4444/ffffff"
        },
        {
          id: "68ccad25-6502-46d7-b172-ff32a30004ae",
          name: "Bar Energy Chocchip",
          description:
            "risus auctor sed tristique in tempus sit amet sem fusce",
          imageUrl: "http://dummyimage.com/300x200.png/dddddd/000000"
        },
        {
          id: "27a5e5b5-b46e-4a0f-8a50-5d50bc3a86c3",
          name: "Soup - Canadian Pea, Dry Mix",
          description:
            "malesuada in imperdiet et commodo vulputate justo in blandit ultrices",
          imageUrl: "http://dummyimage.com/300x200.png/dddddd/000000"
        },
        {
          id: "568059a8-632e-4b34-8d5c-e0df9808d4c4",
          name: "Tart Shells - Barquettes, Savory",
          description:
            "ipsum primis in faucibus orci luctus et ultrices posuere cubilia",
          imageUrl: "http://dummyimage.com/300x200.png/cc0000/ffffff"
        },
        {
          id: "83bc5b40-92a7-43ae-bbd6-dec7295aa3f8",
          name: "Alize Sunset",
          description:
            "suspendisse potenti in eleifend quam a odio in hac habitasse",
          imageUrl: "http://dummyimage.com/300x200.png/ff4444/ffffff"
        },
        {
          id: "b49e429d-da27-40d5-b020-b69227255476",
          name: "Orange - Blood",
          description:
            "blandit nam nulla integer pede justo lacinia eget tincidunt eget",
          imageUrl: "http://dummyimage.com/300x200.png/dddddd/000000"
        },
        {
          id: "c4f168b7-0328-4a0f-808c-128c5e8d02dc",
          name: "Bread - Dark Rye, Loaf",
          description:
            "nulla nisl nunc nisl duis bibendum felis sed interdum venenatis",
          imageUrl: "http://dummyimage.com/300x200.png/dddddd/000000"
        },
        {
          id: "ed8189be-38cd-4860-b856-87a409e27b73",
          name: "Juice - Mango",
          description:
            "suspendisse ornare consequat lectus in est risus auctor sed tristique",
          imageUrl: "http://dummyimage.com/300x200.png/cc0000/ffffff"
        },
        {
          id: "eec4a191-4e91-4b66-8e76-2f7b7966d776",
          name: "Appetizer - Lobster Phyllo Roll",
          description:
            "nibh ligula nec sem duis aliquam convallis nunc proin at",
          imageUrl: "http://dummyimage.com/300x200.png/5fa2dd/ffffff"
        },
        {
          id: "7707d5e0-a536-45ee-9c8c-e8b650b819e1",
          name: "Smoked Tongue",
          description:
            "eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan",
          imageUrl: "http://dummyimage.com/300x200.png/5fa2dd/ffffff"
        },
        {
          id: "033e4cfc-2518-44ca-9c15-64152767ec3c",
          name: "Pickle - Dill",
          description:
            "at turpis a pede posuere nonummy integer non velit donec",
          imageUrl: "http://dummyimage.com/300x200.png/ff4444/ffffff"
        },
        {
          id: "a1abc7b2-0edd-4f49-8813-b39bbf905430",
          name: "Mushroom - Enoki, Dry",
          description:
            "quam a odio in hac habitasse platea dictumst maecenas ut",
          imageUrl: "http://dummyimage.com/300x200.png/5fa2dd/ffffff"
        },
        {
          id: "3dcdf865-7269-4747-9e6c-616dfeec502b",
          name: "Dehydrated Kelp Kombo",
          description:
            "volutpat eleifend donec ut dolor morbi vel lectus in quam",
          imageUrl: "http://dummyimage.com/300x200.png/5fa2dd/ffffff"
        },
        {
          id: "1364a562-af19-4236-8b4d-003ff76d8308",
          name: "Pasta - Lasagne, Fresh",
          description:
            "lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum",
          imageUrl: "http://dummyimage.com/300x200.png/5fa2dd/ffffff"
        },
        {
          id: "2bb0bebf-f4fa-4c43-8d2a-9b1521d0fc0c",
          name: "Bread - Crumbs, Bulk",
          description:
            "in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae",
          imageUrl: "http://dummyimage.com/300x200.png/ff4444/ffffff"
        },
        {
          id: "3ad95c25-34e6-430d-8009-90fcf76a96d8",
          name: "Garbage Bags - Black",
          description:
            "fusce congue diam id ornare imperdiet sapien urna pretium nisl",
          imageUrl: "http://dummyimage.com/300x200.png/ff4444/ffffff"
        },
        {
          id: "aa0d6ebb-4819-446b-b495-87822ccab92c",
          name: "Arctic Char - Fillets",
          description:
            "vulputate luctus cum sociis natoque penatibus et magnis dis parturient",
          imageUrl: "http://dummyimage.com/300x200.png/5fa2dd/ffffff"
        },
        {
          id: "f1245823-b3d1-4940-a0d3-1cfb7bb14df2",
          name: "Huck Towels White",
          description:
            "quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt",
          imageUrl: "http://dummyimage.com/300x200.png/ff4444/ffffff"
        },
        {
          id: "bf5a38e6-54c4-42cb-9056-a69e65224e2e",
          name: "Dip - Tapenade",
          description:
            "turpis elementum ligula vehicula consequat morbi a ipsum integer a",
          imageUrl: "http://dummyimage.com/300x200.png/dddddd/000000"
        },
        {
          id: "d899d6d7-2f63-46f6-bf86-1a539b465c6b",
          name: "Beef - Ground, Extra Lean, Fresh",
          description:
            "lobortis est phasellus sit amet erat nulla tempus vivamus in",
          imageUrl: "http://dummyimage.com/300x200.png/ff4444/ffffff"
        }
      ]
    };
  }
  render() {
    const { products } = this.state;
    return (
      <Container>
        <h2>Product</h2>
        <Row>
          {products.map((products, index) => (
            <Col sm="4">
              <CardDeck>
                <Card>
                  <CardImg
                    top
                    width="100%"
                    src={products.imageUrl}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle tag="h5">{products.name}</CardTitle>
                    <CardText>{products.description}</CardText>
                    <Button>Button</Button>
                  </CardBody>
                </Card>
                <br />
              </CardDeck>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
export default Product;
