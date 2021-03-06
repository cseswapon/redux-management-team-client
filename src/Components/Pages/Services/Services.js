import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setServices } from "../../../action/index.action";
import ServicePart from "../../Section/Service/ServicePart";

const Services = () => {
  const dispatch = useDispatch();
  const services = useSelector((state) => state.services);
  useEffect(() => {
    fetch("https://react-redux-management.herokuapp.com/service")
      .then((res) => res.json())
      .then((data) => dispatch(setServices(data)));
  }, []);
  return (
    <section className="section-sp">
      <div className="container">
        <div className="row">
          {services.map((service) => (
            <ServicePart key={service._id} service={service}></ServicePart>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
