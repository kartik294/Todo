"use client"




import React, { useState } from 'react';

const Todo = ({ todo, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEdit(todo.id, editedText);
    setIsEditing(false);
  };

  return (
    <div className="flex items-center justify-between border-b-2 py-2">
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          className="px-2 py-1 border rounded-md mr-2"
        />
      ) : (
        <span>{todo.text}</span>
      )}
      <div>
        {!isEditing && (
          <button onClick={handleEdit} className="mr-2 text-blue-500">
            Edit
          </button>
        )}
        <button onClick={() => onDelete(todo.id)} className="text-red-500">
          Delete
        </button>
        {isEditing && (
          <button onClick={handleSave} className="ml-2 text-green-500">
            Save
          </button>
        )}
      </div>
    </div>
  );
};

export default Todo;
