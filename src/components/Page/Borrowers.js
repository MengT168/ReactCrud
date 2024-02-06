import React, { useState } from 'react';
import '../Css/Borrowers.css';

function Borrowers() {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [taxid, setTaxid] = useState('');
  const [inputvalue, setInputvalue] = useState([]);
  const [edit, SetEdit] = useState(-1);
  const [search, setSearch] = useState('');

  const handleCloseForm = () => {
    setShowForm(false);

    // Check if the form was closed without updating
    if (name === '' || address === '' || contact === '' || email === '' || taxid === '') {
      setName('');
      setAddress('');
      setContact('');
      setEmail('');
      setTaxid('');
      SetEdit(-1);
      return;
    }

    // Form was closed after updating, update the data
    const updateItems = [...inputvalue];
    updateItems[edit] = {
      name: name,
      address: address,
      contact: contact,
      email: email,
      taxid: taxid,
    };
    setInputvalue(updateItems);
    SetEdit(-1);

    // Clear form fields
    setName('');
    setAddress('');
    setContact('');
    setEmail('');
    setTaxid('');
  };

  const handleInputName = (e) => {
    setName(e.target.value);
  };
  const handleInputAddress = (e) => {
    setAddress(e.target.value);
  };
  const handleInputContact = (e) => {
    setContact(e.target.value);
  };
  const handleInputEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleInputTaxid = (e) => {
    setTaxid(e.target.value);
  };

  const handleInputValue = () => {
    if (!name || !address || !contact || !email || !taxid) {
      return;
    }

    if (edit === -1) {
      setInputvalue((prev) => [
        ...prev,
        {
          name: name,
          address: address,
          contact: contact,
          email: email,
          taxid: taxid,
        },
      ]);
      setShowForm(false);
    } else {
      const updateItems = [...inputvalue];
      updateItems[edit] = {
        name: name,
        address: address,
        contact: contact,
        email: email,
        taxid: taxid,
      };
      setShowForm(false);
      setInputvalue(updateItems);
      SetEdit(-1);
    }
    setName('');
    setAddress('');
    setContact('');
    setEmail('');
    setTaxid('');
  };

  const handleEdit = (index) => {
    SetEdit(index);
    setName(inputvalue[index].name);
    setAddress(inputvalue[index].address);
    setContact(inputvalue[index].contact);
    setEmail(inputvalue[index].email);
    setTaxid(inputvalue[index].taxid);
    setShowForm(true);
  };

  const deleteItems = (index) => {
    const items = [...inputvalue];
    items.splice(index, 1);
    setInputvalue(items);
    SetEdit(-1);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div class="container">
        <div class="pagetitle">
          <h1 style={{ fontFamily: 'Bungee Spice' }}>BORROWERS</h1>
          <nav>
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li class="breadcrumb-item active">Borrower</li>
            </ol>
          </nav>
        </div>
        <button
          type="button"
          class="btn btn-primary mb-2"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <i class="fa-solid fa-plus" style={{ marginRight: '5px' }}></i>New User
        </button>
		<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Add New Borrower</h1>
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
                        <label for="inputNanme4" class="form-label">Address</label>
                  <input type="text" class="form-control"
                  value={address}
                  onChange={handleInputAddress} 
                  />
                        </div>
                        <div class="col-12">
                        <label for="inputNanme4" class="form-label">Contact</label>
                  <input type="text" class="form-control" 
                  value={contact}
                    onChange={handleInputContact}
                  />
                        </div>
                        <div class="col-12">
                        <label for="inputNanme4" class="form-label">Email</label>
                  <input type="email" class="form-control" 
                  value={email}
                    onChange={handleInputEmail}
                  />
                        </div>
						<div class="col-12">
                        <label for="inputNanme4" class="form-label">Tax ID</label>
                  <input type="email" class="form-control" 
                  value={taxid}
                    onChange={handleInputTaxid}
                  />
                        </div>
                    </form>
              </h5>
              
              {!name || !address  || !contact || !email || !taxid ? (
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
        <div class="row">
          <div class="col-lg-12">
            <input
              type="text"
              class="form-control mb-3"
              placeholder="Search by name"
              value={search}
              onChange={handleSearch}
            />
            <div class="main-box clearfix">
              <div class="table-responsive">
                <table class="table user-list">
                  <thead>
                    <tr>
                      <th>
                        <span>#</span>
                      </th>
                      <th>
                        <span>Borrower</span>
                      </th>
                      <th class="text-center">
                        <span>Current Loan</span>
                      </th>
                      <th>
                        <span>Next Payment Schedule</span>
                      </th>
                      <th>
                        <span>Action</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {inputvalue
                      .filter((item) =>
                        item.name.toLowerCase().includes(search.toLowerCase())
                      )
                      .map((item, index) => (
                        <tr key={index} className="al">
                          <td scope="row">{index + 1}</td>
                          <td>
                            <tr>
                              Name :<td>{item.name}</td>
                            </tr>
                            <tr>
                              Address :<td>{item.address}</td>
                            </tr>
                            <tr>
                              Contact# :<td>{item.contact}</td>
                            </tr>
                            <tr>
                              Email:<td>{item.email}</td>
                            </tr>
                            <tr>
                              Tax ID :<td>{item.taxid}</td>
                            </tr>
                          </td>
                          <td>None</td>
                          <td>N/A</td>
                          <td>
                            {edit === index ? (
                              <button
                                variant="outline-danger"
                                style={{
                                  marginRight: '5px',
                                  height: '2.2rem',
                                  borderRadius: '8px',
                                }}
                                onClick={() => deleteItems(index)}
                              >
                                <span
                                  role="img"
                                  aria-label="delete"
                                  style={{ color: 'white' }}
                                >
                                  Delete
                                </span>
                              </button>
                            ) : (
                              <>
                                <button
                                  variant="outline-primary"
                                  style={{
                                    marginRight: '5px',
                                    height: '2.2rem',
                                    borderRadius: '8px',
                                  }}
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModal"
                                  onClick={() => handleEdit(index)}
                                >
                                  <span
                                    role="img"
                                    aria-label="edit"
                                    style={{ color: 'white' }}
                                  >
                                    Update
                                  </span>
                                </button>
                                <button
                                  variant="outline-danger"
                                  style={{
                                    marginRight: '5px',
                                    height: '2.2rem',
                                    borderRadius: '8px',
                                  }}
                                  onClick={() => deleteItems(index)}
                                >
                                  <span
                                    role="img"
                                    aria-label="delete"
                                    style={{ color: 'white' }}
                                  >
                                    Delete
                                  </span>
                                </button>
                              </>
                            )}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Borrowers;






