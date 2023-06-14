import { useEffect, useState } from 'react';

const All = () => {
    const [list, setList] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/data')
            .then(response => response.json())
            .then(setList);
    }, []);


    return (
        <>
            <div className="container-fluid">

                {list.map(card => {
                    return (
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <div className="card h-100 w-100 text-start">
                                    <div className="card-body">
                                        <h5 className="card-title">{card.name}</h5> <p className="topright">{card.card_type}</p>
                                        <p className="card-text">
                                            <p>{card.budget_name}</p>
                                            <p>Spent: {card.spent.value} {card.spent.currency}</p>
                                            <p>Available: {card.available_to_spend.value} {card.available_to_spend.currency}</p>
                                            {card.card_type === "burner" ?
                                                <p>Expiry: {card.expiry}</p> :
                                                <p>Limit: {card.limit}</p>}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}

            </div>
        </>
    );
}

export default All;