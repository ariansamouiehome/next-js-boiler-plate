import React, {useState} from 'react';

const FormInput = (props) => {

    const {form, setForm, name, type, label, placeholder, errorActive, loading, value} = props;

    // States
    const [focus, setFocus] = useState(false);

    const checkboxOnchangeCondition = (e) => {
        if (type === 'checkbox') {
            setForm({...form, [name]: e.target.checked});
        } else {
            setForm({...form, [name]: e.target.value});
        }
    }

    return (<div className={`form-group ${focus ? 'focus' : ''} ${type === 'checkbox' ? 'checkbox' : '' }`}>
        <label htmlFor={name} className="form-group-label">{label}</label>
        {type === 'textarea' ?
            <textarea
                id={name}
                className={`form-group-input textarea ${loading ? 'loading' : ''}`}
                onChange={(e) => setForm({...form, [name]: e.target.value})}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                placeholder={placeholder}
                value={form[value]}
            /> :
            <input
                type={type}
                id={name}
                className={`form-group-input ${loading ? 'loading' : ''}`}
                onChange={(e) => checkboxOnchangeCondition(e)}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                placeholder={placeholder}
                value={form[value]}
                checked={type === 'checkbox' && form[value]}
            />
        }
        {type === 'checkbox' && <label htmlFor={name} className="form-group-checkbox-label" />}
        {errorActive && form[name].length === 0 && <span className="form-group-error">Please fill out the {label} field</span>}
    </div>)
}

export default FormInput;