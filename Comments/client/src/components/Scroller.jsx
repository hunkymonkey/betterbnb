import React from 'react';
import styles from '../styles/index.css';
import { PageButton } from './PageButton.jsx';

class Scroller extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      page: 1,
    }

    this.setCurrentPage = this.setCurrentPage.bind(this);
    this.previousButton = this.previousButton.bind(this);
    this.nextButton = this.nextButton.bind(this);

  }
  
  setCurrentPage(num) {
    this.setState({page: num,}, () => {
      this.render();
    });
    this.props.setNewComments(num);
  }

  previousButton() {
    let pageNum = this.state.page - 1;
    this.setState({page: pageNum} , () => {
      this.render();
    })
    this.props.setNewComments(pageNum);
  }

  nextButton() {
    let pageNum = this.state.page + 1;
    this.setState({page: pageNum} , () => {
      this.render();
    })
    this.props.setNewComments(pageNum);
  }

  render() {
    if (this.props.pages) {
      return (
        <div className = {styles.scroller}>
          <ul className = {styles.scrollerList}>
            {this.state.page !== 1 ? <div className = {styles.pageButton}><li className = {styles.PageButtonList}><button onClick = {this.previousButton}><img src = 'http://icons.veryicon.com/256/System/Android%201/Arrow%20previous.png'></img></button></li></div> : null}
            {this.props.pages.map((page) => {
              if ((this.state.page === 1 && page[0] === 3) || page[0] === 1 || (page[0] > this.state.page - 2 && page[0] < this.state.page + 2) || page[0] === this.props.pages.length || (this.state.page === this.props.pages.length && page[0] === this.props.pages.length - 2)) {
                return <PageButton key = {page[0]} page = {page[1]} setPage = {this.setCurrentPage}/>
              }
            })}
            {this.state.page !== this.props.pages.length ? <div className = {styles.pageButton}><li className = {styles.PageButtonList}><button onClick = {this.nextButton}><img src = 'http://icons.veryicon.com/256/System/Android%201/Arrow%20next.png'></img></button></li></div> : null}
          </ul>
        </div>
      )
    } else {
      return (
        <div>loading...</div>
      )
    }
  }
}

module.exports.Scroller = Scroller;