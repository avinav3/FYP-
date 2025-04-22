import React, { useState } from "react";
import { Labelinput, SingleInput } from "../../component/formcomponents";
import Wrapper from "./wrapper/PaymentPage";
import { BsFillBackspaceFill } from "react-icons/bs";
import { FaCcStripe } from "react-icons/fa";

const PaymentPage = () => {
  const [price, setPrice] = useState(0);

  return (
    <Wrapper className="glassmorphism">
      <div className="left-content">
        <div className="info">
          <div className=" backoptions">
            <BsFillBackspaceFill className="icon" />
            <h4>John Doe</h4>
          </div>
          <hr />
        </div>

        <div className="img-container glassmorphism">
          <img
            src="https://scontent.fktm21-2.fna.fbcdn.net/v/t39.30808-6/488911790_1047746613925627_9222999614523079836_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=nyhFc2RIyNMQ7kNvwGrW04I&_nc_oc=AdnKF9GQUTZHK_m4Mi4aeatOlLV8YCjZdJwk4pf7pKYz2NL-44GWB_ux4XUqxHDjkH0YZzddAAfhuF3rj0tGISUg&_nc_zt=23&_nc_ht=scontent.fktm21-2.fna&_nc_gid=QcDbyEdncV4U9HiDiRPb4w&oh=00_AfHP-BaJMlrqVVizx9qnmObARFEv1onlhIiU3NQR6beTJA&oe=680ADDDE"
            alt=""
          />
        </div>
      </div>
      <div className="right-container">
        <form action="">
          <div className="info">
            <h5>Pay with Card</h5>
            <h1>RS {price}</h1>
          </div>
          <Labelinput label={"Email"} placeholder={"Enter you Email"} />
          <label htmlFor="">Card Number</label>
          <div className="payment-method">
            <input type="number" placeholder="XXXX-XXXX-XXXX-XXXX" />
            <FaCcStripe className="icon" />
          </div>
          <label htmlFor="">Expire Date</label>
          <div className="payment-method">
            <input type="number" placeholder="Expire Date" />
          </div>
          <Labelinput
            label={"Payment"}
            placeholder={"Enter Payment"}
            type={"number"}
            handleChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </form>

        <button>submit</button>
      </div>
    </Wrapper>
  );
};

export default PaymentPage;
