import React from 'react'
import '../Css/PaymentPage.css';
import { useState } from 'react';
function PaymentPage() {
    const [showForm, setShowForm] = useState(false);
    const [name,setName] = useState("");
    const [nametyp , setNameType] = useState("");
    const [amount , setAmount] = useState("");
    const [penalty , setPenalty] = useState("");
    const [search, setSearch] = useState('');
    const handleCloseForm = () => {
        setShowForm(false);
    
        // Check if the form was closed without updating
        if (name === "" || nametyp === "" || amount ==="" || penalty ==="") {
            setName("");
            setNameType("");
            setAmount("");
            setPenalty("");
            SetEdit(-1);
            return;
        }
    
        // Form was closed after updating, update the data
        const updateItems = [...inputvalue];
        updateItems[edit] = {
            name: name,
            nametyp: nametyp,
            amount : amount,
            penalty : penalty
        };
        setInputvalue(updateItems);
        SetEdit(-1);
    
        // Clear form fields
        setName("");
        setNameType("");
        setAmount("");
        setPenalty("");
    };
    
        const handleInputName = (e)=>{
            setName(e.target.value);
        }
        const handleInputNameType = (e)=>{
            setNameType(e.target.value);
        }
        const handleInputAmount = (e)=>{
            setAmount(e.target.value);
        }
        const handleInputPenalty = (e)=>{
            setPenalty(e.target.value);
        }
    
        
  
        const [inputvalue,setInputvalue] = useState([]);
        const [edit,SetEdit] = useState(-1);
    
        const handleInputValue = ()=>{
            if(!name || !nametyp || !amount || !penalty){
                return;
            }
    
            if(edit ===-1){
                setInputvalue((prev)=>[
                    ...prev,
                    {
                        name : name,
                        nametyp : nametyp,
                        amount : amount,
                        penalty : penalty
                    },
                ]);
                setShowForm(false);
            }else{
                const updateItems = [...inputvalue];
                updateItems[edit]={
                    name:name,
                    nametyp:nametyp,
                    amount : amount,
                    penalty : penalty
                };
                setShowForm(false);
                setInputvalue(updateItems);
                SetEdit(-1);
            }
            setName("");
            setNameType("");
            setAmount("");
            setPenalty("");
        }
    
        const handleEdit = (index)=>{
            SetEdit(index);
            setName(inputvalue[index].name) ;
            setNameType(inputvalue[index].nametyp);
            setAmount(inputvalue[index].amount);
            setPenalty(inputvalue[index].penalty);
            setShowForm(true);
        };
    
        const deleteItems = (index)=>{
            const items = [...inputvalue];
            items.splice(index,1);
            setInputvalue(items);
            SetEdit(-1);
        }
        const handleSearch = (e) => {
          setSearch(e.target.value);
        };
  return (
    <>
        <div class="container">
        <div class="pagetitle">
  <h1 style={{fontFamily:'Bungee Spice'}}>PAYMENT</h1>
  <nav>
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="index.html">Home</a></li>
      <li class="breadcrumb-item active" >Payment List</li>
    </ol>
  </nav>
</div>
<button type="button" class="btn btn-primary mb-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
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
                        <label for="inputNanme4" class="form-label">Loan Reference</label>
                  <input type="text" class="form-control" 
                  value={name}
                    onChange={handleInputName}
                  />
                        </div>
                        <div class="col-12">
                        <label for="inputNanme4" class="form-label">Payee</label>
                  <input type="text" class="form-control"
                  value={nametyp}
                  onChange={handleInputNameType} 
                  />
                        </div>
                        <div class="col-12">
                        <label for="inputNanme4" class="form-label">Amount</label>
                  <input type="text" class="form-control" 
                  value={amount}
                    onChange={handleInputAmount}
                  />
                        </div>
                        <div class="col-12">
                        <label for="inputNanme4" class="form-label">Penalty</label>
                  <input type="text" class="form-control" 
                  value={penalty}
                    onChange={handleInputPenalty}
                  />
                        </div>
                    </form>
              </h5>
              
              {!name || !nametyp  || !amount || !penalty? (
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
        <div class="col-xl-12">
        <input
              type="text"
              class="form-control mb-3"
              placeholder="Search by name"
              value={search}
              onChange={handleSearch}
            />
            <div class="card">
                <div class="card-body">
                    <h5 class="header-title pb-3 mt-0">Payments</h5>
                    <div class="table-responsive">
                        <table class="table table-hover mb-0">
                            <thead>
                                <tr class="align-self-center">
                                    <th>#</th>
                                    <th>Loan Reference No</th>
                                    <th>Payee</th>
                                    <th>Amount</th>
                                    <th>Penalty</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {inputvalue
                      .filter((item) =>
                        item.nametyp.toLowerCase().includes(search.toLowerCase())
                      )
                      .map((item, index) => (
                        <tr key={index} className="al">
                          <td scope="row">{index + 1}</td>
                         
                              <td>{item.name}</td>
                            
                             <td>{item.nametyp}</td>
                           
                              <td>{item.amount}</td>
                            
                             <td>{item.penalty}</td>
                            
                         
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
</div>
    </>
  )
}

export default PaymentPage