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
            toast.success(" updated successfully");
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
                    <Modal.Dialog className="sm:max-w-[420px]">

                        <Modal.CloseTrigger />

                        <Modal.Header>
                            <Modal.Heading>Edit Ebook</Modal.Heading>
                        </Modal.Header>

                        <Modal.Body className="space-y-4">

                            {/* Title */}
                            <Input
                                label="Title"
                                value={form.title}
                                onChange={(e) => handleChange("title", e.target.value)}
                            />

                            {/* Price */}
                            <Input
                                label="Price"
                                type="number"
                                value={form.price}
                                onChange={(e) => handleChange("price", e.target.value)}
                            />

                  

                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" slot="close">
                                Cancel
                            </Button>

                            <Button className="w-full" onClick={handleSubmit}>
                                Update
                            </Button>
                        </Modal.Footer>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}