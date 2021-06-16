import React from 'react'

function SearchText({textValue}) {
    return (
        <div className="text">
        <input
          type="text"
          name=""
          id=""
          className="textt"
          placeholder="You can search here"
          onChange={textValue}
        />
      </div>
    )
}

export default SearchText
