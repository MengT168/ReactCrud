import React, { useState } from 'react'

function LoanPlan() {


  const [plan,setPlan] = useState("");
  const [interest,setInterest] = useState("");
  const [monthly,setMonthly] = useState("");
  const [inputValue, setInputValue] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);


  // Collect Data From Keyboard when Input
  const handlePlan=(e)=>{
    setPlan(e.target.value);
  }
  const handleInterest=(e)=>{
    setInterest(e.target.value);
  }
  const handleMonthly=(e)=>{
    setMonthly(e.target.value);
  }
  // Collect Data From Keyboard when Input


  const handleInputValue=()=>{
    if(!plan || !interest || !monthly)
        {
          return;
        }
    if(editIndex === -1){
      setInputValue((prevState)=>[
        ...prevState,
       {
        plan     :  plan,
        interest :  interest,
        monthly  :  monthly
       },

      ]);
    }else{
      const updateItems = [...inputValue];
      updateItems[editIndex] = {
        plan : plan,
        interest :  interest,
        monthly  :  monthly
      };
      setInputValue(updateItems);
      setEditIndex(-1);
    }
    setPlan("");
    setInterest("");
    setMonthly("");
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setPlan(inputValue[index].plan);
    setInterest(inputValue[index].interest);
    setMonthly(inputValue[index].monthly)
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
  <h1 style={{fontFamily:'Bungee Spice'}}>LOANPLANS</h1>
  <nav>
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="index.html">Home</a></li>
      <li class="breadcrumb-item active" >Loan Plans</li>
    </ol>
  </nav>
</div>
          <div className="container" style={{display:'flex' , justifyContent:'space-between' , alignItems:'center'}}>
            
    <div class="card" style={{width:'500px' ,height:'400px'}}>
            <div class="card-body">
              <h3 class="card-title">Plan's Form</h3>

              <form class="row g-3">
                <div class="col-12">
                  <label for="inputNanme4" class="form-label">Plan</label>
                  <input type="text" class="form-control" 
                  value={plan}
                  onChange={handlePlan}
                  />
                </div>
                <div class="col-12">
                  <label for="inputEmail4" class="form-label">Interest</label>
                  <input type="text" class="form-control" 
                  value={interest}
                  onChange={handleInterest}
                  />
                </div>
                <div class="col-12">
                  <label for="inputPassword4" class="form-label">Monthly Over due's Penalty</label>
                  <input type="text" class="form-control" 
                  value={monthly}
                  onChange={handleMonthly}
                  />
                </div>
               
                <div class="text-center">
                {!plan || !interest || !monthly ? (
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
          <div class="card" style={{width:'650px' ,height:'450px' , overflow: "auto"}}>
            <div class="card-body">
              <h5 class="card-title" style={{fontFamily:'Bungee Spice' , fontStyle:'italic' , textAlign:'center'}}>LOANPLANS TABLE</h5>

              
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Plan</th>
                    <th scope="col">Interest</th>
                    <th scope="col">Over due's Penalty</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                {inputValue.map((item, index) => {
                  return (
                    <tr key={index} className="al">
                      <td scope="row">{index + 1}</td>
                      <td>{item.plan}</td>
                      <td>{item.interest}</td>
                      <td>{item.monthly}</td>
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
  )
}

export default LoanPlan