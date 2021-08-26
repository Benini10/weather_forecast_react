import { Col, Container, Row } from "react-bootstrap";
import WeatherItem from "./WeatherItem";

function WeatherList({ data }) {
  return (
    <div>
      <Container>
        <Row>
          {data.map((weather) => (
            <Col sm="3" med="3">
              <WeatherItem key={weather.weather.id} weather={weather} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default WeatherList;
