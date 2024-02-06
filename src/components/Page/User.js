import React from 'react'
import { useState } from 'react';
function User() {

    const [showForm, setShowForm] = useState(false);

    const handleNewUserClick = () => {
      setShowForm(true);
    };
    const handleCloseForm = () => {
    setShowForm(false);

    // Check if the form was closed without updating
    if (name === "" || nametyp === "") {
        setName("");
        setNameType("");
        SetEdit(-1);
        return;
    }

    // Form was closed after updating, update the data
    const updateItems = [...inputvalue];
    updateItems[edit] = {
        name: name,
        nametyp: nametyp
    };
    setInputvalue(updateItems);
    SetEdit(-1);

    // Clear form fields
    setName("");
    setNameType("");
};

    const handleInputName = (e)=>{
        setName(e.target.value);
    }
    const handleInputNameType = (e)=>{
        setNameType(e.target.value);
    }

    const [name,setName] = useState("");
    const [nametyp , setNameType] = useState("");
    const [inputvalue,setInputvalue] = useState([]);
    const [edit,SetEdit] = useState(-1);

    const handleInputValue = ()=>{
        if(!name || !nametyp){
            return;
        }

        if(edit ===-1){
            setInputvalue((prev)=>[
                ...prev,
                {
                    name : name,
                    nametyp : nametyp
                },
            ]);
            setShowForm(false);
        }else{
            const updateItems = [...inputvalue];
            updateItems[edit]={
                name:name,
                nametyp:nametyp
            };
            setShowForm(false);
            setInputvalue(updateItems);
            SetEdit(-1);
        }
        setName("");
        setNameType("");

    }

    const handleEdit = (index)=>{
        SetEdit(index);
        setName(inputvalue[index].name) ;
        setNameType(inputvalue[index].nametyp);
        setShowForm(true);
    };

    const deleteItems = (index)=>{
        const items = [...inputvalue];
        items.splice(index,1);
        setInputvalue(items);
        SetEdit(-1);
    }

  return (
    <div>
         <div class="pagetitle">
  <h1 style={{fontFamily:'Bungee Spice'}}>USERS</h1>
  <nav>
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="index.html">Home</a></li>
      <li class="breadcrumb-item active" >Users</li>
    </ol>
  </nav>
</div>

        {/* Normal Form */}
                {/* <div>
                    <button type="button" 
                            className="btn btn-primary mb-2"  onClick={handleNewUserClick}><i class="fa-solid fa-plus" style={{marginRight:'5px'}}></i>New User</button>
                </div>
                {showForm && (
                <div className="popup-form">
                  
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">
                            <form class="row g-3">
                                <div class="col-12">
                                <label for="inputNanme4" class="form-label">Name</label>
                          <input type="text" class="form-control" 
                          value={name}
                            onChange={handleInputName}
                          />
                                </div>
                                <div class="col-12">
                                <label for="inputNanme4" class="form-label">User Type</label>
                          <input type="text" class="form-control"
                          value={nametyp}
                          onChange={handleInputNameType} 
                          />
                                </div>
                            </form>
                      </h5>
                      
                      {!name || !nametyp ? (
                          <button
                            type="button"
                            className="btn btn-primary"
                            style={{ marginRight: "20px" }}
                            onClick={handleInputValue}
                            disabled
                          >
                            {edit === -1 ? "Add" : "Update"}
                          </button>
                        ) : (
                          <button
                            type="button"
                            className="btn btn-primary"
                            style={{ marginRight: "20px" }}
                            onClick={handleInputValue}
                          >
                            {edit === -1 ? "Add" : "Update"}
                          </button>
                        )}
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={handleCloseForm}
                      >
                        Close
                        
                      </button>
                    
                    </div>
                  </div>
                </div>
              )} */}
        {/* Normal Form */}

              {/* Modal */}
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
<i class="fa-solid fa-plus" style={{marginRight:'5px'}}></i>New User
</button>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Add New User</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                    <form class="row g-3">
                        <div class="col-12">
                        <label for="inputNanme4" class="form-label">Name</label>
                  <input type="text" class="form-control" 
                  value={name}
                    onChange={handleInputName}
                  />
                        </div>
                        <div class="col-12">
                        <label for="inputNanme4" class="form-label">User Type</label>
                  <input type="text" class="form-control"
                  value={nametyp}
                  onChange={handleInputNameType} 
                  />
                        </div>
                    </form>
              </h5>
              
              {!name || !nametyp ? (
                  <button
                    type="button"
                    className="btn btn-primary"
                    style={{ marginRight: "20px" }}
                    onClick={handleInputValue}
                    disabled
                  >
                    {edit === -1 ? "Add" : "Update"}
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn btn-primary"
                    style={{ marginRight: "20px" }}
                    onClick={handleInputValue}
                    data-bs-dismiss="modal"
                  >
                    {edit === -1 ? "Add" : "Update"}
                  </button>
                )}
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={handleCloseForm}
              >
                Close
              </button>
            </div>
          </div>
    </div>
  </div>
</div>

              {/* End Of Modal */}

        <div class="card mt-3">
            <div class="card-body">
              <h5 class="card-title">Default Table</h5>

         
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">User Type</th>
                    <th scope="col">Action</th>
                    
                  </tr>
                </thead>
                <tbody>
                {inputvalue.map((item, index) => {
                  return (
                    <tr key={index} className="al">
                      <td scope="row">{index + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.nametyp}</td>
                      <td>
                        {edit === index ? (
                          <button
                            variant="outline-danger"
                            style={{
                              marginRight: "5px",
                              height: "2.2rem",
                              borderRadius: "8px"
                            }}
                            onClick={() => deleteItems(index)}
                          >
                            <span
                                role="img"
                                aria-label="delete"
                                style={{ color: "white" }}
                              >
                                Delete
                              </span>
                          </button>
                        ) : (
                          <>
                            <button
                              variant="outline-primary"
                              style={{
                                marginRight: "5px",
                                height: "2.2rem",
                                borderRadius: "8px",
                              }}
                              data-bs-toggle="modal" data-bs-target="#exampleModal"
                              onClick={() => handleEdit(index)}
                            >
                              <span
                                role="img"
                                aria-label="edit"
                                style={{ color: "white" }}
                              >
                                Update
                              </span>
                            </button>
                            <button
                              variant="outline-danger"
                              style={{
                                marginRight: "5px",
                                height: "2.2rem",
                                borderRadius: "8px",
                              }}
                              onClick={() => deleteItems(index)}
                            >
                              <span
                                role="img"
                                aria-label="delete"
                                style={{ color: "white" }}
                              >
                                Delete
                              </span>
                            </button>
                          </>
                        )}
                      </td>
                    </tr>
                  );
                })}
                </tbody>
              </table>
             
            </div>
          </div>



         
    </div>
  )
}

export default User