import React from 'react';
import StarField from './StarField';
import TitleCard from './TitleCard';
import Ground from './Ground';

class App extends React.Component {

    render() {
        return (
            <div className="background">
                <TitleCard />
                <StarField />
                <Ground />
            </div>
        );
    }
}

export default App;