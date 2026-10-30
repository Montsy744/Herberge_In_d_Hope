const ContactInfo = ({ title, info }) => {

    const ContactInfoStyle= `
    .contact-info-container{
        border: solid 1px var(--primary);
        border-radius: 10px;
        text-align: center;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    .contact-info-title {
        font-size: 2rem;
        color: var(--primary)
    }

    .contact-info-desc {
        font-size: 1.5rem;
        color: var(--tertiary)
    }
    `

    return(
        <>
            <style>{ ContactInfoStyle }</style>

            <div className="contact-info-container noisyNonAbs">
                <h2 className="tangerine contact-info-title">{ title }</h2>
                <p className="bricoFont contact-info-desc">{ info }</p>
            </div>
        </>
    )
}

export default ContactInfo;