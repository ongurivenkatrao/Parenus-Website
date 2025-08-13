export default function About() {
  return (
    <div className="p-6 bg-gradient-to-b from-gray-50 to-white rounded-2xl shadow-lg">
      {/* Title */}
      <h1 className="text-4xl font-extrabold mb-2 text-gray-800">About Parenus</h1>

      {/* Established Year */}
      <div className="mb-6 flex items-center gap-4">
        <span className="text-6xl font-extrabold text-blue-600">2018</span>
        <div>
          <p className="text-lg text-gray-600">Established</p>
          <p className="text-sm text-gray-500 italic">
            Serving corporate clients with trust & innovation
          </p>
        </div>
      </div>

      {/* Overview */}
      <p className="mb-4 text-gray-700 leading-relaxed">
        Parenus is a leading provider of <strong>B2B Corporate Gifting</strong> and
        <strong> Stationery</strong>. We specialize in joining kits and personalized gifts across
        multiple categories, including apparel, drinkware, electronic gadgets, gift hampers,
        luggage, rewards, diaries, and more.
      </p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Our stringent commitment and perseverance in stationery deliveries have earned us immense
        credibility among corporate customers. With timely deliveries and client-focused service,
        we’ve built lasting brand loyalty. We collaborate with a network of organizations to ensure
        that corporate stationery and gifts are delivered right to their doorstep.
      </p>

      {/* Quick Facts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="p-4 border rounded-lg bg-white shadow-sm">
          <h2 className="text-lg font-semibold text-gray-800 mb-1">Industry</h2>
          <p className="text-gray-700">Wholesale</p>
        </div>
        <div className="p-4 border rounded-lg bg-white shadow-sm">
          <h2 className="text-lg font-semibold text-gray-800 mb-1">Company Size</h2>
          <p className="text-gray-700">11–50 employees</p>
        </div>
        <div className="p-4 border rounded-lg bg-white shadow-sm">
          <h2 className="text-lg font-semibold text-gray-800 mb-1">Headquarters</h2>
          <p className="text-gray-700">Hyderabad, Telangana</p>
        </div>
        <div className="p-4 border rounded-lg bg-white shadow-sm">
          <h2 className="text-lg font-semibold text-gray-800 mb-1">Website</h2>
          <a
            href="http://www.parenus.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            www.parenus.com
          </a>
        </div>
      </div>

      {/* Contact */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-50 rounded">
        <h2 className="text-xl font-semibold text-gray-800 mb-1">Contact</h2>
        <p className="text-gray-700">📞 9391975228</p>
      </div>
    </div>
  );
}
