import React, { useState } from 'react';
import "../css/createBlog.css"

const CreateBlog = ({ onSubmit }) => {
    // State variables to store the title and description inputs
    const [inputs, setInputs] = useState({title: "", description: ""});

    const handleChange = (e)=>{
        setInputs({...inputs, [e.target.key]: e.target.value})
    }

    return (
        <div class="modal" tabindex="-1">
        <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <input class="modal-title" type="text" key="title" onChange={handleChange}/>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <input class="modal-body" type="text" key="title" onChange={handleChange}/>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    );
};

export default CreateBlog;
