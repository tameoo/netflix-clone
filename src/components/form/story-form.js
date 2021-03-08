import React from 'react';

const StoryForm = () => {
    return(
        <>
            <h1 className="story__title">Unlimited movies, TV <br/> shows, and more.</h1>
            <h2 className="story__subtitle">Watch anywhere. Cancel anytime.</h2>
            <form className="story__form">
                <h3 className="story__disclaimer">Ready to watch? Enter your email to create or restart your membership.</h3>
                <div className="story__trial">
                    <input className="story__input" type="text" name="input" placeholder="Email address"/>
                    <button className="story__btn"><span className="story__btn-text">Try 30 Days Free</span><span className="story__btn-arrow"><i className="far fa-chevron-right"></i></span></button>
                </div>
            </form>
            <h3 className="story__disclaimer">Only new members are eligible for this offer.</h3>
        </>
    );
}

export default StoryForm;