import { useParams, Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import { useGetProductByIdQuery } from "../slices/productsApiSlice";
import Rating from "../components/Rating";
import Loader from "../components/Loader";
import Message from "../components/Message";

const Product = () => {
  const pid = useParams().pid;
  const { data: product, error, isLoading } = useGetProductByIdQuery(pid);

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go back
      </Link>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error.error}</Message>
      ) : (
        <Row>
          <Col md={5}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={4}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Description:</strong> {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>${product.price}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="d-grid gap-2">
                    <Button
                      type="button"
                      variant="dark"
                      size="md"
                      disabled={product.countInStock === 0}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};

export default Product;
