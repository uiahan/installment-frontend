import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Table() {
  const [validations, setValidations] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    axios
      .get(`${import.meta.env.VITE_API_URL}/validation`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setValidations(res.data.validation || []))
      .catch((err) => {
        console.error("Error fetching validation data:", err);
        setValidations([]);
      });
  }, []);

  return (
    <>
      <div>
        <div className="mt-5 bg-base-300 p-4 flex justify-between rounded-lg">
          <h1 className="font-medium text-xl">My Data Validation</h1>
          <Link to="/request-validation" className="btn btn-primary rounded-lg">
            + Request Validation
          </Link>
        </div>

        {validations.length === 0 ? (
          <div className="mt-5 bg-base-300 p-4">
            <h1 className="font-medium text-xl">No validation data yet</h1>
          </div>
        ) : (
          <div className="grid grid-cols-3 mt-5 gap-5">
            {validations.map((val, index) => (
              <div key={val.id}>
                <div className="overflow-x-auto">
                  <table className="table bg-base-300">
                    {/* head */}
                    <thead>
                      <tr>
                        <th>{index + 1}. Data Validation</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* row 1 */}
                      <tr>
                        <th>Status</th>
                        <td>
                          <p
                            className={`badge ${
                              val.status === "accepted"
                                ? "badge-success"
                                : val.status === "rejected"
                                ? "badge-error"
                                : "badge-warning"
                            }`}
                          >
                            {val.status}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <th>Job</th>
                        <td>{val.job}</td>
                      </tr>
                      <tr>
                        <th>Income/month</th>
                        <td>{val.income}</td>
                      </tr>
                      <tr>
                        <th>Validator</th>
                        <td>{val.validator?.name || "-"}</td>
                      </tr>
                      <tr>
                        <th>Validator Notes</th>
                        <td>{val.validation?.notes || "-"}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-10">
        <div className="mt-10 bg-base-300 p-4 flex justify-between">
          <h1 className="font-medium text-xl">My Installment Cars</h1>
          <a href="" className="btn btn-primary rounded-lg">
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
                      <a href="" className="btn btn-primary rounded-lg">
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
