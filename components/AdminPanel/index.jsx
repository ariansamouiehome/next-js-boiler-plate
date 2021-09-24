import React, {useState} from 'react';
import {Col, Container, Row} from "reactstrap";
import FormInput from "components/Elements/FormInput";
import Button from "components/Elements/Button";
import axios from "axios";
import Link from "next/link";

const AdminPanel = () => {

    // States
    const [view, setView] = useState(1);
    const [showSureButton, setShowSureButton] = useState(false);
    const [success, setSuccess] = useState(false);
    const [contactList, setContactList] = useState([]);
    const [form, setForm] = useState({
        password: ''
    });
    const [mailingList, setMailingList] = useState({
        subject: '',
        title: '',
        bodyCopy: '',
        href: '',
    });

    console.log(mailingList);

    // Data
    const password = 'qwerty';

    // Functions
    const handleSubmit = () => {
        if (form.password === password) {
            setSuccess(true);
            getList();
        }
    }

    const sendMailingList = () => {
        axios.post('/api/mailingList', mailingList)
            .then(data => {
                console.log(data);
            })
            .catch(err => {
                // console.log(err);
            })
    };

    const getList = () => {
        axios.get('/api/getContactEntries')
            .then(data => {
                setContactList(data.data.data);
            })
    };

    return (
        <Container fluid className="admin-panel">
            <Row>
                {!success && <Col xs={12} className="admin-panel-login">
                    <form onSubmit={handleSubmit} className="admin-login">
                        <FormInput
                            form={form}
                            setForm={setForm}
                            name="password"
                            value="password"
                            type="password"
                            label="Password"
                            placeholder="***********"
                        />
                        <Button
                        >Submit</Button>
                    </form>
                </Col>}
                {success && <>

                <Col xs={12} className="admin-panel-nav">
                    <Link href="/">
                        <a className="admin-logo">
                            <img src="/images/logo-single.svg" alt="brand logo" className="admin-logo-image"/>
                        </a>
                    </Link>
                </Col>

                <Col xs={12} className="admin-panel-nav nav">
                    <Button onClick={() => (setView(1), getList())}>Website Contact</Button>
                    <Button onClick={() => setView(2)}>Mailing list</Button>

                </Col>

                {view === 1 && <Col xs={12} className="admin-panel-login">
                    <div className="admin-list">
                        {contactList.length > 0 && contactList.reverse().map((item, key) => <div className="each-email-list">
                            <div className="top-two">
                                <h3 className="each-name">{item.first_name} {item.last_name}</h3>
                                <span className="each-date">{item.date}</span>
                            </div>
                            <a href={`tel:${item.telephone}`} className="each-tel">{item.telephone}</a>
                            <a href={`mailto:${item.email}`} className="each-email">{item.email}</a>
                        </div>)}
                    </div>
                </Col>}

                {view === 2 && <Col xs={12} className="admin-panel-login">
                    <div className="mailing-list-form-wrapper">
                        <FormInput
                            form={mailingList}
                            setForm={setMailingList}
                            name="subject"
                            value="subject"
                            type="text"
                            label="Subject"
                            placeholder="Email subject"
                        />
                        <FormInput
                            form={mailingList}
                            setForm={setMailingList}
                            name="title"
                            value="title"
                            type="text"
                            label="Title"
                            placeholder="Email template title"
                        />
                        <FormInput
                            form={mailingList}
                            setForm={setMailingList}
                            name="bodyCopy"
                            value="bodyCopy"
                            type="textarea"
                            label="Copy"
                            placeholder="This has to be in html format in order to add (new lines - <p>)"
                        />
                        <FormInput
                            form={mailingList}
                            setForm={setMailingList}
                            name="href"
                            value="href"
                            type="text"
                            label="Link"
                            placeholder="Type in the location the cta will take thee user"
                        />

                        <Button onClick={() => setShowSureButton(!showSureButton)}>
                            {showSureButton ? 'go back' : 'Send Emails'}
                        </Button>
                        {showSureButton && <Button onClick={() => sendMailingList()} style={{marginTop: '30px'}}>confirm send emails?</Button>}
                    </div>
                </Col>}
                </>}
            </Row>
        </Container>
    )
}

export default AdminPanel;