import React, {Component} from 'react';
import axios from 'axios';




class PostForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ' ',
      description: ' ',
      category: 'utility',
      link: ' '
    }
  }

  changeHandler = (e) => {
  
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  handleOptionChange = (e) => {
    this.setState({
      category: e.target.value
    })
  }

  submitHandler = (e) => {
    e.preventDefault()
    console.log(this.state)
    axios.post('/home', this.state)
    .then(response => {
      console.log(response.data)
    })
  }



  render() {
    const {name, description, category, link} = this.state
    return (
      <div>
        <form>
            <input type="text" name="name" value={name} onChange={this.changeHandler}/>
            <input type="radio" name="category" value={name} onChange={this.changeHandler}/>
        </form>

      </div>
    //   {<div>
    //   <Form onSubmit={this.submitHandler}>
    //     <Form.Group>
    //       <Form.Label>API Name</Form.Label>
    //       <Col className="form-column" sm={3}>
    //         <Form.Control type="text" name="name" value={name} onChange={this.changeHandler}/>
    //       </Col>
    //     </Form.Group>
    //
    //     <Form.Group>
    //       <Form.Label>API Website</Form.Label>
    //       <Col className="form-column" sm={3}>
    //         <Form.Control type="text" name="link" value={link} onChange={this.changeHandler}/>
    //       </Col>
    //     </Form.Group>
    //
    //     <Form.Group>
    //       <Form.Label>
    //         Category:
    //       </Form.Label>
    //       <Col className="form-column" sm={10}>
    //         <Form.Check type="radio" label="Utility" value='utility' checked={category === 'utility'} onChange={this.handleOptionChange}/>
    //         <Form.Check type="radio" label="Design" value='design' checked={category === 'design'} onChange={this.handleOptionChange}/>
    //         <Form.Check type="radio" label="Media" value='media' checked={category === 'media'} onChange={this.handleOptionChange}/>
    //         <Form.Check type="radio" label="Entertainment" value='entertainment' checked={category === 'entertainment'} onChange={this.handleOptionChange}/>
    //         <Form.Check type="radio" label="Government" value='government' checked={category === 'government'} onChange={this.handleOptionChange}/>
    //       </Col>
    //     </Form.Group>
    //
    //     <Form.Group>
    //       <Col className="form-column" sm={3}>
    //         <Form.Label>Description</Form.Label>
    //         <Form.Control as="textarea" rows="3" name="description" value={description} onChange={this.changeHandler}/>
    //       </Col>
    //     </Form.Group>
    //
    //     <Button variant="primary" type="submit" className="hvr-bounce-to-top">Submit</Button>
    //   </Form>
    //
    // </div>}
  )
  }

}

export default PostForm
