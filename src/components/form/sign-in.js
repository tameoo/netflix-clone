import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { signIn } from '../../service/serviceAuth';
import { setUser } from '../../redux/actions';
import { connect } from 'react-redux';
import Spinner from '../spinner';


class SignInForm extends Component {

    state = {
        email: null,
        password: null,
        isEmailValid: true,
        isPasswordValid: true,
        isPasswordShown: false,
        token: true,
        loading: false
    }

    checkEmail = (input) => {
        if( input.length < 6 ) {
            this.setState({
                isEmailValid: false
            })
        } else {
            this.setState({
                isEmailValid: true
            })
        }
    }
   
    checkPassword = (input) => {
        if( input.length < 6) {
            this.setState({
                isPasswordValid: false
            })
        } else { 
            this.setState({
                isPasswordValid: true
            })
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { isEmailValid, isPasswordValid } = this.state;
        const { email, password } = e.target.elements;  

        this.checkEmail(email.value)
        this.checkPassword(password.value)

        if(isEmailValid && isPasswordValid && email.value.length > 0) {

            this.setState({
                loading: true
            });

            signIn( 
                {
                    email: email.value,
                    password: password.value
                }
            ).then(data => {
                this.props.setUser(data?.idToken);
                this.setState({
                    token: data ? data.idToken : null,
                    loading: false
                })
            }
            );
        }
    }

    render(){

        const { isEmailValid, isPasswordValid, isPasswordShown, token, loading } = this.state;

        if(typeof token === "string"){
            this.props.history.push("/movies");
        } 

        return(
            <form className="auth-form__form" onSubmit={ (e) => this.onSubmit(e) }>
                <div className="auth-form__wrapper">
                    <h2 className="auth-form__header">Sign In</h2>
                    <div className="auth-form__control-wrapper">
                        <input className={ isEmailValid ? "auth-form__input" : "auth-form__input auth-form__input_active" }
                                name="email" 
                                type="email" 
                                placeholder="Email"
                                onChange={ (e) => this.setState({email: e.target.value}) } 
                                onBlur={ (e) => this.checkEmail(e.target.value)}
                                />
                        <span className={ isEmailValid ? "auth-form__validate-text" : "auth-form__validate-text auth-form__validate-text_active" }>Please enter a valid email</span>
                    </div>
                    <div className="auth-form__control-wrapper">
                        <div className="auth-form__control-input">
                            <input className={ isPasswordValid ? "auth-form__input" : "auth-form__input auth-form__input_active" } 
                                    name="password"
                                    type={ isPasswordShown ? 'text' : 'password'} 
                                    placeholder="Password"
                                    maxLength="30"
                                    onChange={ (e) => this.setState({ password: e.target.value }) } 
                                    onBlur={ (e) => this.checkPassword(e.target.value) }
                                    />
                            <span className="auth-form__show-btn"
                                  onClick={() => this.setState({isPasswordShown: !isPasswordShown})}>
                                  { isPasswordShown ? 'hide' : 'show' }
                            </span>
                        </div>
                        <span className={ isPasswordValid ? "auth-form__validate-text" : "auth-form__validate-text auth-form__validate-text_active" }>Your password must contain between 6 and 30 characters.</span>
                    </div>
                    <div className="auth-form__control-wrapper">
                        { loading ? <Spinner /> : <button className="auth-form__btn" type="submit">Sign In</button> }
                        <span className={ token ? "auth-form__validate-all" : "auth-form__validate-all auth-form__validate-all_active"}>Invalid password or email address.</span>
                    </div>
                    <div className="auth-form__control-wrapper">
                        <span>New to Netflix ?</span> 
                        <Link to="/auth/sign-up">Sign up now</Link>
                    </div>
                </div>
            </form>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return{
        setUser: (user) => dispatch(setUser(user))
    }
}

export default withRouter(connect(null,mapDispatchToProps)(SignInForm));
