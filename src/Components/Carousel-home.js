import React from "react";
import { UncontrolledCarousel } from "reactstrap";
const items = [
  {
    src: "http://dummyimage.com/300x200.png/ff4444/ffffff",
    altText: "Slide 1",
    caption: "là sản phẩm",
    header: "Sản phẩm nổi bậc 3",
    key: "1"
  },
  {
    src: "http://dummyimage.com/300x200.png/5fa2dd/ffffff",
    altText: "Slide 2",
    caption: "là sản phẩm",
    header: "Sản phẩm nổi bậc 3",
    key: "2"
  },
  {
    src: "http://dummyimage.com/300x200.png/cc0000/ffffff",
    altText: "Slide 3",
    caption: "là sản phẩm",
    header: "Sản phẩm nổi bậc 3",
    key: "3"
  }
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;
