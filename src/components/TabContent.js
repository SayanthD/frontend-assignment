import React, { Component } from "react"

class TabContent extends Component {

    render() {
        return (
            <div className="container-fluid">
                <div className="row row-cols-6 row-cols-md-2 g-2">
                    <div className="row">
                        <div className="card h-100" style={{"border": "1px solid black",}}>
                            <div className="card-body">
                                <h5 className="card-title">Burner</h5>
                                <p className="card-text">
                                    
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="card h-100" style={{"border": "1px solid black",}}>
                            <div className="card-body">
                                <h5 className="card-title">Subscription</h5>
                                <p className="card-text">
                                    
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TabContent;