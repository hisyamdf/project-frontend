import React from "react";

const Cards = () => {
  const cardList1 = [
    // Children
    { image: "/children/despicable-me/" },
    { image: "/children/frozen/" },
    { image: "/children/hotel-transylvania/" },
    { image: "/children/spirited-away/" },
    { image: "/children/up/" },
  ];
  const cardList2 = [
    // Drama
    { image: "/drama/fight-club/" },
    { image: "/drama/kings-speech/" },
    { image: "/drama/the-prestige/" },
    { image: "/drama/the-revenant/" },
    { image: "/drama/the-social-network/" },
  ];
  const cardList3 = [
    // Romance
    { image: "/romance/a-star-is-born/" },
    { image: "/romance/blue-valentine/" },
    { image: "/romance/la-la-land/" },
    { image: "/romance/the-notebook/" },
    { image: "/romance/titanic/" },
  ];
  const cardList4 = [
    // Thriller
    { image: "/thriller/a-quiet-place/" },
    { image: "/thriller/black-swan/" },
    { image: "/thriller/joker/" },
    { image: "/thriller/nightcrawler/" },
    { image: "/thriller/the-silence-of-the-lambs/" },
  ];

  const renderCard = (card, index) => {
    return (
      <div key={index}>
        <img
        className="filmlist"
          src={require("../assets/films" + card.image + "small.jpg").default}
          alt="filmlist"
        />
      </div>
    );
  };

  return (
    <div className="film-list">
      <h2>Children</h2>
      <div
        className="filmlists 1"
      >
        {cardList1.map(renderCard)}
      </div>
      <h2>Drama</h2>
      <div
        className="filmlists 2"
      >
        {cardList2.map(renderCard)}
      </div>
      <h2>Romance</h2>
      <div
        className="filmlists 3"
      >
        {cardList3.map(renderCard)}
      </div>
      <h2>Thriller</h2>
      <div
        className="filmlists 4"
      >
        {cardList4.map(renderCard)}
      </div>
    </div>
  );
};

export default Cards;
