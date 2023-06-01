import React, { useState } from "react";
import "./file.css";

const initialState = {
  enabled: false,
  lots: 1,
  positionType: "Buy",
  optionType: "call",
  expiryType: "weekly",
  selectStrikeCriteria: "strikeType",
  simpleMomentum: {
    type: "pointsUp",
    value: 0,
  },
  trailSL: {
    enabled: false,
    type: "points",
    value: {
      instrumentMove: 0,
      stopLossMove: 0,
    },
  },
};

const Form = () => {
  const [formState, setFormState] = useState(initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      [name]: value,
    }));
  };

  const handleSimpleMomentumChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      simpleMomentum: {
        ...prevState.simpleMomentum,
        [name]: value,
      },
    }));
  };

  const handleTrailSLChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      trailSL: {
        ...prevState.trailSL,
        value: {
          ...prevState.trailSL.value,
          [name]: value,
        },
      },
    }));
  };

  const handleFormSubmit = (e) => {
      e.preventDefault()   
  };


  const handleAddLeg = () => {
    setFormState((prevForms) => [...prevForms, initialState]);
  };

  // const handleDelete = () => {
  //   setFormState((prevForms) => {
  //     const updatedForms = [...prevForms];
  //     updatedForms.splice(index, 1);
  //     return updatedForms;
  //   });
  // };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div className="form">
          <label>
            Total lot:
            <input
              type="number"
              name="lots"
              value={formState.lots}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Position:
            <select
              name="positionType"
              value={formState.positionType}
              onChange={handleInputChange}
            >
              <option value="Buy">Buy</option>
              <option value="Sell">Sell</option>
            </select>
          </label>

          <label>
            Option Type:
            <select
              name="optionType"
              value={formState.optionType}
              onChange={handleInputChange}
            >
              <option value="call">Call</option>
              <option value="put">Put</option>
            </select>
          </label>

          <label>
            Expiry:
            <select
              name="expiryType"
              value={formState.expiryType}
              onChange={handleInputChange}
            >
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </label>

          <label>
            Select Strike Criteria:
            <select
              name="selectStrikeCriteria"
              value={formState.selectStrikeCriteria}
              onChange={handleInputChange}
            >
              <option value="strikeType">Strike Type</option>
              <option value="premiumRange">Premium Range</option>
            </select>
          </label>

          <div className="icon">
            <i class="fa-solid fa-copy "></i>
            <i  class="fa-solid fa-trash"></i>
          </div>
        </div>

        <div className="btn-btn">
          <button className="btn" onClick={handleAddLeg}>
            Add Leg
          </button>
          <button className="btn">Cancel</button>
        </div>

        {/* Displaying Simple Momentum */}
<div className="new-form">
        {formState.selectStrikeCriteria === "strikeType" && (
          <div>
            <label>
              Simple Momentum
              <div className="display">
              <select
                name="type"
                value={formState.simpleMomentum.type}
                onChange={handleSimpleMomentumChange}
              >
                <option value="pointsUp">Points Up</option>
                <option value="pointsDown">Points Down</option>
                </select>
                <input
                  type="number"
                  name="simpleMomentum"
                  value={formState.simpleMomentum.value}
                  onChange={handleSimpleMomentumChange}
                />
                </div>
            </label>
                
             
          </div>
        )}

        {/* Displaying Trail SL */}
        {formState.selectStrikeCriteria === "strikeType" &&  (
          <div>
            <label>
              Trail SL Type:
              <div className="display">
              <select
                name="type"
                value={formState.trailSL.type}
                onChange={handleTrailSLChange}
              >
                <option value="points">Points</option>
                <option value="percentage">Percentage</option>
              </select>
              <input
              type="number"
              name="instrumentMove"
              value={formState.trailSL.value.instrumentMove}
              onChange={handleTrailSLChange}
            />

            <input
              type="number"
              name="stopLossMove"
              value={formState.trailSL.value.stopLossMove}
              onChange={handleTrailSLChange}
            />
            </div>
            </label>

            
          </div>
        )}
        </div>

        {/* Final Submit */}
        <button className="final-btn" type="submit">Final Submit</button>
      </form>
    </div>
  );
};

export default Form;






