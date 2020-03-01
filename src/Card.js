import React from 'react';

const Card = props => (
  <div className="card">
    <h3>{props.heading}</h3>
    <div className="repo">
      <a target="_blank" rel="noopener noreferrer" href={props.repo}>
        View GitHub Repo &rarr;
      </a>
    </div>
    {props.image && (
      <div className="image">
        <img src={props.image} />
        <div>
          <a target="_blank" rel="noopener noreferrer" href={props.imageSource}>
            Image Source
          </a>
        </div>
      </div>
    )}

    {props.children}

    <style jsx>{`
      .card {
        align-self: stretch;
        background: white;
        margin: 1rem;
        flex-basis: 45%;
        padding: 1.5rem;
        text-align: left;
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.02) 0px 2.76726px 0.28924px -32px,
          rgba(0, 0, 0, 0.027) 0px 6.6501px 2.40675px -32px,
          rgba(0, 0, 0, 0.035) 0px 12.5216px 7.22195px -32px,
          rgba(0, 0, 0, 0.043) 0px 22.3363px 16.4245px -32px,
          rgba(0, 0, 0, 0.05) 0px 41.7776px 34.174px -32px, rgba(0, 0, 0, 0.07) 0px 100px 80px -32px;
      }

      .card h3 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
      }

      .card .repo a {
        font-size: 1.2rem;
      }

      .card .image {
        margin: 2rem;
        text-align: center;
      }

      .card .image img {
        max-height: 200px;
        max-width: 400px;
        border-radius: 10px;
      }

      .card .image a {
        color: #aaaaaa;
        font-size: 0.8rem;
      }

      .card .image a:hover {
        color: #cccccc;
      }

      .card p {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.5;
      }
    `}</style>
  </div>
);

export default Card;
