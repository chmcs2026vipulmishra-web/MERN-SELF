import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import api from "../lib/axios";
import toast from "react-hot-toast";
import {
  Loader,
  Trash2,
  ArrowLeft,
  ShoppingBag,
  Tags,
  IndianRupee,
  Palette,
  Ruler,
  Save,
  Home,
} from "lucide-react";

const FootDetailPage = () => {
  const [footwear, setFootwear] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchFootwear = async () => {
      try {
        const res = await api.get(`/${id}`);
        setFootwear(res.data);
      } catch (error) {
        console.error("Error in fetching footwear", error);
        toast.error("Failed to fetch the footwear");
      } finally {
        setLoading(false);
      }
    };
    fetchFootwear();
  }, [id]);

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this footwear?")) return;
    try {
      await api.delete(`/${id}`);
      toast.success("Footwear deleted successfully");
      navigate("/");
    } catch (error) {
      console.error("Error deleting footwear", error);
      toast.error("Failed to delete the footwear");
    }
  };

  const handleSave = async () => {
    if (!footwear.type.trim() || !footwear.category.trim()) {
      toast.error("Please add type and category");
      return;
    }
    setSaving(true);
    try {
      await api.put(`/${id}`, {
        type: footwear.type,
        category: footwear.category,
        price: Number(footwear.price),
        colour: footwear.colour,
        size: Number(footwear.size),
      });

      toast.success("Footwear updated successfully");
      navigate("/");
    } catch (error) {
      console.error("Error in updating footwear", error);
      toast.error("Failed to update the footwear");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <Loader className="animate-spin size-10 text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-200 to-base-300">
      <div className="container mx-auto px-4 py-10">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <Link
              to="/"
              className="btn btn-ghost hover:bg-base-300 transition flex items-center gap-2"
            >
              <ArrowLeft className="size-5" /> <Home className="size-5 " /> Back to footwear
            </Link>
            <button
              onClick={handleDelete}
              className="btn btn-error btn-outline px-4 py-2 hover:scale-105 transition bg-red-500 hover:bg-red-600 text-white flex items-center gap-2"
            >
              <Trash2 className="size-5 " /> Delete
            </button>
          </div>

          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition duration-300">
            <div className="card-body space-y-6">
              <div className="form-control">
                <label className="label px-4 py-2 font-semibold text-lg text-base-content">
                  <ShoppingBag className="size-5 inline mr-2 text-teal-400" /> Type
                </label>
                <input
                  type="text"
                  placeholder="Footwear type"
                  className="input input-bordered text-lg focus:ring-2 focus:ring-teal-400 px-4 py-2 transition"
                  value={footwear.type}
                  onChange={(e) => setFootwear({ ...footwear, type: e.target.value })}
                />
              </div>

              <div className="form-control">
                <label className="label px-4 py-2 font-semibold text-lg text-base-content">
                  <Tags className="size-5 inline mr-2 text-green-500" /> Category
                </label>
                <input
                  type="text"
                  placeholder="Footwear category"
                  className="input input-bordered text-lg px-4 py-2 focus:ring-2 focus:ring-green-500 transition"
                  value={footwear.category}
                  onChange={(e) => setFootwear({ ...footwear, category: e.target.value })}
                />
              </div>

              <div className="form-control">
                <label className="label px-4 py-2 font-semibold text-lg text-base-content">
                  <IndianRupee className="size-5 inline mr-2 text-yellow-400" /> Price
                </label>
                <input
                  type="number"
                  placeholder="Footwear price"
                  className="input input-bordered text-lg px-4 py-2 focus:ring-2 focus:ring-yellow-600 transition"
                  value={footwear.price}
                  onChange={(e) => setFootwear({ ...footwear, price: e.target.value })}
                />
              </div>

              <div className="form-control">
                <label className="label px-4 py-2 font-semibold text-lg text-base-content">
                  <Palette className="size-5 inline mr-2 text-pink-500" /> Colour
                </label>
                <input
                  type="text"
                  placeholder="Footwear colour"
                  className="input input-bordered text-lg px-4 py-2 focus:ring-2 focus:ring-pink-500 transition"
                  value={footwear.colour}
                  onChange={(e) => setFootwear({ ...footwear, colour: e.target.value })}
                />
              </div>

              <div className="form-control ">
                <label className="label px-4 py-2 font-semibold text-lg text-base-content">
                  <Ruler className="size-5 inline mr-2 text-blue-600" /> Size
                </label>
                <input
                  type="number"
                  placeholder="Footwear size"
                  className="input input-bordered text-lg px-4 py-2 focus:ring-2 focus:ring-blue-600 transition"
                  value={footwear.size}
                  onChange={(e) => setFootwear({ ...footwear, size: e.target.value })}
                />
              </div>

              <div className="card-actions justify-end">
                <button
                  className={`btn bg-yellow-500 hover:bg-yellow-600 flex items-center gap-2 px-4 py-2 transition-all duration-300 
                    ${saving ? "opacity-70 cursor-not-allowed" : "hover:scale-105 hover:shadow-lg"}`}
                  disabled={saving}
                  onClick={handleSave}
                >
                  {saving ? (
                    <>
                      <Loader className="size-4 animate-spin" /> Saving...
                    </>
                  ) : (
                    <>
                      <Save className="size-5" /> Save Changes
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FootDetailPage;