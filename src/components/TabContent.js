import React, { Component } from "react"

const data = [
    {
       "name":"Mixmax",
       "budget_name":"Software subscription",
       "owner_id":1,
       "spent":{
          "value":100,
          "currency":"SGD"
       },
       "available_to_spend":{
          "value":1000,
          "currency":"SGD"
       },
       "card_type":"burner",
       "expiry":"9 feb",
       "limit":100,
       "status":"active"
    },
    {
       "name":"Quickbooks’",
       "budget_name":"Software subscription",
       "owner_id":2,
       "spent":{
          "value":50,
          "currency":"SGD"
       },
       "available_to_spend":{
          "value":250,
          "currency":"SGD"
       },
       "card_type":"subscription",
       "limit":10,
       "status":"active"
    }
 ]

class TabContent extends Component {

    render() {
        return (
            <div className="container-fluid">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {data.map((card) => {
                        return (
                            <div className="col">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <h5 className="card-title">{card.name}</h5> <p style={{"font-size": "15px"}}>{card.card_type}</p>
                                        <p className="card-text">
                                            {card.card_type === "burner"?
                                            <p>Expiry: {card.expiry}</p>:
                                            <p>Limit: {card.limit}</p>}
                                        </p>
                                    </div>
                                    
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default TabContent;