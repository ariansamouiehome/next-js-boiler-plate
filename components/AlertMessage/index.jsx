import React from 'react';

const AlertMessage = (props) => {

    const {success, failed, message, successMessage, failedMessage} = props

    return (
        <div className={`alert-message ${failed ? 'failed' : ''}`}>
            <h3 className="alert-message-title heading-mark">
                {success && 'Success!'}
                {failed && 'Whoops, something went wrong.'}
            </h3>
            <p className="alert-message-body-copy">
                {message ||
                <>
                    {success && <> {successMessage || 'I have received your message and will get back to you as soon as possible.'}</>}
                    {failed && <> {failedMessage || 'Please try again.'}</>}
                </>}
            </p>
        </div>
    )
}

export default AlertMessage;