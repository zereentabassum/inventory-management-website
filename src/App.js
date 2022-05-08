import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Components/Blogs/Blogs';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import Signup from './Components/Signup/Signup';
import Footer from './Components/Footer/Footer';
import ItemDetails from './Components/ItemDetails/ItemDetails';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import ManageItems from './Components/ManageItems/ManageItems';
import AddItem from './Components/AddItem/AddItem';
import MyItems from './Components/MyItems/MyItems';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/blogs' element={<Blogs></Blogs>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/signup' element={<Signup></Signup>}></Route>
       <Route path='/item/:_id' element={
       <RequireAuth>
          <ItemDetails></ItemDetails>
       </RequireAuth>
       }></Route>
       <Route path='/manageItems' element={<RequireAuth>
         <ManageItems></ManageItems>
       </RequireAuth>}></Route>
       <Route path='/addItem' element={<RequireAuth>
         <AddItem></AddItem>
       </RequireAuth>}></Route>
       <Route path='/myItems' element={<RequireAuth>
         <MyItems></MyItems>
       </RequireAuth>}></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
