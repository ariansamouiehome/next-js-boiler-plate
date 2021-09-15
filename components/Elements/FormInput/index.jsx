import React, {useState} from 'react';

const FormInput = (props) => {

    const {form, setForm, name, type, label, placeholder, errorActive} = props;

    console.log(form[name]);

    // States
    const [focus, setFocus] = useState(false);

    return (<div className={`form-group ${focus ? 'focus' : ''}`}>
        <label htmlFor={name} className="form-group-label">{label}</label>
        {type === 'textarea' ?
            <textarea
                id={name}
                className={`form-group-input textarea`}
                onChange={(e) => setForm({...form, [name]: e.target.value})}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                placeholder={placeholder}
            /> :
            <input
                type={type}
                id={name}
                className="form-group-input"
                onChange={(e) => setForm({...form, [name]: e.target.value})}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                placeholder={placeholder}
            />
        }
        {errorActive && form[name].length === 0 && <span className="form-group-error">Please fill out the {label} field</span>}
    </div>)
}

export default FormInput;