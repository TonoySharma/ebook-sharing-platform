
import React from 'react';

const Dropdown = ({ role, setRole }) => {
  return (
    <select
      className="w-full border rounded-md px-3 py-2"
      value={role}
      onChange={(e) => setRole(e.target.value)}
    >
      <option value="" disabled>
        Select one
      </option>
      <option value="reader">Reader</option>
      <option value="writer">Writer</option>
      <option value="admin">Admin</option>
    </select>
  );
};

export default Dropdown;