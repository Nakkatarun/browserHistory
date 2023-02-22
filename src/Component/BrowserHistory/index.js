import {Component} from 'react'
import HistoryItem from '../HistoryItem'
import './index.css'

class BrowserHistory extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {initialHistoryList} = this.props
    const {searchInput} = this.state
    const filteredHistoryList = initialHistoryList.filter(each =>
      each.name.includes(searchInput),
    )

    return (
      <div className="bg-container">
        <div className="header-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search-icon"
            />
            <input
              type="search"
              className="search-input"
              placeholder="search history"
              onChange={this.onChangeSearchInput}
            />
          </div>
        </div>
        <ul className="browser-history-container">
          {initialHistoryList.map(eachItem => (
            <HistoryItem item={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default BrowserHistory
