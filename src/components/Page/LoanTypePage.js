import React, { useState } from "react";
import "../Css/LoanType.css";
function LoanTypePage() {
  const [type, setType] = useState("");
  const [Des, setDes] = useState("");
  const [inputValue, setInputValue] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);


  // Collect Data From Keyboard when Input
  const handleFirstNameChange = (e) => {
    setType(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setDes(e.target.value);
  };
  // Collect Data From Keyboard when Input



  const handleInputValue = () => {
    if (!type || !Des) {
      return;
    }
    if (editIndex === -1) {
      // Adding a new item
      setInputValue((prevVal) => [
        ...prevVal,
        {
          type: type,
          Des: Des,
        },
      ]);
    } else {
      // Updating an existing item
      const updatedItems = [...inputValue];
      updatedItems[editIndex] = {
        type: type,
        Des: Des,
      };
      setInputValue(updatedItems);
      setEditIndex(-1);
    }

    setType("");
    setDes("");
  };

  // const handleDeleteAll = () => {
  //   setInputValue([]);
  //   setEditIndex(-1);
  // };

  const handleEdit = (index) => {
    setEditIndex(index);
    setType(inputValue[index].type);
    setDes(inputValue[index].Des);
  };

  const DeleteItem = (index) => {
    const filteredItems = [...inputValue];
    filteredItems.splice(index, 1);
    setInputValue(filteredItems);
    setEditIndex(-1);
  };

  const refresh = () => {
    window.location.reload(false);
  };

  return (
    <div>
      <div class="pagetitle">
        <h1 style={{ fontFamily: "Bungee Spice" }}>LOANTYPES</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li class="breadcrumb-item active">Loan Types</li>
          </ol>
        </nav>
      </div>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div class="card" style={{ width: "500px", height: "400px" }}>
          <div class="card-body">
            <h3 class="card-title">Loan Type Form</h3>

            <form class="row g-3">
              <div class="col-12">
                <label for="inputNanme4" class="form-label">
                  Type
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputNanme4"
                  value={type}
                  onChange={handleFirstNameChange}
                />
              </div>
              <div class="col-12">
                <label for="inputEmail4" class="form-label">
                  Description
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputEmail4"
                  value={Des}
                  onChange={handleLastNameChange}
                />
              </div>

              <div class="text-center">
                {!type || !Des ? (
                  <button
                    type="button"
                    className="btn btn-primary"
                    style={{ marginRight: "20px" }}
                    onClick={handleInputValue}
                    disabled
                  >
                    {editIndex === -1 ? "Add" : "Update"}
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn btn-primary"
                    style={{ marginRight: "20px" }}
                    onClick={handleInputValue}
                  >
                    {editIndex === -1 ? "Add" : "Update"}
                  </button>
                )}
                <button
                  type="reset"
                  class="btn btn-secondary"
                  onClick={refresh}
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
        <div
          class="card"
          style={{ width: "700px", height: "450px", overflow: "auto" }}
        >
          <div class="card-body">
          <h5 class="card-title" style={{fontFamily:'Bungee Spice' , fontStyle:'italic' , textAlign:'center'}}>LOANTYPES TABLE</h5>

            <table class="table table-hover" style={{ color: "black" }}>
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Type Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {inputValue.map((item, index) => {
                  return (
                    <tr key={index} className="al">
                      <td scope="row">{index + 1}</td>
                      <td>{item.type}</td>
                      <td>{item.Des}</td>
                      <td>
                        {editIndex === index ? (
                          <button
                            variant="outline-danger"
                            style={{
                              marginRight: "5px",
                              height: "2.2rem",
                            }}
                            onClick={() => DeleteItem(index)}
                          >
                            <span role="img" aria-label="delete">
                              ❌
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
                              onClick={() => DeleteItem(index)}
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
    </div>
  );
}

export default LoanTypePage;
