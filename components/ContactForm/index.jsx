import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from "reactstrap";
import axios from "axios";
import FormInput from "components/Elements/FormInput";
import Button from "components/Elements/Button";
import Loader from "components/Elements/Loader";

const ContactForm = (props) => {

    // State
    const [checkError, setCheckError] = useState(false);
    const [errorActive, setErrorActive] = useState(false);
    const [failedToSend, setFailedToSend] = useState(false);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        first_name: '',
        last_name: '',
        telephone: '',
        email: '',
        message: ''
    });

    // Data
    const contactForm = [
        {
            form: form,
            setForm: setForm,
            name: 'first_name',
            type: 'text',
            label: 'First Name',
            placeholder: 'Adam',
            errorMessage: 'stop it'
        },
        {
            form: form,
            setForm: setForm,
            name: 'last_name',
            type: 'text',
            label: 'Last Name',
            placeholder: 'Smith'
        },
        {
            form: form,
            setForm: setForm,
            name: 'telephone',
            type: 'number',
            label: 'Telephone',
            placeholder: '***********'
        },
        {
            form: form,
            setForm: setForm,
            name: 'email',
            type: 'email',
            label: 'Email',
            placeholder: 'email@gmail.com'
        }
    ];

    // Function
    const handleSubmit = (e) => {
        e.preventDefault();
        setFailedToSend(false);
        setLoading(false);
        setErrorActive(false);

        if (checkError) {
            setLoading(true);
            // axios.post('/api/contactAAA', form)
            //     .then(data => {
            //         setLoading(false);
            //         console.log('success', data);
            //     })
            //     .catch(err => {
            //         setLoading(false);
            //         setFailedToSend(true);
            //     })
        } else {
            setErrorActive(true);

        }
    }

    useEffect(() => {
        if (form.first_name.length === 0 ||
            form.last_name.length === 0 ||
            form.email.length === 0 ||
            form.telephone.length === 0 ||
            form.message.length === 0) {
            setCheckError(false)
        } else {
            setCheckError(true);
        }
    }, [form]);

    console.log(checkError);

    return (
        <form onSubmit={(e) => handleSubmit(e)} className="contact-form-form">
            <Container className="contact-form" data-aos>
                <Row>
                    {contactForm.map((item, key) => <Col xs={12} sm={6} className="contact-form-each-input">
                        <FormInput
                            form={item.form}
                            setForm={item.setForm}
                            name={item.name}
                            type={item.type}
                            label={item.label}
                            placeholder={item.placeholder}
                            errorActive={errorActive}
                        />
                    </Col>)}
                    <Col xs={12} className="contact-form-each-input">
                        <FormInput
                            form={form}
                            setForm={setForm}
                            name="message"
                            type="textarea"
                            label="Message"
                            placeholder="Message"
                            errorActive={errorActive}
                        />
                    </Col>
                    <Col xs={12} className="contact-form-footer">
                        <Button
                            type="submit"
                            className={loading && `loading`}
                        >
                            {loading ? <Loader button/> : 'Submit'}
                        </Button>
                    </Col>
                    <Col xs={12} className="contact-form-footer">
                        {failedToSend && 'failed to send'}
                    </Col>
                </Row>
            </Container>
        </form>
    )
}

export default ContactForm;