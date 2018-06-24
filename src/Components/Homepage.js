import React, { Component } from "react";
import Card from "./Card";
import img1 from "../assets/img-1.jpg";
import img2 from "../assets/img-2.jpg";
import img3 from "../assets/img-3.jpg";
import img4 from "../assets/img-4.jpg";

class Homepage extends Component {
  /*
    WHEN API IS READY IMAGE IMPORTS WILL GO AWAY ALONG WITH DEFAULT PROPS 
    AND ALL DATA WILL BE FROM API CALL
  */

  render() {
    const showCards = this.props.cards.map((card, i) => (
      <Card
        key={i}
        image={card.image}
        title={card.title}
        description={card.description}
        imageTitle={card.imageTitle}
      />
    ));
    return (
      <div className="homepage-container">
        <div className="card-columns container">{showCards}</div>
      </div>
    );
  }
}
// Temporary data
Homepage.defaultProps = {
  cards: [
    {
      title: "Hello",
      image: img1,
      description: "Blah Blah Blah Blah Blah Blah Blah Blah Blah",
      imageTitle: "Image"
    },
    {
      title: "Hey",
      image: img2,
      description: "Blah Blah Blah Blah Blah Blah Blah Blah Blah",
      imageTitle: "Image"
    },
    {
      title: "Yo",
      image: img3,
      description: "Blah Blah Blah Blah Blah Blah Blah Blah Blah",
      imageTitle: "Image"
    },
    {
      title: "Yo",
      image: img3,
      description: "Blah Blah Blah Blah Blah Blah Blah Blah Blah",
      imageTitle: "Image"
    },
    {
      title: "Hello",
      image: img1,
      description: "Blah Blah Blah Blah Blah Blah Blah Blah Blah",
      imageTitle: "Image"
    },
    {
      title: "Hey",
      image: img2,
      description: "Blah Blah Blah Blah Blah Blah Blah Blah Blah",
      imageTitle: "Image"
    },
    {
      title: "Yo",
      image: img3,
      description: "Blah Blah Blah Blah Blah Blah Blah Blah Blah",
      imageTitle: "Image"
    },
    {
      title: "Yo",
      image: img3,
      description: "Blah Blah Blah Blah Blah Blah Blah Blah Blah",
      imageTitle: "Image"
    },
    {
      title: "Sup",
      image: img4,
      description: "Blah Blah Blah Blah Blah Blah Blah Blah Blah",
      imageTitle: "Image"
    }
  ]
};

export default Homepage;
