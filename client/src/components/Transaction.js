import React from "react";

const Transaction = () => {
  return (
    <>
      <div class="container-fluid">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">From</th>
              <th scope="col">Transcation Type</th>
              <th scope="col">To</th>
              <th scope="col">Amount</th>
              <th scope="col">Date&Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>35210051625</td>
              <td>Credit</td>
              <td>Manav</td>
              <td>1000000</td>
              <td>1 PM</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Transaction;
