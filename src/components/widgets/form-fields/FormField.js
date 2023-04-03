import React from 'react'
import styles from './form-field.module.css'

const FormField = ({formdata,change,id}) => {

    const renderTemplate = () => {
        let formTemplate = null;

    
    const showError = () => {
        let errorMessage = null;

        if(formdata.validation && !formdata.valid){
            errorMessage = (
                <div className={styles.labelError}>
                    {formdata.validationMessage}
                </div>
            )
        }
        return errorMessage;
    }    
        switch(formdata.element){
            case('input'):
                formTemplate = (
                    <div>
                        <input 
                            {...formdata.config}
                            value={formdata.value}
                            onBlur={(event)=>change({event,id,blur:true})}
                            onChange={(event)=>change({event,id,blur:false})}
                        />
                        {showError()}
                    </div>
                )
                break;
            default:
                formTemplate = null;
        }
        return formTemplate
    }

  return (
    <div>
        {renderTemplate()}
    </div>
  )
}

export default FormField