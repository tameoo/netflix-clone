import React, { useState } from 'react';
import './option.scss';

const Option = ({name,descr}) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <li className="options__item">
            <div className="options__item-header"
                onClick={ () => setOpen(!isOpen) }>
                <div className="options__name">{ name }</div>
                { isOpen ?  <i className="fas fa-times"></i> :  <i className="fas fa-plus"></i> }
            </div>
            <div className={isOpen ? "options__item-subheader" : "options__item-subheader options__item-subheader_closed"}>
                <p className="options__descr">
                    { descr }
                </p>
            </div>
        </li>
    );
}

export default Option;