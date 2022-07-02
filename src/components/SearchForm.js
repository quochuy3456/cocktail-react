import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {setSearch} = useGlobalContext()
  const searchValue = React.useRef('')

  React.useEffect(() => {
    searchValue.current.focus()
  }, [])

  const searchCocktail = () => {
    setSearch(searchValue.current.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
  }

  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>Search your favorute cocktail</label>
          <input type='text' ref={searchValue} id='name' onChange={searchCocktail} />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
