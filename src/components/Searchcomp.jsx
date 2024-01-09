import React from 'react'
import "../assets/searchstyle.css"

const Searchcomp = () => {
  return (
    <div className='Search_comp'>
        <div className="text_searech">
        <h1 className='display-3 text-light text-center '>Live Green, Live Luxuriously.</h1>
        <p className='text-center text-light fs-5 my-4'>Discover the advantages of Eco-Friendly Homes with Our Real Estate Agency</p>

        <div className="searrchbar">
          <select id="listing">
            <option value="For Sale">For Sale</option>
          </select>
            <input type="text" />
            <span><i class="fa-solid fa-magnifying-glass"></i></span>
        </div>
        </div>
    </div>
  )
}

export default Searchcomp