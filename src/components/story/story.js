import React from 'react';

import './story.scss';

const Story = ({header, form}) => {
    return (
        <section className="story">
            <div className="story__wrapper">
                <div className="story__header">
                    { header }
                </div>
                <div className="story__inner">
                    <div className="story__inner-wrapper">
                        { form }
                    </div>
                </div>
            </div>
        </section>
    );
}



export default Story;