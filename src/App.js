import React from 'react';
import StarField from './StarField';
import TitleCard from './TitleCard';

class App extends React.Component {

    render() {
        return (
            <div className="background">
                <TitleCard />
                <StarField />
            </div>
        );
    }
}

export default App;