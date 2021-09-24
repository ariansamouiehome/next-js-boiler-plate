import React from 'react';

const EmailTemplate = (props) => {

    const {title, bodyCopy, href} = props;

    return (
        <tr bgcolor="#FFFFFF" style={{borderRadius:"5px", width: "100%", maxWidth: "600px"}}>
            <td align="center" className="dotsHoriz" style={{width: "100%", display: 'block'}}>
                <table cellSpacing="0" cellPadding="0" style={{width: "100%", maxWidth: "600px"}}>
                    <tr align="left" rowspan="3" valign="top" style={{width: "100%", maxWidth: "600px"}}>
                        <td  align="left" valign="top" bgcolor="#e6d9d2" style={{padding: "15px", borderRadius:"5px", width: "100%", maxWidth: "600px", margin: '0 auto', position: 'relative'}}>
                            <p><img
                                src="/images/logo-single.svg"
                                alt="image"
                                style={{width: "100%", maxWidth: "600px"}}/></p>
                            <h2 dangerouslySetInnerHTML={{__html: title}}/>
                            <p dangerouslySetInnerHTML={{__html: bodyCopy}}/>
                            <p><a href={href} style={{
                                display: 'block',
                                position: 'relative',
                                padding: '10px 35px',
                                borderRadius: '5px',
                                border: '1px solid #000',
                                background: '#d2a94e',
                                color: '#121212',
                                textDecoration: 'none',
                                transition: '0.5s',
                                overflow: 'hidden',
                                textAlign: 'center',
                                fontFamily: "Akaya Telivigala",
                                textTransform: 'uppercase',
                                minWidth: '130px',
                                minHeight: '46px',
                                textShadow: '1px 1px rgb(240 240 240 / 50%)',
                            }}>Find out more</a></p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    )
}

export default EmailTemplate;