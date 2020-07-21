import React from 'react';
import "./App.scss";
import Header from "./components/Header/Header";
import Grid from "./components/Grid/Grid";

const App: React.FC = () => {
    return (
        <div className="App">
            <Header />
            <Grid />
        </div>
    );
};

export default App;