import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import CreateItem from './Components/item_manage/CreateItem'
import UpdateItem from './Components/item_manage/UpdateItem'
import ListsItems from './Components/item_manage/ListsItems'
import DeleteItem from './Components/item_manage/DeleteItem'


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<ListsItems />} />
          <Route path='/create' element={<CreateItem />} />
          <Route path='/edit/:id' element={<UpdateItem />} />
          <Route path='/delete/:id' element={<DeleteItem />} />
        </Routes>
      </Router>      
    </>
  )
}

export default App
