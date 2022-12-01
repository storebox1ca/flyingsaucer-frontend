import React from "react";

import Header, { Footer } from "../partials/Theme";

const NotFound = () => {
    return (
        <div>

            <Header />
            {/* Not found section */}
            <div className="MinDiv d-flex justify-content-center align-items-center">
                <div className="d-block">
                    <h3>404</h3>
                    <h6>Page not found.</h6>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default NotFound;