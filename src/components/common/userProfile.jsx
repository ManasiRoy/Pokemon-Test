import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function UserProfile({ match }) {
    useEffect(() => {
        fetchItem();
    });

    const [item, setItem] = useState({
        sprites: {}
    });
    const fetchItem = async () => {
        const fetchItem = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${match.params.id}`
        );
        const item = await fetchItem.json();
        setItem(item);
        // console.log(item)

    }
    return (
        <div className="row justify-content-center my-5 inner-Profile">
            <div className="col-md-8 border">
                <figure className="mb-3 text-center">
                    <img src={item.sprites.back_shiny} alt="" />
                </figure>
                <div className="row border-bottom">
                    <div className="col-md-4 p-2">
                        <h3>Name</h3>
                    </div>
                    <div className="col-md-8 p-2">
                        <h3>{item.name}</h3>
                    </div>
                </div>
                <div className="row border-bottom">
                    <div className="col-md-4 p-2">
                        <h3>Height</h3>
                    </div>
                    <div className="col-md-8 p-2">
                        <h3>{item.height}</h3>
                    </div>
                </div>
                <div className="row border-bottom">
                    <div className="col-md-4 p-2">
                        <h3>Weight</h3>
                    </div>
                    <div className="col-md-8 p-2">
                        <h3>{item.weight}</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <Link to="/" className="btn btn-primary btn-sm my-3 ">Back to Main Page </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
