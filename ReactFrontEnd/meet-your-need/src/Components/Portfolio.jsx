import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

const Portfolio = () => {
  const [categories, setCategories] = useState([]);
  // const [subcategories, setSubcategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [file, setFile] = useState(null);
  const [about, setAbout] = useState('');
  const [price, setPrice] = useState('');
  const [status, setStatus] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/allCategory")
        .then(response => response.json())
        .then(data => { setCategories(data);})
   },[])

  /*const fetchCategories = async () => {
    try {
      const response = await fetch('http://localhost:8080/allCategory');
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };*/
  const [category, setCategory] = useState([])
  const [subcategories, setSubcategories] = useState([])
  const getSkills = (id) => 
    {
        fetch("http://localhost:8080/getBySkillid?skill_id=" +id)
        .then(response => response.json())
        .then(data => { setSubcategories(data); })
     }
     

  // const fetchSubcategories = async (categoryId) => {
  //   try {
  //     const response = await fetch("http://localhost:8080/getBySkillid?id=" +categoryId);
  //     const data = await response.json();
  //     setSubcategories(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleCategoryChange = (event) => {
    const categoryId = event.target.value;
    setSelectedCategory(categoryId);
    setSelectedSubcategory('');
    getSkills(categoryId);
  };

  const handleSubcategoryChange = (event) => {
    setSelectedSubcategory(event.target.value);
    console.log("event.target.value");
  };

  const handleFileUpload = (event) => {
    setFile(event.target.files[0]);
  };
  const handleStatusChange = (val) => {
    setStatus(val);
  }
  const handleAboutChange = (event) => {
    setAbout(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // TODO: Submit the form data to the server
  };
  
  // const sendData = (e) => {
  //   e.preventDefault();
  //   const reqOption = {
  //       method: "post",
  //       headers: { 'content-type': 'application/json' },
  //       body: JSON.stringify({  })
  //   }
  //   fetch("http://localhost:8080/adduser", reqOption)
  //       .then(resp => {
  //           if (resp.ok)
  //               return console.log("user added");
  //           else
  //               throw new Error("server error");
  //       })
  //       .catch((error) => { alert("server error,try after some time") });

//}

  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="category">
              <Form.Label>Category</Form.Label>
              <Form.Control as="select" value={selectedCategory} onChange={handleCategoryChange}>
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category.category_id} value={category.category_id}>
                    {category.category_name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="skill">
              <Form.Label>Skills</Form.Label>
              <Form.Control as="select" value={selectedSubcategory} onChange={handleSubcategoryChange}>
                <option value="">Select a subcategory</option>
                {subcategories.map((subcategory) => (
                  <option key={subcategory.skill_id} value={subcategory.skill_id}>
                    {subcategory.skill_name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="about">
              <Form.Label>About</Form.Label>
              <Form.Control as="textarea" rows={3} value={about} onChange={handleAboutChange} />
            </Form.Group>
            <Form.Group controlId="price">
              <Form.Label>Price per hour</Form.Label>
              <Form.Control type="number" value={price} onChange={handlePriceChange} />
            </Form.Group>
            <Form.Group controlId="file-upload">
              <Form.Label>File Upload</Form.Label>
              <Form.Control type="file" onChange={handleFileUpload }  />
        </Form.Group>
        <Form.Group controlId="formBasicStatus">
              <Form.Label>Status</Form.Label>
              <ToggleButtonGroup type="radio" name="status" value={status} onChange={handleStatusChange}>
                <ToggleButton variant="outline-success" value={true}>Active</ToggleButton>
                <ToggleButton variant="outline-danger" value={false}>Inactive</ToggleButton>
              </ToggleButtonGroup>
            </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Col>
  </Row>
</Container>
  );
    };
  export default Portfolio;