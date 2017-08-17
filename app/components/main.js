import React from 'react';
import Items from './items';
import LeftNavbar from './leftNavbar';
import Comments from './comments';
import DefaultItems  from '../defaultItems';

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      items: [],
      activeItem: 0
    }
  }
  componentWillMount() {
    this.fetchItems();
  }

  fetchItems() {
    const items = JSON.parse(localStorage.getItem('Items')) || DefaultItems;
    if (!JSON.parse(localStorage.getItem('Items'))) {
      localStorage.setItem('Items', JSON.stringify(DefaultItems));
    }
    this.setState({ items });
  }
  addItem(item) {
    let oldItems =JSON.parse(localStorage.getItem('Items')),
      newItem = { name: item, comments: [] };

    oldItems.push(newItem);
    let newItems= localStorage.setItem('Items', JSON.stringify(oldItems));
    this.setState({items: JSON.parse(localStorage.getItem('Items'))});
  }

  removeItem(itemIndex) {
    let oldItems =JSON.parse(localStorage.getItem('Items'));
    oldItems.splice(itemIndex, 1);
    let newItems= localStorage.setItem('Items', JSON.stringify(oldItems));
    this.setState({items: JSON.parse(localStorage.getItem('Items'))});
  }

  addComment(itemIndex, comment) {
    let oldItems =JSON.parse(localStorage.getItem('Items'));
    oldItems[itemIndex].comments.push(comment);
    let newItems= localStorage.setItem('Items', JSON.stringify(oldItems));
    this.setState({items: JSON.parse(localStorage.getItem('Items'))});
  }
  
  changeActiveItem(index) {
    this.setState({activeItem: index});
  }

  render() {
  	return (
    <div className="main">
      <LeftNavbar />
      <div className="items-and-comments">
        <Items items={this.state.items} 
          addItem={item => this.addItem(item)}
          removeItem={itemIndex => this.removeItem(itemIndex)}
          activeItem={this.state.activeItem}
          changeActiveItem={index => this.changeActiveItem(index)} />
        <Comments
          activeItem={this.state.items !== [] ?  this.state.items[this.state.activeItem] : null}
          activeItemIndex={this.state.items !== [] ? this.state.activeItem : null}
          addComment={ (itemIndex, comment) => this.addComment(itemIndex, comment)} />
      </div>
    </div>  
    );
  }
}

export default Main;