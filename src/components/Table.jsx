import React from "react";

export default function Table() {
  return (
    <>
      <div>
        <div className="mt-10 bg-base-300 p-4">
          <h1 className="font-medium text-xl">My Data Validation</h1>
        </div>
        <div className="grid grid-cols-3 gap-7 mt-7">
          <div>
            <div className="overflow-x-auto">
              <table className="table bg-base-300">
                {/* head */}
                <thead>
                  <tr>
                    <th>Data Validation</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <th>
                      <a href="" className="btn btn-warning">
                        + Request Validation
                      </a>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div className="overflow-x-auto">
              <table className="table bg-base-300">
                {/* head */}
                <thead>
                  <tr>
                    <th>Data Validation</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <th>Status</th>
                    <td>
                      <p className="badge badge-error">Pending</p>
                    </td>
                  </tr>
                  <tr>
                    <th>Job</th>
                    <td>-</td>
                  </tr>
                  <tr>
                    <th>Income/month</th>
                    <td>Rp300.000</td>
                  </tr>
                  <tr>
                    <th>Validator</th>
                    <td>-</td>
                  </tr>
                  <tr>
                    <th>Validator Notes</th>
                    <td>-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div className="overflow-x-auto">
              <table className="table bg-base-300">
                {/* head */}
                <thead>
                  <tr>
                    <th>Data Validation</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <th>Status</th>
                    <td>
                      <p className="badge badge-error">Accepted</p>
                    </td>
                  </tr>
                  <tr>
                    <th>Job</th>
                    <td>Programmer</td>
                  </tr>
                  <tr>
                    <th>Income/month</th>
                    <td>Rp3.000.000</td>
                  </tr>
                  <tr>
                    <th>Validator</th>
                    <td>Usman M.Ti</td>
                  </tr>
                  <tr>
                    <th>Validator Notes</th>
                    <td>siap kerja</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="mt-10 bg-base-300 p-4 flex justify-between">
          <h1 className="font-medium text-xl">My Installment Cars</h1>
          <a href="" className="btn btn-warning">
            + Add Installment Cars
          </a>
        </div>
        <div className="grid grid-cols-3 gap-7 mt-7">
          <div>
            <div className="overflow-x-auto">
              <table className="table bg-base-300">
                {/* head */}
                <thead>
                  <tr>
                    <th>Data Validation</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <th>
                      <a href="" className="btn btn-warning">
                        + Request Validation
                      </a>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div className="overflow-x-auto">
              <table className="table bg-base-300">
                {/* head */}
                <thead>
                  <tr>
                    <th>Data Validation</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <th>Status</th>
                    <td>
                      <p className="badge badge-error">Pending</p>
                    </td>
                  </tr>
                  <tr>
                    <th>Job</th>
                    <td>-</td>
                  </tr>
                  <tr>
                    <th>Income/month</th>
                    <td>Rp300.000</td>
                  </tr>
                  <tr>
                    <th>Validator</th>
                    <td>-</td>
                  </tr>
                  <tr>
                    <th>Validator Notes</th>
                    <td>-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div className="overflow-x-auto">
              <table className="table bg-base-300">
                {/* head */}
                <thead>
                  <tr>
                    <th>Data Validation</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <th>Status</th>
                    <td>
                      <p className="badge badge-error">Accepted</p>
                    </td>
                  </tr>
                  <tr>
                    <th>Job</th>
                    <td>Programmer</td>
                  </tr>
                  <tr>
                    <th>Income/month</th>
                    <td>Rp3.000.000</td>
                  </tr>
                  <tr>
                    <th>Validator</th>
                    <td>Usman M.Ti</td>
                  </tr>
                  <tr>
                    <th>Validator Notes</th>
                    <td>siap kerja</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
