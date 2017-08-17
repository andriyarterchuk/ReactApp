import React from 'react';

class Items extends React.Component {
	constructor(props){
    super(props);
    this.state = {
      itemName: '',
      showWarning: false,    
    }
  }

  renderItems(items) {
    return items.map((item,index) => {
      let classList = this.props.activeItem === index ? 'items-item active' : 'items-item';

      return (
        <div key={index} className={classList} onClick={() =>this.props.changeActiveItem(index)} >
          <div className="item-info">
            <h3 className='item-title'>{item.name}</h3>
            <div className='item-comments-count'>{item.comments.length}</div>
          </div>
          <button className='item-delete-comments' onClick={() => this.props.removeItem(index)}>Delete</button>  
        </div>
      );
    });   
  }

  addItem() {
     this.props.addItem(this.state.itemName);
     this.setState({itemName: '', showWarning: false})
  }
  renderAddItemButton() {
    if ( this.state.itemName === '') {
      return <button  className='items-add-button' onClick={() => this.setState({showWarning: true})}>Add new</button>;
    };
    return <button className='items-add-button' onClick={() => this.addItem()}>Add new</button>;
  }

  renderWarning() {
    return ( this.state.itemName === '' && this.state.showWarning === true) ? <div className="items-warning">Name can't be blank</div> : null;
  } 
  render() {
	return (
    <div className='items'>
      <h1 className='items-title'>Items</h1>
      <div className='items-input'>
        <input type='text' className='items-name' name='item-name' value={this.state.itemName} onChange={ e => this.setState({itemName: e.target.value})} placeholder='Type name here...' /> 
        {this.renderAddItemButton()}
      </div>
      {this.renderWarning()}
      {this.renderItems(this.props.items)}
    </div>
	  );
  }
}
export default Items;