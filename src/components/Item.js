import React, { Component } from 'react';

class Item extends Component {
  render() {
    return (
      <div className='Item'>
       <img src={"/image" + this.props.item.img} alt={this.props.item.title} />

        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.desc}</p>
        <b>{this.props.item.price}</b>
        <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}>+</div>
      </div>
    );
  }
}

export default Item;
