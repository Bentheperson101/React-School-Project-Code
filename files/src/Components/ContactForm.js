export default function ContactForm() {
    const onSubmit = (e) => {
        
    };

    return(
        
        <form onSubmit={onSubmit}>
            <div className=" border1 rounded p-3 mt-2 mb-3">
                <div className="mb-3">
                    <label className="form-label">Name:</label>
                    <input
                    type="text"
                    className="form-control w-25"
                    name="name"
                    id="name"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email:</label>
                    <input
                    type="text"
                    className="form-control"
                    name="Email"
                    id="Email"
                    />
                </div>
            </div>
            <div className="mb-3">
                <button type="submit" className="btn rounded button1">
                    Submit
                </button>
            </div>
        </form>
    )
};
