import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const {cockTails, loading} = useGlobalContext()
  if (loading) {
    return <Loading />
  }

  if (cockTails.length < 1) {
    return <h2 className='section-title'>
      no cocktails matches your search criteria
    </h2>
  }
  return (
    <section>
      <h2 className='section-title'>cocktails</h2>
      <div className='cocktails-center'>
        {cockTails.map(item => {
          return <Cocktail key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}

export default CocktailList
