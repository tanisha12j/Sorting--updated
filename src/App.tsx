// State
import { GlobalProvider } from './store/GlobalState';
// Components
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Mainbar from './components/mainbar';
// css-loader
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <GlobalProvider>
                    <Navbar />
                    <div className="both-bars">
                        <Mainbar />
                        <Sidebar />
                    </div>
    
                </GlobalProvider>
            </header>
        </div>
    );
}

export default App;