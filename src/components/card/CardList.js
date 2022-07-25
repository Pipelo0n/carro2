import React from "react";
import { PRODUCTS } from "../../db/products";
import { Card } from "./Card";

export const CardList = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {PRODUCTS.map(({ titulo, imagen, descripcion, precio, id }) => (
          <div className="col-md-4" key={id}>
            <Card
              titulo={titulo}
              imagen={imagen}
              descripcion={descripcion}
              precio={precio}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
