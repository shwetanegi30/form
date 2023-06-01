import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();











// <div>
//       <div className="container">
//         <div className="form">
//           <label for="total-lot">Total lot:</label>
//           <input type="number" id="total-lot" name="total-lot" value="4" />
//         </div>
//         <div className="form">
//           <label for="position">Position:</label>
//           <select id="position" name="position">
//             <option value="Buy" selected>
//               Buy
//             </option>
//             <option value="Sell">Sell</option>
//           </select>
//         </div>
//         <div className="form">
//           <label for="option-type">Option Type:</label>
//           <select id="option-type" name="option-type">
//             <option value="Call" selected>
//               Call
//             </option>
//             <option value="Put">Put</option>
//           </select>
//         </div>
//         <div className="form">
//           <label for="expiry">Expiry:</label>
//           <select id="expiry" name="expiry">
//             <option value="Weekly" selected>
//               Weekly
//             </option>
//             <option value="Monthly">Monthly</option>
//           </select>
//         </div>

//         <div className="form">
//           <label for="strike-criteria">Select Strike Criteria:</label>
//           <select id="strike-criteria" name="strike-criteria">
//             <option value="Strike Type" selected>
//               Strike Type
//             </option>
//           </select>
//         </div>

//         <div className="btn">
//       <button id="add-leg">Add Leg</button>
//         <button id="cancel">Cancel</button>
//       </div>
//       </div>
    
//     </div>