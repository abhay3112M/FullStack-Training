import React,{useState} from 'react';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import BookListScreen  from './screens/BookListScreen';
import BookDetailsScreen from './screens/BookDetailsScreen';
import BookAddScreen from './screens/BookAddScreen';
import UserLoginScreen from './screens/UserLoginScreen';
import UserRegistrationScreen from './screens/UserRegistrationScreen';
import {books} from './services/book-service';
import allLocalBook from './services/localBook-service'

const App=({})=>{
     const [screen,selectScreen]=useState("BOOK LIST");
     const [allBooks, updateBooks]=useState([...books,...allLocalBook]);
     const [allUsers,updateUsers] = useState([]);
     const [allRegistrations,updateRegistration] = useState(null);
     const [book,selectBook]=useState(null);

     const handleBookSelect=(book)=>{
          selectBook(book);
          selectScreen("BOOK DETAILS");
     }

     const  handleBookSave=(book)=>{
          localStorage.setItem(book.isbn,JSON.stringify(book));
          updateBooks([...allBooks,...allLocalBook,book]);
          selectScreen("BOOK LIST");
     }

     const handleUsersave=(user)=>{
          updateUsers([...allUsers,user]);
          console.log(allUsers);
     }

     const handleRegistrationsave=(item)=>{
          updateRegistration([...allRegistrations,item]);
          console.log(allRegistrations);
     }


    return <div className="App">
               <AppHeader title="World Wide Books" navigate={selectScreen} />
               <div className='Screen'>

                    <BookListScreen books={allBooks} onBookSelect={handleBookSelect}  visibility={screen==="BOOK LIST"}/>                    
                    <BookDetailsScreen book={book} visibility={screen==="BOOK DETAILS"}/>
                    <BookAddScreen onBookSave={handleBookSave} visibility={screen==="BOOK ADD"}/>
                    <UserLoginScreen onUserLogin={handleUsersave} visibility={screen==="USER LOGIN"}/>
                    <UserRegistrationScreen onRegistration={handleRegistrationsave} visibility={screen==="USER REGISTER"}/>
                   
               </div>
               <AppFooter />
            </div>
};

export default App;