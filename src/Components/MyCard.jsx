import React, { Component } from 'react'

export class MyCard extends Component {

    state  = {
        films: []
    }

    componentDidMount() {

        fetch('http://www.omdbapi.com/?i=tt3896198&apikey=a1586095')

        .then((response) => response.json())

        .then(booksList => {

            this.setState({ films: booksList });
        });

    }
  render() {
    return (
      <div>
        <ul>
        {this.state.films.map((film) => (
       
        <li key={film.id}>{film.title}</li>
       ))}
       </ul>
  {/* <div className="movie-gallery m-2">
        <h5 className="text-light mt-2 mb-2">Trending Now</h5>
        <div id="trending-now" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="movie-row">
                <div className="row">
                  <div className="col-md-2">
                    <img className="movie-cover" src="./assets/media/media0.jpg" />
                  </div>
                  <div className="col-md-2">
                    <img className="movie-cover" src="./assets/media/media1.jpg" />
                  </div>
                  <div className="col-md-2">
                    <img className="movie-cover" src="./assets/media/media2.jpg" />
                  </div>
                  <div className="col-md-2">
                    <img className="movie-cover" src="./assets/media/media3.jpg" />
                  </div>
                  <div className="col-md-2">
                    <img className="movie-cover" src="./assets/media/media4.jpg" />
                  </div>
                  <div className="col-md-2">
                    <img className="movie-cover" src="./assets/media/media5.jpg" />
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="movie-row">
                <div className="row">
                  <div className="col-md-2">
                    <img className="movie-cover" src="./assets/media/media0.jpg" />
                  </div>
                  <div className="col-md-2">
                    <img className="movie-cover" src="./assets/media/media1.jpg" />
                  </div>
                  <div className="col-md-2">
                    <img className="movie-cover" src="./assets/media/media2.jpg" />
                  </div>
                  <div className="col-md-2">
                    <img className="movie-cover" src="./assets/media/media3.jpg" />
                  </div>
                  <div className="col-md-2">
                    <img className="movie-cover" src="./assets/media/media4.jpg" />
                  </div>
                  <div className="col-md-2">
                    <img className="movie-cover" src="./assets/media/media5.jpg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#trending-now"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#trending-now"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div> */}

      </div>
    )
  }
}

export default MyCard