import { useState, useEffect } from "react";
import axios from "axios";
import './Reportss.css';

const API_BASE_URL = "https://code-rx7k.onrender.com";

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
      setFilteredChurches(churches);
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
      const response = await axios.get(`${API_BASE_URL}/churches`);
      setChurches(response.data);
      setFilteredChurches(response.data); // Set filtered churches to initial list
    } catch (err) {
      console.error("Error fetching churches:", err);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await axios.post(`${API_BASE_URL}/signup`, signupData);
      setCurrentPage("dashboard");
    } catch (err) {
      setError(err.response?.data?.error || "Signup failed");
    }
  };

  const handleSignin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await axios.post(`${API_BASE_URL}/login`, signinData);
      setCurrentPage("dashboard");
    } catch (err) {
      setError(err.response?.data?.error || "Signin failed");
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
    alert(`Report for ${selectedChurch} uploaded! (We will build real upload soon)`);
  };

  return (
    <div className="container">
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
            <input
              type="text"
              placeholder="Search churches..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
              value={selectedChurch}
              onChange={(e) => setSelectedChurch(e.target.value)}
              required
            >
              <option value="">Select Church</option>
              {filteredChurches.map((church) => (
                <option key={church.id} value={church.name}>
                  {church.name}
                </option>
              ))}
            </select>
            <input type="file" onChange={handleFileUpload} required />
            <button type="submit">Submit Report</button>
          </form>
          <button onClick={() => setCurrentPage("signin")} className="LogOut">Logout</button>
        </div>
      )}
    </div>
  );
}

export default Reportss;
