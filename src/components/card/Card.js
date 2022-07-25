import React from "react";

export const Card = ({ titulo, imagen, descriocion, precio }) => {
  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      <div className="overflow">
        <img src={imagen} alt="a wallpaper" className="card-img-top" />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{titulo}</h4>
        <p className="card-text text-secondary">
          {descriocion
            ? descriocion
            : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia, voluptates obcaecati nam in voluptas perferendis velit harum dignissimos quasi ex? Tempore repellat quo doloribus magnam."}
        </p>
        <p className="card-text text-secondary">{precio} </p>
      </div>
    </div>
  );
};
