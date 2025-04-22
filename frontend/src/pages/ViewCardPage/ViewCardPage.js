import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAppContext } from "../../context/appContext";
import Labelinput from "./component/Labelinput";
import Wrapper from "./wrapper/ViewCardPage";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ViewCardPage = () => {
  const { token } = useAppContext();
  const navigate = useNavigate();

  const fetchCard = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/v1/job/card", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const resData = await res.json();
      const data = resData.card;

      if (data && data.holdername.length > 0) {
        setValue({
          cvv: data.cvc,
          holdername: data.holdername,
          edate: data.exp_year + "-" + data.exp_month + "-" + data.exp_day,
          cardnumber: data.number,
        });
      }
    } catch (error) {
      console.error("Error fetching card:", error);
      toast.error("Failed to fetch card data.");
    }
  };

  useEffect(() => {
    fetchCard();
  }, []);

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      number: value.cardnumber,
      cvc: value.cvv,
      exp_year: value.edate.split("-")[0],
      exp_month: value.edate.split("-")[1],
      exp_day: value.edate.split("-")[2],
      holdername: value.holdername,
    };

    axios
      .put("http://localhost:5000/api/v1/job/card", data, config)
      .then((res) => {
        toast.success("Card details submitted successfully!");

        setTimeout(() => {
          navigate("/user/feeds");
        }, 2000);
      })
      .catch((err) => {
        console.error("Error submitting card:", err);
        toast.error("Something went wrong while submitting.");
      });
  };

  const option = {
    cvv: "",
    holdername: "",
    edate: "",
    cardnumber: "",
  };
  const [value, setValue] = useState(option);

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const formatCardNumber = (e) => {
    if (isNaN(e.target.value.replaceAll(" ", ""))) return;

    const cardNumber = e.target.value.replace(/\s/g, "");
    const cardNumberWithSpaces =
      cardNumber.length < 16
        ? cardNumber.replace(/(.{4})/g, "$1 ")
        : cardNumber.replace(/(.{4})/g, "$1 ").trim();
    setValue({ ...value, [e.target.name]: cardNumberWithSpaces });
  };

  return (
    <Wrapper>
      <ToastContainer position="top-center" autoClose={1500} />
      <div className="card">
        <img
          src="https://w0.peakpx.com/wallpaper/272/237/HD-wallpaper-color-paint-red-black-background-background-black.jpg"
          alt="card bg"
          className="cardimg"
        />
        <p>{value.cardnumber || " XXXX-XXXX-XXXX-XXXX"}</p>
        <div className="holdername">
          <h6>Holder Name</h6>
          <p>{value.holdername}</p>
        </div>

        <div className="monthn">
          <h6>Exp Date</h6>
          <p>{value.edate}</p>
        </div>

        <img
          src="https://e7.pngegg.com/pngimages/865/547/png-clipart-rectangular-brown-and-black-sim-card-illustration-chip-pin-solutions-ltd-emv-payment-card-credit-card-chip-company-text.png"
          alt="chip"
          className="chip"
        />
      </div>

      <form>
        <Labelinput
          handleChange={formatCardNumber}
          value={value.cardnumber}
          name={"cardnumber"}
          label={"Card Number"}
          maxLength={19}
          placeholder={"Enter Your Card Number"}
        />
        <Labelinput
          handleChange={handleChange}
          value={value.holdername}
          name={"holdername"}
          label={"Holder Name"}
          placeholder={"Enter Your Holder Name"}
        />
        <div className="d-grid">
          <Labelinput
            handleChange={handleChange}
            value={value.edate}
            name={"edate"}
            label={"Expire Date"}
            type={"date"}
          />
          <Labelinput
            handleChange={handleChange}
            value={value.cvv}
            name={"cvv"}
            label={"CVV"}
            type={"text"}
            maxLength={3}
            placeholder={"CVV"}
          />
        </div>

        <button className="btn-submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </Wrapper>
  );
};

export default ViewCardPage;
