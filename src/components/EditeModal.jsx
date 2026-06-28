"use client";

import { useState } from "react";
import { Button, Modal, Input, Select, } from "@heroui/react";
import toast from "react-hot-toast";
import { FaEdit } from "react-icons/fa";

export function EditeModal({ book, onUpdate }) {
    const [form, setForm] = useState({
        title: book?.title || "",
        price: book?.price || "",
        status: book?.status || "unpublished",
    });

    const handleChange = (key, value) => {
        setForm((prev) => ({ ...prev, [key]: value }));
    };

    const handleSubmit = async () => {
        const res = await fetch(`http://localhost:8000/api/addedbook/${book._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form),

        });
        
        window.location.reload();

        const data = await res.json();

        if (data.modifiedCount > 0) {
            toast.success(" updated successfully",{
                 duration: 5000,
            });
            onUpdate?.(); // refresh table
        }
    };

    return (
        <Modal>
            <Button
                title="Edit Ebook"
                className="p-1.5 bg-white py-1 px-3 rounded-full border text-blue-600 hover:bg-blue-100 dark:text-blue-400 dark:hover:bg-blue-950/30 transition-colors"
            >
                <FaEdit size={25} />
            </Button>

            <Modal.Backdrop>
                <Modal.Container>
                    <Modal.Dialog className="sm:max-w-[420px] bg-white dark:bg-zinc-900 rounded-2xl shadow-xl overflow-hidden">

                        <Modal.CloseTrigger />

                        <Modal.Header className="border-b border-gray-100 dark:border-zinc-800 pb-3">
                            <Modal.Heading className="text-xl font-bold text-gray-800 dark:text-zinc-100">
                                Edit Ebook
                            </Modal.Heading>
                        </Modal.Header>

                        {/* space-y-5 দিয়ে ইনপুটগুলোর গ্যাপ এবং প্যাডিং বাড়ানো হয়েছে */}
                        <Modal.Body className="space-y-5 py-5">

                            {/* Title Input */}
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-semibold text-gray-700 dark:text-zinc-300">
                                    Book Title
                                </label>
                                <Input
                                    className="w-full h-11 px-3 rounded-xl border border-gray-300 bg-gray-5/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:focus:border-blue-500 transition-all outline-none"
                                    placeholder="Enter book title"
                                    value={form.title}
                                    onChange={(e) => handleChange("title", e.target.value)}
                                />
                            </div>

                            {/* Price Input */}
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-semibold text-gray-700 dark:text-zinc-300">
                                    Price ($)
                                </label>
                                <Input
                                    className="w-full h-11 px-3 rounded-xl border border-gray-300 bg-gray-5/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:focus:border-blue-500 transition-all outline-none"
                                    type="number"
                                    placeholder="0.00"
                                    value={form.price}
                                    onChange={(e) => handleChange("price", e.target.value)}
                                />
                            </div>

                        </Modal.Body>

                        <Modal.Footer className="border-t border-gray-100 dark:border-zinc-800 pt-3 flex gap-3">
                            <Button
                                variant="secondary"
                                slot="close"
                                className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium dark:bg-zinc-800 dark:text-zinc-300 transition-colors"
                            >
                                Cancel
                            </Button>

                            <Button
                                className="flex-1 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors shadow-sm shadow-blue-500/20"
                                onClick={handleSubmit}
                            >
                                Update
                            </Button>
                        </Modal.Footer>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}