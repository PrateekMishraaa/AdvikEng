import React from 'react';
import styled from 'styled-components';

const cardData = [
  { text1: "Ariston",  bg: 'linear-gradient(to right, #ff7e5f, #feb47b)' },
  { text1: "Brembo", bg: 'linear-gradient(to right, #6a11cb, #2575fc)' },
  { text1: "Racold", bg: 'linear-gradient(to right, #00c6ff, #0072ff)' },
  { text1: "Nelson Global Project", bg: 'linear-gradient(to right, #ff512f, #dd2476)' },
  { text1: "Lohar", bg: 'linear-gradient(to right, #ffb6c1, #ff69b4)' },
  { text1: "Rane",  bg: 'linear-gradient(to right, #ff9a8b, #ffc3a0)' },
  { text1: "Doca",  bg: 'linear-gradient(to right, #a1c4fd, #c2e9fb)' },
  { text1: "TaTa", bg: 'linear-gradient(to right, #fbc2eb, #a18cd1)' },
  { text1: "ADR India", bg: 'linear-gradient(to right, #84fab0, #8fd3f4)' }
];

const Card = () => {
  return (
    <StyledWrapper>
      <div className="slider">
        <div className="track">
          {cardData.concat(cardData).map((card, index) => (
            <div key={index} className="card" style={{ background: card.bg }}>
              <p>{card.text1}</p>
              <p>{card.text2}</p>
            </div>
          ))}
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .slider {
    overflow: hidden;
    width: 100%;
    background: #f0f0f0;
    padding: 20px 0;
  }

  .track {
    display: flex;
    animation: scroll 30s linear infinite;
    width: fit-content;
  }

  .slider:hover .track {
    animation-play-state: paused;
  }

  .card {
    min-width: 220px;
    height: 220px;
    margin: 0 10px;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    flex-shrink: 0;
    transition: transform 0.3s, filter 0.3s;
  }

  .card:hover {
    transform: scale(1.05);
    filter: grayscale(0%);
  }

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;

export default Card;
