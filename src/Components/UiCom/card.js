import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="image" />
        <div className="card-info">
          <span>George Johnson</span>
          <p>Support Specialist</p>
        </div>
        <a className="button" href="####">Folow</a>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    width: 350px;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 10px;
    background-color: #fffffe;
    border-radius: 15px;
    position: relative;
    overflow: hidden;
    transition: all 0.5s ease;
  }

  .card::before {
    content: "";
    width: 350px;
    height: 100px;
    position: absolute;
    top: 0;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    border-bottom: 3px solid #fefefe;
    background: linear-gradient(40deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
    transition: all 0.3s ease;
  }

  .card * {
    z-index: 1;
  }

  .image {
    width: 90px;
    height: 90px;
    background-color: #1468BF;
    border-radius: 50%;
    border: 4px solid #fefefe;
    margin-top: 30px;
    transition: all 0.5s ease;
  }

  .card-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    transition: all 0.5s ease;
  }

  .card-info span {
    font-weight: 600;
    font-size: 24px;
    color: #161A42;
    margin-top: 15px;
    line-height: 5px;
  }

  .card-info p {
    color: rgba(0, 0, 0, 0.5);
  }

  .button {
    text-decoration: none;
    background-color: #1468BF;
    color: white;
    padding: 5px 20px;
    border-radius: 5px;
    border: 1px solid white;
    transition: all 0.5s ease;
  }

  .card:hover {
    width: 300px;
    border-radius: 250px;
  }

  .card:hover::before {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    border-bottom: none;
    transform: scale(0.95);
  }

  .card:hover .card-info {
    transform: translate(0%,-15%);
  }

  .button:hover {
    background-color: #FF6844;
    transform: scale(1.1);
  }`;

export default Card;
