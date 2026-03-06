import api from "../lib/axios";
import { ArrowLeftIcon, Home, IndianRupee, Palette, PlusIcon, Ruler, ShoppingBag, Tag } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, Link } from "react-router";

const CreatePage = () => {
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [colour, setColour] = useState("");
  const [size, setSize] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await api.post("/footwear", {
        type,
        category,
        price: Number(price),
        colour,
        size: Number(size),
      });

      toast.success("Footwear created successfully");
      navigate("/");
    } catch (error) {
      toast.error("Failed to create footwear.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Link to="/" className="btn btn-ghost mb-6">
            <ArrowLeftIcon className="size-5" /><Home className="size-5 ml-2" /> Back to footwear
          </Link>
          <div className="card bg-base-100">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-4">Create New Footwear</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-control gap-2 mb-6">
                  <label className="label" htmlFor="type">
                    <span className="label-text py-4 font-semibold text-lg text-base-content">
                      <ShoppingBag className="size-5 inline mr-2 text-teal-400" />Footwear Type
                    </span>
                  </label>
                  <div className="relative gap-2">
                    <input
                      id="type"
                      type="text"
                      placeholder="Enter footwear type"
                      className="input input-bordered w-full text-base focus:ring-2 focus:ring-teal-400  focus:border-primary transition duration-200"
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                      required
                    />
                  </div>
                  <span className="text-xs text-base-content/60 mt-1">
                    Example: Sneakers, Sandals, Boots
                  </span>
                </div>

                <div className="form-control gap-2 mb-6">
                  <label className="label" htmlFor="category">
                    <span className="label-text py-4 font-semibold text-lg text-base-content">
                      <Tag className="size-5 inline mr-2 text-primary" /> Category
                    </span>
                  </label>
                  <input
                    id="category"
                    type="text"
                    placeholder="Enter footwear category"
                    className="input input-bordered w-full text-base focus:ring-2 focus:ring-primary focus:border-primary transition duration-200"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                  />
                  <span className="text-xs text-base-content/60 mt-1">
                    Example: Men's, Women's, Kids
                  </span>
                </div>

                <div className="form-control mb-4">
                  <label className="label" htmlFor="price">
                    <span className="label-text font-semibold text-lg text-base-content py-4"><IndianRupee className="size-6 inline mr-2 text-yellow-400" /> Price</span>
                  </label>
                  <input
                    id="price"
                    type="number"
                    placeholder="Enter footwear price"
                    className="input input-bordered w-full text-base focus:ring-2 focus:ring-yellow-400 focus:border-green-600 transition duration-200"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                  />

                </div>

                <div className="form-control mb-4">
                  <label className="label" htmlFor="colour">
                    <span className="label-text py-4 font-semibold text-lg text-base-content"><Palette className="size-5 inline mr-2 text-pink-500" /> Colour</span>
                  </label>
                  <input
                    id="colour"
                    type="text"
                    placeholder="Enter footwear colour"
                    className="input input-bordered w-full text-base focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition duration-200"
                    value={colour}
                    onChange={(e) => setColour(e.target.value)}
                    required
                  />

                </div>

                <div className="form-control mb-4">
                  <label className="label" htmlFor="size">
                    <span className="label-text py-4 font-semibold text-lg text-base-content"><Ruler className="size-5 inline mr-2 text-blue-500" /> Size</span>
                  </label>
                  <input
                    id="size"
                    type="number"
                    placeholder="Enter footwear size"
                    className="input input-bordered w-full text-base focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition duration-200"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    required
                  />

                </div>

                <div className="card-actions justify-end ">
                  <button
                    type="submit"
                    disabled={loading}
                    className={`btn btn-primary relative overflow-hidden transition-all duration-300 bg-green-600 text-[20] px-6 py-3
                ${loading ? "opacity-70 cursor-not-allowed" : "hover:scale-105 hover:shadow-lg"}`}
                  >
                    {/* Animated background highlight */}
                    <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-20 transition duration-300"></span>

                    {/* Button text */}
                    <span className="relative z-10 flex items-center gap-2">
                      {loading ? (
                        <>
                          <span className="loading loading-spinner loading-sm"></span>
                          Creating...
                        </>
                      ) : (
                        <>
                          <PlusIcon className="size-5 " />
                          Create Footwear
                        </>
                      )}
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;