import React, { useState } from "react";
import ReactDOM from "react-dom";
import ModalVideo from "react-modal-video";

const Cards = () => {
  const [isOpen, setOpen] = useState (false);

  const cardList1 = [
    // Children
    { image: "/children/despicable-me/", video: "zzCZ1W_CUoI" },
    { image: "/children/frozen/", video: "TbQm5doF_Uc" },
    { image: "/children/hotel-transylvania/", video: "7AP86CYeR30" },
    { image: "/children/spirited-away/", video: "ByXuk9QqQkk" },
    { image: "/children/up/", video: "ORFWdXl_zJ4" },
  ];
  const cardList2 = [
    // Drama
    { image: "/drama/fight-club/", video: "qtRKdVHc-cE" },
    { image: "/drama/kings-speech/", video: "EcxBrTvLbBM" },
    { image: "/drama/the-prestige/", video: "RLtaA9fFNXU" },
    { image: "/drama/the-revenant/", video: "LoebZZ8K5N0" },
    { image: "/drama/the-social-network/", video: "lB95KLmpLR4" },
  ];
  const cardList3 = [
    // Romance
    { image: "/romance/a-star-is-born/", video: "nSbzyEJ8X9E" },
    { image: "/romance/blue-valentine/", video: "aILx69WrRhQ" },
    { image: "/romance/la-la-land/", video: "0pdqf4P9MB8" },
    { image: "/romance/the-notebook/", video: "FC6biTjEyZw" },
    { image: "/romance/titanic/", video: "CHekzSiZjrY" },
  ];
  const cardList4 = [
    // Thriller
    { image: "/thriller/a-quiet-place/", video: "WR7cc5t7tv8" },
    { image: "/thriller/black-swan/", video: "5jaI1XOB-bs" },
    { image: "/thriller/joker/", video: "-_DJEzZk2pc" },
    { image: "/thriller/nightcrawler/", video: "u1uP_8VJkDQ" },
    { image: "/thriller/the-silence-of-the-lambs/", video: "RuX2MQeb8UM" },
  ];


  const renderCard = (card, index) => {
    return (
      <div key={index}>
        <img
          className="filmlist"
          src={require("../assets/films" + card.image + "small.jpg").default}
          alt="filmlist"
        />
        <React.Fragment>
          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen}
            videoId={card.video}
            onClose={() => setOpen(false)}
          />
        </React.Fragment>
      </div>
    );
  };

  return (
    <div className="film-list">
      <h2>Children</h2>
      <div className="filmlists 1" onClick={() => setOpen(true)}>
        {cardList1.map(renderCard)}
      </div>
      <h2>Drama</h2>
      <div className="filmlists 2">{cardList2.map(renderCard)}</div>
      <h2>Romance</h2>
      <div className="filmlists 3">{cardList3.map(renderCard)}</div>
      <h2>Thriller</h2>
      <div className="filmlists 4">{cardList4.map(renderCard)}</div>
    </div>
  );
};

ReactDOM.render(<Cards />, document.getElementById("root"));

export default Cards;
