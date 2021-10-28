import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../css/createuser.css";

const Createuser = () => {
  return (
    <>
      <div className="container" id="parent">
        <div className="parent">
          <div className="row justify-content-md-center">
            <div className="col-5" id="child">
              <h2 id="CreateUser">Customer Details</h2>
              <form>
                <div className="form-group row">
                  <label for="name" className="col-sm-2 col-form-label">
                    Name
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="Full Name"
                      value=""
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label for="balance" class="col-sm-2 col-form-label">
                    Balance
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      id="balance"
                      placeholder="Balance"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    for="AccountNumber"
                    className="col-sm-2 col-form-label"
                  >
                    Account Number
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      id="AccountNumber"
                      placeholder="10 Digit Account Number"
                    />
                  </div>
                </div>
                <div className="row" id="submitbtn">
                  <button type="submit" className="btn btn-primary my-1">
                    Create User
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Createuser;
