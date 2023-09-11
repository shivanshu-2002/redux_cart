import React, { useState } from 'react';
import './description.css';
const Description = (props) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const data = props.daa;

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    const renderText = () => {
        if (isExpanded) {
            return (
                <div>
                    {data}
                    <span onClick={toggleReadMore} className="read-less"> ...Read Less</span>
                </div>
            );
        } else {
            const truncatedText = data.substring(0, 200); // Display the first 200 characters
            return (
                <div>
                    {truncatedText}
                    {data.length > 200 && (
                        <span onClick={toggleReadMore} className="read-more"> ...Read More</span>
                    )}
                </div>
            );
        }
    };

    return (
        <div className='Des'>
            {renderText()}
        </div>
    )
}


export default Description;