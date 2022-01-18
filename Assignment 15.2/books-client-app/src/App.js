import React from 'react';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import BookListScreen  from './screens/BookListScreen';
import BookDetailsScreen from './screens/BookDetailsScreen';
import BookListInfoScreen from './screens/BookListInfoScreen';
import AuthorListInfoScreen from './screens/AuthorListInfoScreen';
import BookRecommendationScreen from './screens/BookRecommendationScreen';
import NotFoundScreen from './screens/NotFoundScreen';
import BookHomeScreen from './screens/BookHomeScreen';
import LoginScreen from './screens/LoginScreen';
import AddNewBookScreen from './screens/AddNewBookScreen';



const App=({})=>{

    return <div className="App">
               <AppHeader title="World Wide Books" />
               <div className='Screen'>

                    {/* <BookListInfoScreen/> 
                    <AuthorListInfoScreen/>
                    <BookRecommendationScreen/> 
                    <NotFoundScreen/>
                    <BookHomeScreen/>
                    <LoginScreen/>
                    <AddNewBookScreen/> */}
                    <BookListScreen/> 
               </div>
               <AppFooter />
            </div>
};

export default App;