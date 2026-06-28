"use client";

import { Button, Switch, Table } from "@heroui/react";
import { FaEdit, FaTrash, } from "react-icons/fa";
import { MdBook, MdLibraryAddCheck, MdOutlineUnpublished } from "react-icons/md";
import FadeUp from "./FadeUp";
import toast from "react-hot-toast";
import { EditeModal } from "./EditeModal";

export default function ManageBooksTable({ ebooks }) {

  const handleDelete = async (id) => {
    const res = await fetch(`http://localhost:8000/api/addedbook/${id}`, {
      method: "DELETE",
    });

    const data = await res.json();

    if (data.deletedCount > 0) {
      toast.success(" Deleted successfully",{
        duration: 5000
      });

      // UI update (option 1: reload)
      window.location.reload();

    }
  };


  const totalBooks = ebooks?.length || 0;
  const publishedBooks = ebooks?.filter((b) => b.status?.toLowerCase() === "published").length || 0;
  const draftBooks = ebooks?.filter((b) => b.status?.toLowerCase() !== "published").length || 0;

  return (
    <div className="w-full max-w-7xl mx-auto space-y-6 p-5 mb-15">


      <FadeUp className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 bg-white dark:bg-zinc-900 rounded-xl border border-dashed border-zinc-200 flex items-center gap-4 shadow-sm">
          <div className="p-3 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 rounded-xl">
            <MdBook size={24} />
          </div>
          <div>
            <p className="text-xs font-medium text-zinc-400 dark:text-zinc-500 uppercase">Total Ebooks</p>
            <p className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">{totalBooks}</p>
          </div>
        </div>

        <div className="p-4 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200  border-dashed flex items-center gap-4 shadow-sm">
          <div className="p-3 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 rounded-xl">
            <MdLibraryAddCheck size={24} />
          </div>
          <div>
            <p className="text-xs font-medium text-zinc-400 dark:text-zinc-500 uppercase">Published</p>
            <p className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">{publishedBooks}</p>
          </div>
        </div>

        <div className="p-4 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 border-dashed flex items-center gap-4 shadow-sm">
          <div className="p-3 bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 rounded-xl">
            <MdOutlineUnpublished size={24} />
          </div>
          <div>
            <p className="text-xs font-medium text-zinc-400 dark:text-zinc-500 uppercase">Draft / Unpublished</p>
            <p className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">{draftBooks}</p>
          </div>
        </div>
      </FadeUp>


      <FadeUp className="bg-white dark:bg-zinc-900 rounded-2xl  shadow-sm border border-dashed border-zinc-200 dark:border-zinc-800 p-6">
        {/* Header section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-6 gap-4">
          <div>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
              Manage Ebooks
            </h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
              Create, edit, and control the visibility of your authored ebooks.
            </p>
          </div>

        </div>

        {/* Table Structure */}
        <Table aria-label="Ebooks management table" className="shadow-none">
          <Table.ScrollContainer>
            <Table.Content aria-label="Ebooks list" className="min-w-[600px]">
              <Table.Header>
                <Table.Column isRowHeader className="bg-zinc-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                  Title
                </Table.Column>
                <Table.Column className="bg-zinc-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                  Price
                </Table.Column>
                <Table.Column className="bg-zinc-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                  Status
                </Table.Column>
                <Table.Column className="bg-zinc-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 text-right">
                  Actions
                </Table.Column>
              </Table.Header>

              <Table.Body>

                {ebooks.map((ebook) => {
                  const isPublished = ebook.status?.trim()?.toLowerCase() === "published";

                  return (
                    <Table.Row key={ebook._id} className="border-b border-zinc-100 dark:border-zinc-800
                    last:border-0 hover:bg-zinc-50/50 dark:hover:bg-zinc-800/30 transition-colors">
                      {/* Title Column */}
                      <Table.Cell className="py-4 font-medium text-zinc-800 dark:text-zinc-200">
                        {ebook.title}
                      </Table.Cell>

                      {/* Price Column */}
                      <Table.Cell className="py-4 text-zinc-600 dark:text-zinc-400 font-semibold">
                        {ebook.price}
                      </Table.Cell>

                      {/* Status Column with Badges */}
                      <Table.Cell className="py-4">
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${isPublished
                            ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400"
                            : "bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400"
                            }`}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${isPublished ? "bg-emerald-500" : "bg-amber-500"}`} />
                          {ebook.status}
                        </span>
                      </Table.Cell>

                      {/* Actions Column */}
                      <Table.Cell className="py-4 text-right">
                        <div className="flex items-center justify-end gap-3">
                          {/* Publish / Unpublish Action Button */}
                          <div title={isPublished ? "Unpublish Ebook" : "Publish Ebook"} className="inline-block">
                            <Switch
                              isSelected={isPublished}
                              // onChange={() => togglePublishStatus(ebook.id)} // আপনার ফাংশনটি এখানে কল করতে পারেন
                              aria-label={isPublished ? "Unpublish Ebook" : "Publish Ebook"}
                              classNames={{
                                wrapper: isPublished
                                  ? "bg-emerald-500 group-data-[selected=true]:bg-emerald-500"
                                  : "bg-amber-500 group-data-[selected=true]:bg-amber-500"
                              }}
                            >
                              <Switch.Content>
                                <Switch.Control>
                                  <Switch.Thumb />
                                </Switch.Control>
                              </Switch.Content>
                            </Switch>
                          </div>

                          {/* Edit Button */}
                          <EditeModal book={ebook}></EditeModal>
            
                          <Button
                            onClick={() => handleDelete(ebook._id)}
                            title="Delete Ebook"
                            className=" text-rose-600 bg-white 
                            py-1 px-3 rounded-full border hover:bg-rose-100 dark:text-rose-400 dark:hover:bg-rose-950/30 transition-colors"
                          >
                            <FaTrash size={16} />
                          </Button>
                        </div>
                      </Table.Cell>
                    </Table.Row>
                  );
                })}
              </Table.Body>
            </Table.Content>
          </Table.ScrollContainer>
        </Table>


        {ebooks.length === 0 && (
          <div className="text-center py-12 text-zinc-400 text-sm">
            No ebooks found. Click &quot;+ Add New Ebook&quot; to get started.
          </div>
        )}
      </FadeUp>
    </div>
  );
}