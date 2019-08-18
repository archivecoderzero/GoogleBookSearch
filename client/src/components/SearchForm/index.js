import React from "react";
import "./style.css";

const pStyle = {
    fontSize: '40px',
  };

const SearchForm = props => {
    return (
        <form>
            <div className="form-group">
                <label className="BookSearchLabel"><p style={pStyle} >Search Book Title : </p></label>
                <br></br>
                <input className="col-9 form-control"
                    value={props.search}
                    type="text"
                    name="searchBook"
                    placeholder="Book Title"
                    onChange={props.handleInputChange}
                />
            </div>
            <button type="submit" className="submitBtn btn btn-light" onClick={props.handleFormSubmit}>
                Submit
            </button>
        </form>
    )
}



export default SearchForm