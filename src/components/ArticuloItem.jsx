import React from "react";

export function ArticuloItem ({articulo, selectedProd}) {
    
    const { id, producto, selected } = articulo

    const completedClick = () => {
        selectedProd(id);
    }

    return(

        <li className="list-group-item col-3">
            <input type="checkbox" checked={selected} onChange={completedClick}/>
            {producto}
        </li>

    )

}