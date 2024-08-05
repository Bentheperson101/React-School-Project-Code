import ContactForm from "../Components/ContactForm";

const Contact = () => {
    

    return (
        <div>
            <div className="row p-3">
                <div className="col-lg-12 pt-3 text-center">
                    <h1>Contact Us</h1>
                    <h5>Enter your information if you wish to react out to us (me)</h5>
                </div>
            </div>
            <hr></hr>
            <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-8">
                    <h2 className="mt-2 mb-3">Enter your information: </h2>
                    <ContactForm />
                </div>
                <div className="col-lg-2"></div>
            </div>
        </div>
    )
};

export default Contact;