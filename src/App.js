import './App.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'





function App() {
  return (
    <div className="App">


      <header class="head">

        <div class="container py-5">
          <div class="row">

            <div class="col-12">

              <h1 class="start">Bootstrap Responsive Pricing Table Snippet</h1>

            </div>
          </div>

        </div>
      </header>
      

      <section class="sect">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title text-muted text-uppercase text-center">Free </h5>
                  <h6 class="card-price text-center">$0<span class="period"> /month</span> </h6>
                  <hr/>
                    <ul class="fa-ul">
                      <li><span class="fa-li"><FontAwesomeIcon icon={faCheck} /></span>Single User</li>
                      <li><span class="fa-li"><FontAwesomeIcon icon={faCheck} /></span>5GB Storage</li>
                      <li><span class="fa-li"><FontAwesomeIcon icon={faCheck} /></span>Unlimited Public Projects</li>
                      <li><span class="fa-li"><FontAwesomeIcon icon={faCheck} /></span>Community Access</li>
                      <li class="text-muted"><span class="fa-li"><FontAwesomeIcon icon={faTimes} /></span>Unlimited
                           Private Projects</li>
                      <li class="text-muted"><span class="fa-li"><FontAwesomeIcon icon={faTimes} /></span>Dedicated
                            Phone Support</li>
                      <li class="text-muted"><span class="fa-li"><FontAwesomeIcon icon={faTimes} /></span>Free Subdomain
                      </li>
                      <li class="text-muted"><span class="fa-li"><FontAwesomeIcon icon={faTimes} /></span>Monthly Status
                          Reports</li>
                    </ul>
                    <div class="d-grid">
                      <a href="#" class="btn btn-primary text-uppercase">Button</a>
                    </div>
                </div>
              </div>
              
            </div>
            <div class="col">
                <div class="card mb-5 mb-lg-0">
                  <div class="card-body">
                    <h5 class="card-title text-muted text-uppercase text-center">Plus</h5>
                    <h6 class="card-price text-center">$9<span class="period">/month</span></h6>
                    <hr/>
                    <ul class="fa-ul">
                      <li><span class="fa-li"><FontAwesomeIcon icon={faCheck} /></span><strong>5 Users</strong></li>
                      <li><span class="fa-li"><FontAwesomeIcon icon={faCheck} /></span>50GB Storage</li>
                      <li><span class="fa-li"><FontAwesomeIcon icon={faCheck} /></span>Unlimited Public Projects</li>
                      <li><span class="fa-li"><FontAwesomeIcon icon={faCheck} /></span>Community Access</li>
                      <li><span class="fa-li"><FontAwesomeIcon icon={faCheck} /></span>Unlimited Private Projects</li>
                      <li><span class="fa-li"><FontAwesomeIcon icon={faCheck} /></span>Dedicated Phone Support</li>
                      <li><span class="fa-li"><FontAwesomeIcon icon={faCheck} /></span>Free Subdomain</li>
                      <li class="text-muted"><span class="fa-li"><FontAwesomeIcon icon={faTimes} /></span>Monthly Status
                           Reports</li>
                    </ul>
                    <div class="d-grid">
                       <a href="#" class="btn btn-primary text-uppercase">Button</a>
                    </div>
                  </div>
                </div>
              </div>
            <div class="col">
                <div class="card">
                  <div class="card-body">
                     <h5 class="card-title text-muted text-uppercase text-center">Pro</h5>
                      <h6 class="card-price text-center">$49<span class="period">/month</span></h6>
                      <hr/>
                      <ul class="fa-ul">
                        <li><span class="fa-li"><FontAwesomeIcon icon={faCheck} /></span><strong>Unlimited Users</strong>
                        </li>
                        <li><span class="fa-li"><FontAwesomeIcon icon={faCheck} /></span>150GB Storage</li>
                        <li><span class="fa-li"><FontAwesomeIcon icon={faCheck} /></span>Unlimited Public Projects</li>
                        <li><span class="fa-li"><FontAwesomeIcon icon={faCheck} /></span>Community Access</li>
                        <li><span class="fa-li"><FontAwesomeIcon icon={faCheck} /></span>Unlimited Private Projects</li>
                        <li><span class="fa-li"><FontAwesomeIcon icon={faCheck} /></span>Dedicated Phone Support</li>
                        <li><span class="fa-li"><FontAwesomeIcon icon={faCheck} /></span><strong>Unlimited</strong> Free
                                Subdomains</li>
                        <li><span class="fa-li"><FontAwesomeIcon icon={faCheck} /></span>Monthly Status Reports</li>
                      </ul>
                      <div class="d-grid">
                         <a href="#" class="btn btn-primary text-uppercase">Button</a>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          
        </div>
      </section>


    </div>
                 

    
  );
}

export default App;

