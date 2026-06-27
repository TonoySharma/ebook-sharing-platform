"use client";

import FadeUp from "@/components/FadeUp";
import { addedbook } from "@/lib/action/addedbook ";
import { useSession } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import {
  FiBookOpen,
  FiDollarSign,
  FiType,
  FiUploadCloud,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";

const GENRES = [
  { key: "fiction", label: "Fiction" },
  { key: "non-fiction", label: "Non-Fiction" },
  { key: "sci-fi", label: "Sci-Fi & Fantasy" },
  { key: "mystery", label: "Mystery & Thriller" },
  { key: "biography", label: "Biography" },
  { key: "tech", label: "Technology & Programming" },
];

export default function AddEbookForm() {
  const router = useRouter();
  const { data: session, isPending } = useSession();
// console.log(session);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    genre: "",
  });

  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!session?.user) {
      toast.error("Please login first");
      return;
    }

    if (!image) {
      toast.error("Please upload a cover image.");
      return;
    }

    try {
      setLoading(true);

      const imageHostKey = process.env.NEXT_PUBLIC_IMAGE_API;

      const imageData = new FormData();
      imageData.append("image", image);

      const res = await fetch(
        `https://api.imgbb.com/1/upload?key=${imageHostKey}`,
        {
          method: "POST",
          body: imageData,
        }
      );

      const data = await res.json();

      if (!data.success) {
        throw new Error("Image upload failed");
      }

      // Final Ebook Data
      const ebookData = {
        title: formData.title,
        description: formData.description,
        price: Number(formData.price),
        genre: formData.genre,
        coverImage: data.data.url,

        userId: session.user.id,
        userEmail: session.user.email,

        status: "unpublished",
        createdAt: new Date(),
      };

      console.log(ebookData, 'Successfully');

      const payload = await addedbook(ebookData);

      if (payload.insertedId) {
        toast.success("New Ebook Added Successfully!");

        setFormData({
          title: "",
          description: "",
          price: "",
          genre: "",
        });

        setImage(null);
        setImagePreview("");

        router.push("/dashboard/writer/manage-ebooks");
      } else {
        toast.error("Failed to add ebook.");
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-5">
      <FadeUp className="bg-white rounded-2xl shadow-lg p-8 border">

        <h2 className="text-3xl font-bold flex items-center gap-2 mb-2">
          <FiBookOpen className="text-blue-600" />
          Add New Ebook
        </h2>

        <p className="text-gray-500 mb-8">
          Fill all information below.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Title */}
          <div>
            <label className="font-medium mb-2 block">
              Ebook Title
            </label>

            <div className="relative">
              <FiType className="absolute left-3 top-4 text-gray-400" />

              <input
                type="text"
                name="title"
                required
                value={formData.title}
                onChange={handleChange}
                className="w-full border rounded-lg pl-10 pr-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Genre & Price */}

          <div className="grid md:grid-cols-2 gap-5">

            <div>
              <label className="font-medium mb-2 block">
                Genre
              </label>

              <select
                name="genre"
                required
                value={formData.genre}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">
                  Select Genre
                </option>

                {GENRES.map((item) => (
                  <option key={item.key} value={item.key}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="font-medium mb-2 block">
                Price
              </label>

              <div className="relative">

                <FiDollarSign className="absolute left-3 top-4 text-gray-400" />

                <input
                  type="number"
                  name="price"
                  required
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="10"
                  className="w-full border rounded-lg pl-10 pr-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />

              </div>

            </div>

          </div>

          {/* Description */}

          <div>

            <label className="font-medium mb-2 block">
              Description
            </label>

            <textarea
              rows={6}
              required
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Write ebook description..."
              className="w-full border rounded-lg p-4 outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          {/* Upload */}

          <div>

            <label className="font-medium block mb-3">
              Cover Image
            </label>

            <label className="border-2 border-dashed rounded-xl p-8 flex flex-col items-center cursor-pointer hover:bg-gray-50">

              <FiUploadCloud className="text-4xl text-blue-500 mb-3" />

              <span>Click to Upload</span>

              <input
                type="file"
                accept="image/*"
                hidden
                onChange={handleImageChange}
              />

            </label>

            {imagePreview && (

              <img
                src={imagePreview}
                alt=""
                className="w-36 h-48 object-cover rounded-lg mt-5 border"
              />

            )}

          </div>

          {/* Message */}

          {status.message && (

            <div
              className={`flex items-center gap-2 rounded-lg p-3 ${status.type === "success"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
                }`}
            >

              {status.type === "success" ? (
                <FiCheckCircle />
              ) : (
                <FiAlertCircle />
              )}

              {status.message}

            </div>

          )}

          {/* Button */}

          <Button
            type="submit"
            isDisabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg"
          >
            {loading ? "Publishing..." : "Add Ebook"}
          </Button>

        </form>

      </FadeUp>
    </div>
  );
}