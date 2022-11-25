import React, { Component } from "react";
import { Carousel, Row, Col } from "react-bootstrap";
export class APi extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    // fetch(" http://www.omdbapi.com/?i=tt3896198&apikey=a1586095&s=harry%20potter")
    // .then((response) => response.json())
    // .then((film) => console.log(film))
    try {
      const response = await fetch(
        "http://www.omdbapi.com/?i=tt3896198&apikey=a1586095&s=harry%20potter"
      );
      const film = await response.json();
      console.log(film);
      this.setState({ movies: film.Search });
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    console.log("render mehtod called");
    const { movies } = this.state;
    return (
      <div>
        <h5 className="text-light mt-2 mb-2">Trending Now</h5>
        <Carousel>
          <Carousel.Item>
            <div className="movie-row">
              <Row>
                {movies.map((movie) => (
                  <Col md={2}>
                    <a href="#" className="movie-cover">
                      <img src={movie.Poster}  alt="image"/>
                    </a>
                    <h3>{movie.Title}</h3>
                  </Col>
                ))}
              </Row>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default APi;
