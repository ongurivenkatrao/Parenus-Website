import { useState } from "react";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login/register

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      alert("Login submitted!");
      // Add login API logic here
    } else {
      alert("Registration submitted!");
      // Add registration API logic here
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-4 text-center">
        {isLogin ? "Login" : "Sign Up"}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {!isLogin && (
          <div>
            <label className="block text-sm mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 border rounded"
              required
            />
          </div>
        )}

        <div>
          <label className="block text-sm mb-1">Username</label>
          <input
            type="text"
            placeholder="Username"
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Password</label>
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {!isLogin && (
          <div>
            <label className="block text-sm mb-1">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-2 border rounded"
              required
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          {isLogin ? "Login" : "Register"}
        </button>
      </form>

      <p className="mt-4 text-center text-sm">
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="text-blue-500 hover:underline"
        >
          {isLogin ? "Sign Up" : "Login"}
        </button>
      </p>
    </div>
  );
}
