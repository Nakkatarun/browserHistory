import './index.css'

const HistoryItem = props => {
  const {item, deleteHistoryItem} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = item

  const onDelete = () => {
    deleteHistoryItem(id)
  }

  return (
    <li className="history-items-container">
      <p className="time">{timeAccessed}</p>
      <div className="web-history">
        <div className="app-details-container">
          <img src={logoUrl} className="domain-logo" alt="domain logo" />
          <div className="app-name-container">
            <p className="app-name">{title}</p>
            <p className="url-name">{domainUrl}</p>
          </div>
        </div>
        <div>
          <button type="button" className="button" onClick={onDelete}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
              className="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default HistoryItem
