import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import products from "../products";
import Rating from "../components/Rating";

const Product = () => {
  const pid = useParams().pid;

  const product = products.find((product) => {
    return product._id === pid;
  });
  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go back
      </Link>
      <Row>
        <Col></Col>
      </Row>
    </>
  );
};

export default Product;
