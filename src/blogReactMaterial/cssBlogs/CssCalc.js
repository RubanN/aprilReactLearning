import React from "react";

const CssCalc = () => {
    const navbarHeight = '200px';
    const footerHeight = '100px';
    return (
        <div style={{ minHeight: `calc(100vh-${navbarHeight}-${footerHeight})` }}>
            <h2>Hello world</h2>
            <div style={{ width: 'calc(100% - 800px)' }}>
                <h2>Some content here</h2>
            </div>
        </div >
    )
};

export default CssCalc;
