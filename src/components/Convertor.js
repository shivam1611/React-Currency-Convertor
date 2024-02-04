import React from "react";

function Convertor({
  preCurrency,
  setPreCurrency,
  postCurrency,
  setPostCurrency,
}) {
  return (
    <div className="convertor">
      <div className="from-section">
        <select
          name="from-select"
          id="from-select"
          value={preCurrency}
          onChange={(e) => setPreCurrency(e.target.value)}
        >
          <option value="INR">INR (Indian Rupee)</option>
          <option value="USD">USD (US Dollar)</option>
          <option value="AUD">AUD (Australian Dollar)</option>
          <option value="CAD">CAD (Canadian Dollar)</option>
          <option value="DKK">DKK(Denmark kroner)</option>
          <option value="JPY">JPY(Japanse Yen)</option>
          <option value="NKZ">NKZ (New Zealand Dollar)</option>
          <option value="RUB">RUB (Russian Rubel)</option>
          <option value="THB">THB (Thailans Baht)</option>
        </select>
      </div>
      <button className="swap-btn">
        <i class="fa-solid fa-right-left"></i>
      </button>
      <div className="to-section">
        <select
          name="to-select"
          id="from-select"
          value={postCurrency}
          onChange={(e) => setPostCurrency(e.target.value)}
        >
          <option value="USD">USD (US Dollar)</option>
          <option value="INR">INR (Indian Rupee)</option>
          <option value="AUD">AUD (Australian Dollar)</option>
          <option value="CAD">CAD (Canadian Dollar)</option>
          <option value="DKK">DKK(Denmark kroner)</option>
          <option value="JPY">JPY(Japanse Yen)</option>
          <option value="NKZ">NKZ (New Zealand Dollar)</option>
          <option value="RUB">RUB (Russian Rubel)</option>
          <option value="THB">THB (Thailans Baht)</option>
        </select>
      </div>
    </div>
  );
}

export default Convertor;
