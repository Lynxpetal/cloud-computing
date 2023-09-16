import React, { useState } from 'react';
import divisionList from '@/json/focsDivision.json';

const DivisionDropDownButton = ({ handler }) => {
    const [buttonText, setButtonText] = useState('All Division'); // Initial button text

    // Function to handle menu item click and update the button text
   

    return (
        <div className="dropdown">
            <button
                className="btn btn-secondary dropdown-toggle dropDownButton"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                <span className="dropDownText">{buttonText}</span> {/* Display the button text */}
            </button>
            <ul className="dropdown-menu dropDownItem" aria-labelledby="dropdownMenuButton">
                <li key="0">
                    <a
                        className="dropdown-item"
                        onClick={() => {
                            handler(0);
                            handleMenuItemClick('All Division');
                        }}
                    >
                        <span className="dropDownText">All Division</span>
                    </a>
                </li>

                {divisionList.map((each) => {
                    return (
                        <li key={each.id}>
                            <a
                                className="dropdown-item"
                                onClick={() => {
                                    handler(each.id);
                                    handleMenuItemClick(each.name, each.code);
                                }}
                            >
                                <span className="dropDownText">{each.name} [{each.code}]</span>
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default DivisionDropDownButton;
