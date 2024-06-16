import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/Items'; // Добавляем импорт компонента Items

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: 'Стул',
          img:'/image/chairjpg.jpg',
          desc: 'lorem7',
          category: 'chairs',
          price: '50$'
        },
        {
          id: 2,
          title: 'Маленький шкаф',
          img: '/image/hh.jpg', 
          desc: 'lorem5',
          category: 'closet',
          price: '60$'
        },
        {
          id: 3,
          title: 'Кухонный гарнитур',
          img: '/image/images.jpg', 
          desc: 'lorem7',
          category: 'kitchen',
          price: '80$'
        },
        {
          id: 4,
          title: 'Шкаф',
          img: '/image/korpf532-m.jpg',
          desc: 'lorem5',
          category: 'closet',
          price: '90$'
        },
        {
          id: 5,
          title: 'Диван',
          img: '/image/sofa.jpg', 
          desc: 'lorem8',
          category: 'sofa',
          price: '86$'
        },
      ]
    };
    this.addToOrder = this.addToOrder.bind (this)
  }

  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} />
        <Items items={this.state.items} onAdd ={this.addToOrder}/>
        <Footer />
      </div>
    );
  }

  addToOrder(item) {
    this.setState({orders:[...this.state.orders, item]})
  }
}

export default App;
