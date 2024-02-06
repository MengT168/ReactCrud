import React from 'react'
import '../Page/Page.css'
import { Routes ,Route } from 'react-router-dom'
function DashBoardPage() {
  return (
    
    <div className="container">
        <div class="pagetitle">
  <h1 style={{fontFamily:'Bungee Spice'}}>Dashboard</h1>
  <nav>
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="index.html">Home</a></li>
      <li class="breadcrumb-item active" >Dashboard</li>
    </ol>
  </nav>
</div>
                <div className="row">
            <div className="col-md-4 col-xl-3">
            <div className="card bg-c-blue order-card">
                <div className="card-block">
                    <h6 className="m-b-20">Payment Today</h6>
                    <h2 className="text-right"><i className="fa-solid fa-credit-card f-left"></i><span>0.00$</span></h2>
                    <a className="m-b-0 C">View Payment</a>
                    <span className="f-right">9 more+</span>
                </div>
            </div>
        </div>
        <div className="col-md-4 col-xl-3">
            <div className="card bg-c-pink order-card ">
                <div className="card-block">
                    <h6 className="m-b-20">Borrowers</h6>
                    <h2 className="text-right"><i className="fa-solid fa-user f-left"></i>
                    <span>5</span>
                    </h2>
                    <a className="m-b-0 C">View Borrowers</a>
                    <span className="f-right">10 more+</span>
                </div>
            </div>
        </div>
        <div className="col-md-4 col-xl-3">
            <div className="card bg-c-green order-card">
                <div className="card-block">
                    <h6 className="m-b-20">Active Loans</h6>
                    <h2 className="text-right"><i className="fa-solid fa-user f-left"></i><span>4</span></h2>
                    <a className="m-b-0 C">View Loans List</a>
                    <span className="f-right">4 more+</span>
                </div>
            </div>
        </div>
        <div className="col-md-4 col-xl-3">
            <div className="card bg-c-yellow order-card">
                <div className="card-block">
                    <h6 className="m-b-20">Total Recievable</h6>
                    <h2 className="text-right"><i className="fa-solid fa-user f-left"></i><span>105,000.00</span></h2>
                    <a className="m-b-0 C">View Loans List</a>
                    <span className="f-right">2 more+</span>
                </div>
            </div>
        </div> 
          </div>
         
      </div>
  )
}

export default DashBoardPage