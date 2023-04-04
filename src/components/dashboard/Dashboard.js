import React, {Component} from "react";
import styles from './dashboard.module.css'
import FormField from "../widgets/form-fields/FormField";
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertFromRaw, convertToRaw} from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';

class Dashboard extends Component{
    state = {
        editorState: EditorState.createEmpty(),
        postError: '',
        loading:false,
        formdata:{
            author:{
                element:'input',
                value:'',
                config:{
                    name:'author_input',
                    type:'text',
                    placeholder:'Enter Your Author Name'
                },
                validation:{
                    required:true
                },
                valid:false,
                touched:false,
                validationMessage:''
            },
            title:{
                element:'input',
                value:'',
                config:{
                    name:'title_input',
                    type:'text',
                    placeholder:'Enter The Title'
                },
                validation:{
                    required:true
                },
                valid:false,
                touched:false,
                validationMessage:''
            },
            body:{
                element: 'texteditor',
                value:'',
                valid:true

            }
        }
    }

    updateForm = (el,content = '') => {
        const newFormdata = {
            ...this.state.formdata
        }
        const newElement = {
            ...newFormdata[el.id]
        }

        if(content === ''){
            newElement.value = el.event.target.value;
        }else{
            newElement.value = content;
            console.log(newElement)
        }
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
        if(el.validation.required){
            const valid = el.value.trim() !== "";
            const message = `${!valid ?  'This field is required': ''}`;
            error = !valid ? [valid,message] : error
        }
        return error;
    }

    submitForm = (event) => {
        event.preventDefault(); 

        let dataToSubmit = {};
        let formIsValid = true;

        for(let key in this.state.formdata){
            dataToSubmit[key] = this.state.formdata[key].value
        }
        for(let key in this.state.formdata){
            formIsValid = this.state.formdata[key].valid && formIsValid;
        }

        console.log(dataToSubmit)
        if(formIsValid){
            console.log('ok')
        }else{
            this.setState({
                postError: 'Something went wrong'
            })
        }
    }

    submitButton = () => (
        this.state.loading ? "loading..." : 
        <div>
            <button type="submit">Add Post</button>
        </div>
    )

    showError = () => (
        this.state.postError !== "" ? 
            <div className={styles.error}>{ this.state.postError }</div>
         : ''
    )

    onEditorStateChange = (editorState) => {
        let contentState = editorState.getCurrentContent();
        let rawState = convertToRaw(contentState)
        let html = stateToHTML(contentState);
        this.updateForm({id:'body'},html)
        this.setState({
            editorState
        })
    }

    render(){
        return(
            <div className={styles.postContainer}>
                <form onSubmit={this.submitForm}> 
                    <h2>Add Post</h2>
                    <FormField 
                        id={'author'}
                        formdata = {this.state.formdata.author}
                        change={(element)=> this.updateForm(element)}
                    />
                    <FormField 
                        id={'title'}
                        formdata = {this.state.formdata.title}
                        change={(element)=> this.updateForm(element)}
                    />
                    <Editor 
                        editorState={this.state.editorState}
                        wrapperClassName="my-editor-wrapper"
                        editorClassName="editor"
                        onEditorStateChange={this.onEditorStateChange}
                    />
                    { this.submitButton() }
                    { this.showError() }
                </form>
            </div>
        )
    }
}

export default Dashboard