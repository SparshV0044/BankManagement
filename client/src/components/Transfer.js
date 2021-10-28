import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../css/transfer.css";
import JSONDATA from "../data/data.json";
import { useState } from "react";

const Transfer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div className="container-fluid" id="SearchBarCont">
        <input
          type="text"
          placeholder="Search users"
          id="SearchBar"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        ></input>
      </div>
      <div class="container">
        {/* Table body starts */}
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Account No</th>
              <th scope="col">Balance</th>
              <th scope="col">Transfer Button</th>
            </tr>
          </thead>
          <tbody>
            {JSONDATA.filter((val) => {
              if (searchTerm == "") {
                return val;
              } else if (
                val.Name.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            }).map((val, key) => {
              return (
                <tr>
                  <th scope="row">{key}</th>
                  <td>{val.Name}</td>
                  <td>{val.AccountNumber}</td>
                  <td>{val.Balance}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#myModal"
                    >
                      Transfer Now
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* Modal class starts */}

        {/* Modal Credit */}
        <div className="modal" id="myModal">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Transcation</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div class="form-check" id="check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />

                    <label
                      class="form-check-label"
                      for="flexCheckDefault"
                      id="radio"
                    >
                      Self
                    </label>
                  </div>

                  <div class="col-auto">
                    <label for="inputPassword2">To:</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputPassword2"
                      placeholder="Account Number"
                    />
                  </div>

                  <div class="col-auto" id="amount">
                    <label for="amount">Amount:</label>
                    <input type="amount" class="form-control" id="amount" />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-success">
                  Transfer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transfer;
