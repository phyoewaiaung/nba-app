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
            case('select'):
                    formTemplate = (
                        <div>
                            <select
                                value={formdata.value}
                                name={formdata.config.name}
                                onBlur={(event)=>change({event,id,blur:true})}
                                onChange={(event)=>change({event,id,blur:false})}
                            >
                                { formdata.config.options.map((item,i)=> (
                                    <option key={i} value={item.id}>{item.name}</option>
                                ))}
                            </select>
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