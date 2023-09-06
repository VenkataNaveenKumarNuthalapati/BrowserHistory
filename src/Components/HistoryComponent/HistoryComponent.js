import {Component} from 'react'
import HistoryItem from '../HistoryItem/HistoryItem'
import './index.css'

class HistoryComponent extends Component {
  constructor(props) {
    super(props)

    const {initialHistoryList} = props
    this.initialHistoryList = initialHistoryList
    // console.log(props)
    this.state = {
      hList: initialHistoryList,
    }
  }

  deleteItem = itemId => {
    const {hList} = this.state
    const filterList = hList.filter(item => item.id !== itemId)
    this.setState(() => ({hList: filterList}))
  }

  searchHistory = event => {
    // const {hList} = this.state
    const filterList = this.initialHistoryList.filter(item =>
      item.title.toUpperCase().includes(event.target.value.toUpperCase()),
    )
    console.log(filterList)
    this.setState(() => ({hList: filterList}))
  }

  render() {
    const {hList} = this.state

    return (
      <div className="bg-container">
        <nav>
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="searchimage"
            />
            <input
              type="search"
              placeholder="Search history"
              onChange={this.searchHistory}
            />
          </div>
        </nav>
        <div>
          <ul>
            {hList.length !== 0 ? (
              hList.map(item => (
                <HistoryItem
                  item={item}
                  key={item.id}
                  deleteItem={this.deleteItem}
                />
              ))
            ) : (
              <p>There is no history to show</p>
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default HistoryComponent
