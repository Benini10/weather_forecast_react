import { Col, Container, Row } from "react-bootstrap";
import WeatherCity from "../WeatherCity";
import WeatherItem from "./WeatherItem";

function WeatherList({ city, data }) {
  return (
    <div>
      <Container>
        <Row>
          {/* <h4>{`${city.name} - ${city.country}`}</h4> */}
          <Col sm="3" med="3">
            <WeatherCity city={city} />
          </Col>
          <Col sm="9" med="9">
            <Row>
              {data.map((weather, index) => (
                <Col sm="4" med="4" key={index}>
                  <WeatherItem weather={weather} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default WeatherList;
