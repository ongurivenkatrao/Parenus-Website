export default function Contact() {
  return (
    <div className="p-6 max-w-2xl mx-auto">
      
      <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">
        Contact Us - Parenu's
      </h1>

      
      <div className="text-center text-gray-700 mb-6">
        <p className="text-lg mb-2">📞 Contact us today: <a href="tel:+919391975228" className="text-blue-500 hover:underline">+91 9391975228</a></p>
        <p className="text-lg">📍 For more we are here 🎁 <a href="https://parenus.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">https://parenus.com/</a></p>
      </div>

      
      <form className="space-y-4">
        <h2 className="text-xl font-semibold mb-2">Feedback Form</h2>

        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Feedback</label>
          <textarea
            rows="4"
            placeholder="Share your feedback..."
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
}
/*import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${form.name}! Your feedback has been submitted.`);
    setForm({ name: "", email: "", feedback: "" });
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">

      <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">
        Contact Us - Parenu's
      </h1>

      <div className="text-center text-gray-700 mb-6">
        <p className="text-lg mb-2">
          📞 Contact us today:{" "}
          <a
            href="tel:+919391975228"
            className="text-blue-500 hover:underline"
          >
            +91 9391975228
          </a>
        </p>
        <p className="text-lg">
          📍 For more we are here 🎁{" "}
          <a
            href="https://parenus.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            https://parenus.com/
          </a>
        </p>
      </div>

      
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-xl font-semibold mb-2">Feedback Form</h2>

        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Feedback</label>
          <textarea
            name="feedback"
            value={form.feedback}
            onChange={handleChange}
            rows="4"
            placeholder="Share your feedback..."
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
}*/

