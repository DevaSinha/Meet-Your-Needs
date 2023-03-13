import React from 'react';
import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
function HomePage() {
  return (
    <div>
      <div className="jumbotron">
        <h1>Welcome to Meet Your Need Home Page</h1>
        <p className="lead">Find the best vendors for your projects</p>
        <Link to="/register">
              <Button variant="primary">I am Client</Button>
            </Link>
            <br/>
            <br/>
            <Link to="/vendorregistration">
            <Button variant="primary" class="btn btn-primary btn-lg">I am Vendor</Button>
            </Link> 
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <br/>
            <h2>What is Meet Your Need?</h2>
            <p>Meet Your Need is a marketplace for vendors in fields like writing, graphic design and web development. The site helps professionals find projects, communicate with clients and get paid. If you're a new freelancer or new vendor, or working in a new field, you can rack up valuable experience without always having to pitch clients cold. Meet your need allows vendors can work remotely from anywhere in the world especially in India, making it easier for them to find and apply for projects. </p>
          </div>
          <div className="col-md-4">
            <img src="https://source.unsplash.com/random/400x400/??developer" alt="Freelancing" className="img-fluid" />
          </div>
        </div>

        <hr />

        <div className="row">
          <div className="col-md-12">
            <h2>Why Choose Vendors?</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src="https://source.unsplash.com/random/400x400/?freelancing" alt="Quality Work" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Quality Work</h5>
                <p className="card-text">Vendors are often highly skilled in their particular field, allowing them to deliver high-quality work that meets your project requirements.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://source.unsplash.com/random/400x400/?webdeveloper" alt="Cost-Effective" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Cost-Effective</h5>
                <p className="card-text">Hiring a freelancer can be a cost-effective solution, as you only pay for the work that needs to be done, without the overhead costs associated with hiring a full-time employee.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://source.unsplash.com/random/400x400/?freelancers" alt="Flexibility" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Flexibility</h5>
                <p className="card-text">Freelancers are often able to work on their own schedules, allowing them to take on projects that fit their lifestyle and personal preferences.</p>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className="row">
          <div className="col-md-12">
            {/* <div className="freelancers-section */}
            <div className="freelancers-section">
            <h2>Meet Our Freelancers</h2>
            <div className="row">
              <div className="col-md-3">
                <div className="card">
                  <img src="https://source.unsplash.com/random/400x400/?person" alt="Freelancer" className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">John Doe</h5>
                    <p className="card-text">Web Developer</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card">
                  <img src="https://source.unsplash.com/random/400x400/?softwaredevelopers" alt="Freelancer" className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">Jane Smith</h5>
                    <p className="card-text">Graphic Designer</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card">
                  <img src="https://source.unsplash.com/random/400x400/?gentlemen" alt="Freelancer" className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">Bob Johnson</h5>
                    <p className="card-text">Content Writer</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card">
                  <img src="https://source.unsplash.com/random/400x400/?female" alt="Freelancer" className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">Sarah Lee</h5>
                    <p className="card-text">Social Media Manager</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr />

          <div className="row">
            <div className="col-md-12">
              <h2>Our Clients</h2>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3">
              <img src="https://source.unsplash.com/random/400x400/?clients" alt="Client" className="img-fluid" />
            </div>
            <div className="col-md-3">
              <img src="https://source.unsplash.com/random/400x400/?client" alt="Client" className="img-fluid" />
            </div>
            <div className="col-md-3">
              <img src="https://source.unsplash.com/random/400x400/?company" alt="Client" className="img-fluid" />
            </div>
            <div className="col-md-3">
              <img src="https://source.unsplash.com/random/400x400/?companies" alt="Client" className="img-fluid" />
            </div>
          </div>

          <hr />

          {/* <div className="row">
            <div className="col-md-12">
              <h2>Contact Us</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter your email" />
</div>
<div className="form-group">
<label htmlFor="message">Message</label>
<textarea className="form-control" id="message" rows="3"></textarea>
</div>
<button type="submit" className="btn btn-primary">Submit</button>
</form>
</div> */}

</div>
</div>
</div>
</div>
);
}

export default HomePage;
