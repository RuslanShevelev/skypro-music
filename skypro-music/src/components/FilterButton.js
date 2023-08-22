import { useState } from 'react'
import './CSS/filter.css'

export default function FilterCategory({
  title,
  content,
  isActive,
  setActive,
}) {
  const [visible, setVisible] = useState(false)
  const toggleVisibility = () => setVisible(!visible)

  return (
    <div className="filter-category">
      <button
        type="button"
        className="filter__button button-author _btn-text"
        onClick={() => {
          setActive(title)
          toggleVisibility()
        }}
      >
        {title}
      </button>
      {isActive === title && visible && (
        <div className="filter__popup menu">
          <ul className="filter__list">{content}</ul>
        </div>
      )}
    </div>
  )
}
