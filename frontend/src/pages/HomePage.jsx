import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import Navbar from "../components/Navbar";
import api from "../lib/axios";
import FootCard from "../components/FootCard.jsx";
import FootNotFound from "../components/FootNotFound.jsx";

const HomePage = () => {
  const [footwear, setFootwear] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    const fetchFootwear = async () => {
      try {
        const res = await api.get("/");
        // Ensure data is always an array
        setFootwear(Array.isArray(res.data) ? res.data : []);
      } catch (error) {
        toast.error("Failed to load footwear");
        setFootwear([]);
      } finally {
        setLoading(false);
      }
    };
    fetchFootwear();
  }, []);

  let filteredFootwear = Array.isArray(footwear) ? footwear.filter((item) =>
    item.type.toLowerCase().includes(search.toLowerCase()) ||
    item.category.toLowerCase().includes(search.toLowerCase())
  ) : [];

  if (sortOrder === "asc") {
    filteredFootwear = [...filteredFootwear].sort((a, b) => a.price - b.price);
  } else if (sortOrder === "desc") {
    filteredFootwear = [...filteredFootwear].sort((a, b) => b.price - a.price);
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 mt-6">
        {loading && (
          <div className="text-center text-primary py-10">
            Loading... footwear
          </div>
        )}

        {footwear.length === 0 && <FootNotFound />}

        {footwear.length > 0 && (
          <>
            <div className="flex items-center gap-8 mb-6">
              <input
                type="text"
                placeholder="Search footwear..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="input input-bordered w-full max-w-md"
              />

              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="select select-bordered"
              >
                <option value="">Sort by Price</option>
                <option value="asc">Low to High</option>
                <option value="desc">High to Low</option>
              </select>
            </div>

            <div className="mb-6 text-sm text-gray-600">
              {filteredFootwear.length} item(s) found
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredFootwear.map((item) => (
                <FootCard key={item._id} footwear={item} setFootwear={setFootwear} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;