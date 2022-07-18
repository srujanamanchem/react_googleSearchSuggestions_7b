import './index.css'

const SuggestionItem = props => {
  const {eachSuggestion, updateSuggestion} = props
  const {suggestion} = eachSuggestion
  const updateSearchValue = () => {
    updateSuggestion(suggestion)
  }
  return (
    <li className="suggestion">
      <p className="suggestion-text">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        className="arrow"
        alt="arrow"
        onClick={updateSearchValue}
      />
    </li>
  )
}

export default SuggestionItem
