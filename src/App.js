import React from 'react';
import StarField from './StarField';
import TitleCard from './TitleCard';
import Moon from './Moon';
import Ground from './Ground';

class App extends React.Component {

    render() {
        return (
            <div className="background">
                <TitleCard />
                <StarField />
                <Moon />
                <Ground />
            </div>
        );
    }
}

export default App;