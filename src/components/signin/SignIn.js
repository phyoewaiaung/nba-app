import React, {Component} from "react";
import styles from './sign-in.module.css';
import FormField from "../widgets/form-fields/FormField";
import {firebase} from '../../firebase'

class SignIn extends Component{
    state = {
        registerError: '',
        loading:false,
        formdata:{
            email:{
                element:'input',
                value:'',
                config:{
                    name:'email_input',
                    type:'email',
                    placeholder:'Enter Your Email'
                },
                validation:{
                    required:true,
                    email:true
                },
                valid:false,
                touched:false,
                validationMessage:''
            },
            password:{
                element:'input',
                value:'',
                config:{
                    name:'password_input',
                    type:'password',
                    placeholder:'Enter Your Password'
                },
                validation:{
                    required:true,
                    password:true
                },
                valid:false,
                touched:false,
                validationMessage:''
            }
        }
    }

    updateForm = (el) => {
        const newFormdata = {
            ...this.state.formdata
        }
        const newElement = {
            ...newFormdata[el.id]
        }
        newElement.value = el.event.target.value;
        if(el.blur){
            let validData = this.validate(newElement);
            newElement.valid = validData[0];
            newElement.validationMessage = validData[1];
        }

        newElement.touched = el.blur;

        newFormdata[el.id] = newElement;
        this.setState({
            formdata:newFormdata
        })
    }

    validate = (el) => {
        let error = [true, ''];

        if(el.validation.email){
            const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(el.value);
            const message = `${!valid ?  'Must be a valid email': ''}`;
            error = !valid ? [valid,message] : error
        }

        if(el.validation.password){
            const valid = el.value.length >= 5;
            const message = `${!valid ?  'Must be greater than 5': ''}`;
            error = !valid ? [valid,message] : error
        }

        if(el.validation.required){
            const valid = el.value.trim() !== "";
            const message = `${!valid ?  'This field is required': ''}`;
            error = !valid ? [valid,message] : error
        }
        return error;
    }
    submitForm = (event,type) => {
        event.preventDefault(); 
        if(type !== null){

            let dataToSubmit = {};
            let formIsValid = true;

            for(let key in this.state.formdata){
                dataToSubmit[key] = this.state.formdata[key].value
            }
            for(let key in this.state.formdata){
                formIsValid = this.state.formdata[key].valid && formIsValid;
            }

            if(formIsValid){
                 this.setState({
                    loading:true,
                    registerError : ""
                 })
            
                 if(type){
                    firebase.auth()
                    .signInWithEmailAndPassword(dataToSubmit.email,dataToSubmit.password)
                    .then(()=> {
                        this.props.history.push('/')
                    }).catch((e)=> {
                        this.setState({
                            loading:false,
                            registerError : e.message
                         })
                    })
                 }else{
                    firebase.auth().
                    createUserWithEmailAndPassword(
                        dataToSubmit.email,dataToSubmit.password
                    )
                    .then(()=> {
                        this.props.history.push('/')
                    }).catch((e)=> {
                        this.setState({
                            loading:false,
                            registerError : e.message
                         })
                    })
                 }
            }
        }
    }

    submitButton = () => (
        this.state.loading ? "loading..." : 
        <div>
            <button onClick={(event)=> {this.submitForm(event,false)}}>Register</button>
            <button onClick={(event)=> {this.submitForm(event,true)}}>Log In</button>
        </div>
    )

    showError = () => (
        this.state.registerError !== "" ? 
            <div className={styles.error}>{ this.state.registerError }</div>
         : ''
    )

    render() {
        return(
            <div className={styles.logContainer}>
                <form onSubmit={(event) => this.submitForm(event,null)}>
                    <h2>Register / Log in</h2>
                    <FormField 
                        id={'email'}
                        formdata = {this.state.formdata.email}
                        change={(element)=> this.updateForm(element)}
                    />
                    <FormField 
                        id={'password'}
                        formdata = {this.state.formdata.password}
                        change={(element)=> this.updateForm(element)}
                    />

                    { this.submitButton() }
                    { this.showError() }
                </form>
            </div>
        )
    }
}

export default SignIn;