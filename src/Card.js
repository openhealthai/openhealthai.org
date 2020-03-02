import React from 'react';

const Card = props => (
  <div className="card flex flex-col w-full max-w-xl self-stretch text-left m-4 p-3 md:p-6">
    <h3 className="text-base md:text-xl lg:text-2xl font-bold mb-2 md:mb-4">{props.heading}</h3>
    <div className="text-sm md:text-lg lg:text-xl font-light">
      <a target="_blank" rel="noopener noreferrer" href={props.repo}>
        View GitHub Repo &rarr;
      </a>
    </div>
    {props.image && (
      <div className="image text-center m-3 sm:m-6 md:m-12">
        <img src={props.image} />
        <div>
          <a className="text-xs" target="_blank" rel="noopener noreferrer" href={props.imageSource}>
            Image Source
          </a>
        </div>
      </div>
    )}
    <div className="flex flex-auto"></div>

    {props.children}

    <style jsx>{`
      .card {
        background: white;
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.02) 0px 2.76726px 0.28924px -32px,
          rgba(0, 0, 0, 0.027) 0px 6.6501px 2.40675px -32px,
          rgba(0, 0, 0, 0.035) 0px 12.5216px 7.22195px -32px,
          rgba(0, 0, 0, 0.043) 0px 22.3363px 16.4245px -32px,
          rgba(0, 0, 0, 0.05) 0px 41.7776px 34.174px -32px, rgba(0, 0, 0, 0.07) 0px 100px 80px -32px;
      }

      .card .image img {
        height: auto;
        width: 100%;
        max-height: 200px;
        max-width: 400px;
        border-radius: 10px;
      }

      .card .image a {
        color: #aaaaaa;
      }

      .card .image a:hover {
        color: #cccccc;
      }
    `}</style>
  </div>
);

export default Card;
