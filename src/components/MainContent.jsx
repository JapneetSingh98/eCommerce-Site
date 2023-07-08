import React, { useState } from "react";

export default function MainContent(props) {
    const [contentDetails, setContentDetails] = useState({
        title: "Customers",
        customerCount: 5,
    });
    
    function handleClick(event) {
        // const {name, value} = event.target;
        console.log("Refresh clicked");
        setContentDetails((prevState) => {
            return {
                ...prevState,
                "customerCount": contentDetails.customerCount + 1
            }
        });
    }

    return (
        <React.Fragment>
            <h4 className="m-1 p-1">
                {contentDetails.title}
                <span className="badge bg-secondary m-2">
                    {contentDetails.customerCount}
                </span>
                <button
                    className="btn btn-primary position-relative"
                    onClick={handleClick}
                >
                    Refresh
                </button>
            </h4>
        </React.Fragment>
    );
}
