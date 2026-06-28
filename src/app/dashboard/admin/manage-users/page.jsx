"use client";

import FadeUp from "@/components/FadeUp";
import { Button, Table } from "@heroui/react";
import { useEffect, useState } from "react";

export default function ManageUserPage() {
    const [users, setUsers] = useState([]);

 
    const fetchUsers = async () => {
        const res = await fetch("http://localhost:8000/users");
        const data = await res.json();
        setUsers(data);
    };

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        fetchUsers();
    }, []);

    // change role
    const changeRole = async (id, role) => {
        await fetch(`http://localhost:8000/users/${id}/role`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ role }),
        });

        fetchUsers();
    };

    // delete user
    const deleteUser = async (id) => {
        await fetch(`http://localhost:8000/users/${id}`, {
            method: "DELETE",
        });

        fetchUsers();
    };

    return (
        <FadeUp>
        <Table className="w-full border-separate h-[550px] border-spacing-0 overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <Table.ScrollContainer>
                <Table.Content
                    aria-label="Users Table"
                    className="min-w-[600px] text-sm text-slate-600 dark:text-slate-300"
                >
                    <Table.Header className="bg-slate-50/70 backdrop-blur-sm dark:bg-slate-800/50">
                        <Table.Column isRowHeader className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-200 border-b border-slate-100 dark:border-slate-800 text-left">
                            Name
                        </Table.Column>
                        <Table.Column className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-200 border-b border-slate-100 dark:border-slate-800 text-left">
                            Email
                        </Table.Column>
                        <Table.Column className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-200 border-b border-slate-100 dark:border-slate-800 text-left">
                            Role
                        </Table.Column>
                        <Table.Column className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-200 border-b border-slate-100 dark:border-slate-800 text-right">
                            Actions
                        </Table.Column>
                    </Table.Header>

                    <Table.Body>
                        {users.map((user) => (
                            <Table.Row
                                key={user._id}
                                className="group transition-colors duration-200 hover:bg-slate-50/50 dark:hover:bg-slate-800/30"
                            >
                                <Table.Cell className="px-6 py-4 font-medium text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800/60">
                                    {user.name}
                                </Table.Cell>
                                <Table.Cell className="px-6 py-4 text-slate-500 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800/60">
                                    {user.email}
                                </Table.Cell>
                                <Table.Cell className="px-6 py-4 border-b border-slate-100 dark:border-slate-800/60">
                                    <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium capitalize ring-1 ring-inset ${user.role === 'admin' ? 'bg-indigo-50 text-indigo-700 ring-indigo-700/10 dark:bg-indigo-500/10 dark:text-indigo-400' :
                                            user.role === 'writer' ? 'bg-amber-50 text-amber-700 ring-amber-700/10 dark:bg-amber-500/10 dark:text-amber-400' :
                                                'bg-slate-50 text-slate-600 ring-slate-500/10 dark:bg-slate-500/10 dark:text-slate-400'
                                        }`}>
                                        {user.role}
                                    </span>
                                </Table.Cell>

                                <Table.Cell className="px-6 py-4 border-b border-slate-100 dark:border-slate-800/60 text-right">
                                    <div className="flex items-center justify-end gap-3">
                                        <select
                                            value={user.role}
                                            onChange={(e) => changeRole(user._id, e.target.value)}
                                            className="rounded-lg border
                                             border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-700 shadow-sm outline-none transition-all hover:border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-slate-600"
                                        >
                                            <option value="user">User</option>
                                            <option value="writer">Writer</option>
                                            <option value="admin">Admin</option>
                                        </select>

                                        <Button
                                            onClick={() => deleteUser(user._id)}
                                            className="inline-flex items-center justify-center rounded-lg bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-600 transition-all hover:bg-red-100 active:bg-red-200 dark:bg-red-500/10 dark:text-red-400 dark:hover:bg-red-500/20"
                                        >
                                            Delete
                                        </Button>
                                    </div>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table.Content>
            </Table.ScrollContainer>
        </Table>
        </FadeUp>
    );
}