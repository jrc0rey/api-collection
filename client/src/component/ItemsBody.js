import React, {Component} from 'react';
import ListItems from './ListItems';
import SingleItem from './single-item';
import axios from 'axios';
import _ from 'lodash';

class ItemsBody extends Component {
  constructor(props){
    super(props);
    this.state = {
      api_list: {}
    }
  }


componentDidMount(){
  axios.get('/home').then(response => {
    this.setState({
      api_list: response.data
    })
  })
}

componentDidUpdate(){
  axios.get('/home').then(response => {
    this.setState({
      api_list: response.data
    })
  })
}

  render(){
    return(
    <ListItems>
      {this.renderSingleItem()}
    </ListItems>
  )
  }

renderSingleItem(){
  const list = this.state.api_list;
  return _.map(list, item => {
    return(
          <SingleItem  key={item.id} category={item.category} title={item.name} description={item.description} link={item.link} />
    )
  })
}

};

export default ItemsBody;
