import Carousel from "react-bootstrap/Carousel";

function Carousel2() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          src="https://picsum.photos/800/300?random=1"
          className="d-block w-100"
          alt="..."
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://picsum.photos/800/300?random=2"
          className="d-block w-100"
          alt="..."
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://picsum.photos/800/300?random=3"
          className="d-block w-100"
          alt="..."
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousel2;
