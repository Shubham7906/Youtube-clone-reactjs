import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AppContext } from './Context/ContextApi';
import Header from './Components/Header/Header';
import Feed from './Components/Feed/Feed';
import SearchResult from './Components/SearchResult/SearchResult';
import VideoDetails from './Components/VideoDetails/VideoDetails'
const App = () => {
  return(
    <>
      <AppContext><BrowserRouter>
        <div className='flex flex-col h-full'>
          <Header />
          <Routes>
            <Route path='/' exact element={<Feed />} />
            <Route path='/searchResult/:searchQuery' element={<SearchResult />} />
            <Route path='//video/:id' element={<VideoDetails />} />
          </Routes>
        </div>
      </BrowserRouter></AppContext>
    </>
  )
}

export default App;