import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // Handle form data on change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setLoading(false);

      if (data.success === false) {
        setError(true);
        return;
      }
      navigate("/");
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };
  return (
    <>
      <div className="max-w-lg m-auto p-3">
        <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="email"
            placeholder="Email"
            className="bg-slate-100 rounded-lg p-3"
            id="email"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-slate-100 rounded-lg p-3"
            id="password"
            onChange={handleChange}
          />
          <button
            disabled={loading}
            className="bg-slate-700 text-white uppercase rounded-lg p-3 hover:opacity-95 disabled:opacity-85"
          >
            Sign In
          </button>
        </form>
        <div className="flex gap-2 mt-3">
          <p>Dont have an account?</p>
          <Link to="/sign-up">
            <span className="text-blue-500">Sign Up</span>
          </Link>
        </div>
        <p className="text-red-700 pt-3">
          {error && "Something went wrong! Try again."}
        </p>
      </div>
    </>
  );
}
