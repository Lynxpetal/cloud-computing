import React, { useState } from 'react';
import campusList from '@/json/campus.json'

const CampusDropDownButton = () => {
    const [buttonText, setButtonText] = useState('All Campuses'); // Initial button text

    // Function to handle menu item click and update the button text
    const handleMenuItemClick = (newText) => {
        setButtonText(newText);
    };


    return (
        <div className="dropdown">
            <button
                className="btn btn-secondary dropdown-toggle dropDownButton"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                <span className='dropDownText'>{buttonText}</span> {/* Display the button text */}
            </button>
            <ul className="dropdown-menu dropDownItem" aria-labelledby="dropdownMenuButton">
                <li key="0">
                    <a
                        className="dropdown-item"
                        //href="#"
                        onClick={() => handleMenuItemClick("All Campuses")} // Use each.name directly
                    >
                        <span className='dropDownText'>All Campuses</span>
                    </a>
                </li>

                {campusList.map((each) => {
                    return (
                        <li key={each.id}>
                            <a
                                className="dropdown-item"
                                //href="#"
                                onClick={() => handleMenuItemClick(each.name)} // Use each.name directly
                            >
                                <span className='dropDownText'>{each.name}</span>
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default CampusDropDownButton;