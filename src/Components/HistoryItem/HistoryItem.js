import './index.css'

const HistoryItem = props => {
  console.log(props)
  const {item, deleteItem} = props

  const {id, timeAccessed, logoUrl, title, domainUrl} = item

  return (
    <li>
      <p>{timeAccessed}</p>
      <img src={logoUrl} alt="domain logo" />
      <p>{title}</p>
      <p>{domainUrl}</p>
      <button data-testid="delete" type="button" onClick={() => deleteItem(id)}>
        <img
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
        />
      </button>
    </li>
  )
}
export default HistoryItem
