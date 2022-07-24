import React from "react";
import "./style.css"
const InsertStyle = () => {
    const styles = `
    .my-h2 {
      padding: 25px;
      background-color: salmon;
      color: white;
    }
  `;
    return (
        <div>
            <h2 className="my-h2">Hello world</h2>
            <style>{styles}</style>
            <style>{`
        .my-h2 {
          padding: 25px;
          background-color: salmon;
          color: white;
        }
    `}</style>
            <h2 className="my-h2">Hello world</h2>
        </div>
    )
};

export default InsertStyle;
