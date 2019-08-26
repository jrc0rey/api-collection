import React, {Component} from 'react';
import ListItems from './list-items';
import SingleItem from './single-item';
import axios from 'axios';
import _ from 'lodash';

class ItemsBody extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      api_list: {}
    }
  }


componentDidMount(){
  axios.get('/home').then(response => {
    // for(let i=0; i<response.data.length; i++){
    //   console.log(response.data[i])
    // }
    this.setState({
      loading: false,
      api_list: response.data
    })
  })
}

  render(){
    if(this.state.loading === true){
      return(
        <h4>Loading...</h4>
      )
    }
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
