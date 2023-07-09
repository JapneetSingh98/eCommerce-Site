import React, { useState } from "react";

export default function MainContent(props) {
    const [contentDetails, setContentDetails] = useState({
        title: "Customers",
        customerCount: 5,
        customers: [
            {
                key: 1,
                id: 1,
                name: "Scott",
                phone: "123-456",
                address: { city: "New York" },
            },
            {
                key: 2,
                id: 2,
                name: "Smith",
                phone: null,
                address: { city: "London" },
            },
            {
                key: 3,
                id: 3,
                name: "Kevin",
                phone: "123-456",
                address: { city: "San Francisco" },
            },
            {
                key: 4,
                id: 4,
                name: "Linda",
                phone: "123-456",
                address: { city: "Paris" },
            },
            {
                key: 5,
                id: 5,
                name: "Ben",
                phone: null,
                address: { city: "New York" },
            },
        ],
    });

    function handleClick(event) {
        // const {name, value} = event.target;
        console.log("Refresh clicked");
        setContentDetails((prevState) => {
            return {
                ...prevState,
                customerCount: contentDetails.customerCount + 1,
            };
        });
    }

    function getPhoneToRender(phone) {
        if (phone) {
            return phone;
        } else {
            return <div className="bg-warning p-2">No Phone</div>;
        }
    }

    function getCustomerRows() {
        return contentDetails.customers.map((customer, i) => {
            return (
                <React.Fragment key={customer.key}>
                    <tr>
                        <th scope="row">{customer.id}</th>
                        <td>{customer.name}</td>
                        <td>{getPhoneToRender(customer.phone)}</td>
                        <td>{customer.address.city}</td>
                    </tr>
                </React.Fragment>
            );
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

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">City</th>
                    </tr>
                </thead>
                <tbody>{getCustomerRows()}</tbody>
            </table>
        </React.Fragment>
    );
}
