import React, { useState, useEffect } from "react";

import { changeDateAction } from "../redux";
import { useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Calender = () => {
  const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch();

  useEffect(() => {
    const changeDate = (date) => dispatch(changeDateAction(date));
    changeDate(startDate);
  }, [dispatch, startDate]);

  const handleAddDate = () => {
    let date = new Date();
    date.setDate(startDate.getDate() + 1);
    if (date>new Date()) {
    } else {
      date.setDate(startDate.getDate() + 1);
      setStartDate(date);
    }
  };

  const handleMinusDate = () => {
    let date = new Date();
    date.setDate(startDate.getDate() - 1);
    setStartDate(date);
  };

  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={(date) =>
          date < new Date()
            ? setStartDate(date)
            : console.log("date is in the future")
        }
      />
      <button onClick={handleMinusDate}>Previous day</button>
      <button onClick={handleAddDate}>Next day</button>
    </div>
  );
};

export default Calender;
