import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

const CreateAppointment = () => {
  return (
    <>
      <div className="container-fluid py-4">
        <div className="row mb-5">
          <div className="main-panel">
            <div className="content-wrapper">
              <div className="row">
                <div className="col-md-6 grid-margin">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title mb-4">Book Appointment</h4>
                      <p className="card-description"></p>
                      <form className="forms-sample">
                        <div className="form-group">
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control-md"
                              oninput="search_patient(this.value)"
                              placeholder="Hospital ID *"
                              aria-label="Search for patient"
                            />
                            <div className="input-group-append">
                              <button className="btn btn-primary" type="button">
                                Search
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12" id="patient_list"></div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <div className="form-group"></div>
                      <form class="forms-sample">
                        <input type="hidden" name="addnew" />
                        <input type="hidden" name="patient_id" />
                        <input type="hidden" name="qty" value="1" />

                        <div className="col-sm-15 mb-4">
                          <label>Appointment Type</label>
                          <select
                            className="form-control"
                            name="service_id"
                            required
                          >
                            <option disabled>--- Select Appointment ---</option>
                          </select>
                        </div>

                        <div className="col-sm-15 mb-4">
                          <h5>Consultation Type</h5>
                          <select
                            className="form-control"
                            name="consultation_type"
                          >
                            <option>Initial Consultation</option>
                            <option>Follow Up Consultation</option>
                            <option>New Patient Consulation</option>
                            <option>Old Patient Consultation</option>
                            <option>Emergency</option>
                          </select>
                        </div>

                        <div className="col-sm-15 mb-3">
                          <label htmlFor="InputAppointmentCost">
                            <h5>Appointment Date</h5>
                          </label>
                          <input
                            type="date"
                            className="form-control"
                            id="cost"
                            name="appointment_date"
                            required
                          />
                        </div>
                        <div class="col-sm-15 mb-3">
                          <label htmlFor="InputAppointmentCost">
                            <h5>Appointment Time</h5>
                          </label>
                          <input
                            type="time"
                            className="form-control"
                            id="cost"
                            name="ap_time"
                            required
                          />
                        </div>

                        <button type="submit" className="btn btn-primary">
                          Book Appointment
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateAppointment;
