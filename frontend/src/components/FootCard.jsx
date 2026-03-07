import { Link, useLocation } from "react-router";
import { ShoppingBag, Palette, Edit2, Trash2, IndianRupee, Ruler } from "lucide-react";
import { formatDate } from "../lib/utils";
import api from "../lib/axios";
import { useState } from "react";
import toast from "react-hot-toast";

const FootCard = ({ footwear, setFootwear }) => {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  const isActive = location.pathname === `/footwear/${footwear._id}`;


  const handleDelete = async () => {
    try {
      await api.delete(`/${footwear._id}`);
      setFootwear((prev) => prev.filter((f) => f._id !== footwear._id));
      toast.success("Footwear deleted successfully");
    } catch (error) {
      console.error("Error deleting footwear", error);
      toast.error("Failed to delete footwear");
    } finally {
      setShowModal(false);
    }
  };

  return (
    <>
      <Link
        to={`/${footwear._id}`}
        className={`relative block rounded-xl bg-base-100 p-4 border transition-all duration-200 ${
          isActive ? "border-primary shadow-lg" : "border-base-300"
        } hover:border-secondary hover:shadow-xl`}
      >
        <div className="flex text-[12px] justify-between items-start">
          <p className="text-xs text-base-content/60 truncate">Product ID: {footwear._id}</p>
          <span className="inline-flex items-center rounded-md bg-green-400/10 px-2 py-1 text-xs font-medium text-green-400 inset-ring inset-ring-green-500/20">
            {footwear.category}
          </span>
        </div>

        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-5">
            <ShoppingBag className="size-6 text-teal-600" />
            <p className="text-[25px] font-bold text-base-content">{footwear.type}</p>
          </div>

          <p className="flex items-center gap-3 text-[22px] font-semibold text-base-content">
            <Palette className="size-6 text-pink-500" />
            {footwear.colour}
          </p>

          <p className="flex items-center gap-3 text-[18px] font-semibold text-base-content">
            <IndianRupee className="size-6 text-yellow-400" />
            {footwear.price}
          </p>

          <p className="flex items-center gap-3 text-[18px] font-semibold text-base-content">
            <Ruler className="size-6 text-blue-600" /> Size: {footwear.size}
          </p>
        </div>

        <div className="mt-6 flex justify-between items-center">
          <span className="text-[15px] text-base-content/60">
            {formatDate(new Date(footwear.createdAt))}
          </span>

          <div className="flex items-center gap-4">
            <div className="relative group">
              <Link to={`/footwear/${footwear._id}`} className="cursor-pointer">
                <Edit2 className="size-5 text-warning hover:scale-110 transition" />
              </Link>
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-warning text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition duration-200">
                Edit
              </span>
            </div>

            <div className="relative group">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setShowModal(true);
                }}
                className="text-error hover:scale-110 transition cursor-pointer"
              >
                <Trash2 className="size-5" />
              </button>
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-error text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition duration-200">
                Delete
              </span>
            </div>
          </div>
        </div>
      </Link>

      {showModal && (
        <dialog className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-error flex items-center gap-2">
              <Trash2 className="size-6" /> Delete Footwear
            </h3>
            <p className="py-4 text-base-content/70">
              Are you sure you want to delete this footwear?
              <span className="font-semibold text-base-content"> "{footwear.type}"</span>
              <br /> This action cannot be undone.
            </p>
            <div className="modal-action">
              <button className="btn btn-ghost" onClick={() => setShowModal(false)}>
                Cancel
              </button>
              <button className="btn btn-error" onClick={handleDelete}>
                Delete
              </button>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
};

export default FootCard;
