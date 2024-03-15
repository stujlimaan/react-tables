import React, { useState } from 'react';

function EditModal({ selectedItem, closeModal }) {
    console.log(selectedItem, closeModal)
  const [editedItem, setEditedItem] = useState(selectedItem[0]); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedItem(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = () => {
    console.log("Saving edited item: ", editedItem);
    closeModal(); 
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>Edit Item</h2>
        <div>
          <label>first_name:</label>
          <input type="text" name="first_name" value={editedItem?.first_name} onChange={handleChange} />
        </div>
        <div>
          <label>last_name:</label>
          <input type="text" name="last_name" value={editedItem?.last_name} onChange={handleChange} />
        </div>
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
}

export default EditModal;
