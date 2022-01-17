import React from "react";
import { ArticuloItem } from "./ArticuloItem";

export function ArticuloList ({articulos, selectedProd}) {
    return (

        <ul className="list-group m-4">
            {articulos.map((articulo) => (
                <ArticuloItem key={articulo.id} articulo={articulo} selectedProd={selectedProd} />
            ))}
        </ul>
    );
}