import AppHeader from './components/AppHeader';
import Game from './components/Game';
import ScoreBoard from './components/ScoreBoard';

const App=(props)=>{

    return (
        <div className='app'>
            <AppHeader title="Tic Tac Toe Extreme"/>
            <Game/>
            <ScoreBoard/>
        </div>
    )
};


export default App;
