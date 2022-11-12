import React from "react";

const Characters = ({ characters }) => {
    return (
        <div className="row">
            {
                characters.map((item, index) => (
                <div key={index} className="col mb-4">
                    <div className="card" style={{minWidth: "100px"}}>
                        <img src={item.image} />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <hr />
                            <p>Location: {item.location.name}</p>
                            <p>Species: {item.species}</p>
                        </div>

                    </div>
                </div>
                ))}
        </div>
    );
}

export default Characters