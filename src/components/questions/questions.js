import React from 'react';
import Option from '../questions-option';
import './questions.scss';

const Questions = () => {
     
    return (
        <section className="questions">
            <div className="questions__wrapper">
                <div className="questions__inner">
                    <h2 className="questions__title">Frequently Asked Questions</h2>
                    <ul className="questions__list">
                        <Option name={"What is Netflix?"} descr={"Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"}/>
                        <Option name={"How much does Netflix cost?"} descr={"Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EUR7.99 to EUR11.99 a month. No extra costs, no contracts."}/>
                        <Option name={"Where can I watch?"} descr={"Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."}/>
                        <Option name={"How do I cancel?"} descr={"Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."}/>
                        <Option name={"What can I watch on Netflix?"} descr={"Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want. Join free for 30 days to see everything Netflix has to offer."}/>
                        <Option name={"How does the free trial work?"} descr={"Try us free for 30 days! If you enjoy your Netflix trial, do nothing and your membership will automatically continue for as long as you choose to remain a member. Cancel anytime before your trial ends and you won’t be charged. There’s no complicated contract, no cancellation fees, and no commitment. Cancel online anytime, 24 hours a day."}/>
                        <Option name={"Why am I seeing this language?"} descr={"Your browser preferences determine the language shown here."}/>
                    </ul>
                </div>
                <form className="story__form">
                    <h3 className="story__disclaimer">Ready to watch? Enter your email to create or restart your membership.</h3>
                    <div className="story__trial">
                        <input className="story__input" type="text" name="input" placeholder="Email address"/>
                        <button className="story__btn"><span className="story__btn-text">Try 30 Days Free</span><span className="story__btn-arrow"><i className="far fa-chevron-right"></i></span></button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Questions;