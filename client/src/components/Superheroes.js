import React, {useState} from 'react'
import {sendMessage} from '../socketApi';
import ProgressBar from "@ramonak/react-progress-bar";
import {useVote} from '../contexts/VoteContext';

function Superheroes() {
    const { heroes } = useVote();
    const [selectedHero, setSelectedHero] = useState('batman');
    const handleSelect = ({target}) => setSelectedHero(target.value);
    const handleVote = () => {
        sendMessage('new-vote', selectedHero);
    }

    const total = Object.keys(heroes).reduce((previous, key) => previous + heroes[key], 0);

    const getPercent = (key) => {
        return ((heroes[key] * 100) / (total === 0 ? 1 : total)).toFixed(1);
      };
    return (
        <div>
        <h1>{selectedHero}</h1>
            <label>
                <input type="radio" name="option" value="batman" onChange={handleSelect} checked={selectedHero === 'batman'} />Batman ({getPercent('batman')} %)
            </label>
            <ProgressBar 
    completed={heroes['batman']}
    width="30%"
    bgColor="#0a0201"
    labelColor="#e80909"
    />

            <label>
                <input type="radio" name="option" value="spiderman" onChange={handleSelect} checked={selectedHero === 'spiderman'} />Spider-Man  ({getPercent('spiderman')} %)
            </label>
            <ProgressBar 
    completed={heroes['spiderman']}
    width="30%"
    bgColor="#e6250d"
    labelColor="#0935e8"
    />
            <label>
                <input type="radio" name="option" value="superman" onChange={handleSelect} checked={selectedHero === 'superman'} />Superman  ({getPercent('superman')} %)
            </label>
            <ProgressBar 
    completed={heroes['superman']}
    width="30%"
    bgColor="#1ae60d"
    labelColor="#0935e8"
    />
            <button onClick={handleVote} >Vote</button>
        </div>
    )
}

export default Superheroes
