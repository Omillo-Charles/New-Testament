import { useState, useEffect } from "react";
import './Reportss.css';
import ReportDropdown from "./ReportDropdown";

function Reportss() {
  const [currentPage, setCurrentPage] = useState("signup"); // signup, signin, dashboard
  const [signupData, setSignupData] = useState({ name: "", email: "", pastoralCode: "", password: "" });
  const [signinData, setSigninData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [churches, setChurches] = useState([]);
  const [selectedChurch, setSelectedChurch] = useState("");
  const [file, setFile] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredChurches, setFilteredChurches] = useState([]);

  useEffect(() => {
    if (currentPage === "dashboard") {
      fetchChurches();
    }
  }, [currentPage]);

  useEffect(() => {
    // Filter churches based on searchTerm
    if (searchTerm === "") {
      setFilteredChurches([]);
    } else {
      setFilteredChurches(
        churches.filter((church) =>
          church.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm, churches]);

  const fetchChurches = async () => {
    try {
      const response = await fetch("/churches.json");
      const data = await response.json();
      setChurches(data);
    } catch (err) {
      console.error("Error loading churches:", err);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    try {
      // Dummy signup logic for now
      setCurrentPage("dashboard");
    } catch (err) {
      setError("Signup failed");
    }
  };

  const handleSignin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      // Dummy signin logic for now
      setCurrentPage("dashboard");
    } catch (err) {
      setError("Signin failed");
    }
  };

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmitReport = (e) => {
    e.preventDefault();
    if (!selectedChurch || !file) {
      alert("Please select a church and upload a file!");
      return;
    }
    alert(`Report for ${selectedChurch} uploaded!`);
  };

  return (
    <div className="Reportss-container">
      {currentPage === "signup" && (
        <div className="form-container">
          <h2>Sign Up</h2>
          <form onSubmit={handleSignup}>
            <input
              type="text"
              placeholder="Name"
              value={signupData.name}
              onChange={(e) => setSignupData({ ...signupData, name: e.target.value })}
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              value={signupData.email}
              onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Pastoral Code"
              value={signupData.pastoralCode}
              onChange={(e) => setSignupData({ ...signupData, pastoralCode: e.target.value })}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={signupData.password}
              onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
              required
            />
            <button type="submit">Sign Up</button>
          </form>
          <p>Already have an account? <button onClick={() => setCurrentPage("signin")}>Sign In</button></p>
          {error && <p className="error">{error}</p>}
        </div>
      )}

      {currentPage === "signin" && (
        <div className="form-container">
          <h2>Sign In</h2>
          <form onSubmit={handleSignin}>
            <input
              type="email"
              placeholder="Email Address"
              value={signinData.email}
              onChange={(e) => setSigninData({ ...signinData, email: e.target.value })}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={signinData.password}
              onChange={(e) => setSigninData({ ...signinData, password: e.target.value })}
              required
            />
            <button type="submit">Sign In</button>
          </form>
          <p>Don't have an account? <button onClick={() => setCurrentPage("signup")}>Sign Up</button></p>
          {error && <p className="error">{error}</p>}
        </div>
      )}

      {currentPage === "dashboard" && (
        <div className="dashboard">
          <h2>Submit Report</h2>
          <form onSubmit={handleSubmitReport}>
            <ReportDropdown />
            <input type="file" onChange={handleFileUpload} required />
            <button type="submit">Submit Report</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Reportss;
