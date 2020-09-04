/* eslint-disable react/destructuring-assignment */
// == Import npm
import React, { Component } from 'react';

// == Import
import './app.scss';
import data from '../../data/currencies';
import Header from '../Header/Header';
import Currencies from '../Currencies/Currencies';
import Amount from '../Amount/Amount';
import CustomButton from '../CustomButton/CustomButton';

// == Composant

class App extends Component {
    state = {
      open: false,
      rate: '',
      baseAmount: 1,
      currency: '',
      datas: data,
    };

  handleClick = () => {
    this.setState({
      // eslint-disable-next-line react/no-access-state-in-setstate
      open: !this.state.open,
    });
  }

  getInfos = (e) => {
    const name = e.target.dataset.currency;
    const changeRate = e.target.dataset.rate;
    this.setState({
      rate: changeRate,
      currency: name,
    });
  }

  filterList = (e) => {
    // console.log(this.state.currencyHeight);
    const searchWord = e.target.value.toLowerCase();
    if (searchWord.length > 0) {
      const returnedData = data.filter(
        (searchedWord) => searchedWord.name.toLowerCase().includes(searchWord),
      );
      // eslint-disable-next-line no-unused-expressions
      !this.state.open && this.handleClick();
      this.setState({
        datas: returnedData,
      });
    }
    else {
      // eslint-disable-next-line no-unused-expressions
      this.state.open && this.handleClick();
      this.setState({
        datas: data,
      });
    }
  }

  render() {
    return (
      <div className="app">
        <Header amount={this.state.baseAmount} filterList={this.filterList} />
        <CustomButton open={this.state.open} manageClick={this.handleClick} />
        { this.state.open && (
        <Currencies
          currencies={this.state.datas}
          getInfos={this.getInfos}
        />
        ) }
        {this.state.rate && (
        <Amount
          currency={this.state.currency}
          amount={this.state.baseAmount * this.state.rate}
        />
        )}
      </div>
    );
  }
}

// == Export
export default App;
