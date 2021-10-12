import React, {useEffect} from 'react'
import { conncetSocket, subscribeToNewMessages } from '../socketApi';
import Question from './Question';
import Superheroes from './Superheroes';
import { useVote } from '../contexts/VoteContext'
 

function Container() {
    const {setHeroes} = useVote();
    useEffect(() => {

conncetSocket();
subscribeToNewMessages((data) => {
    setHeroes(data);
});
    }, [setHeroes]);
    return (
        <div>
            <Question />
            <Superheroes />
        </div>
    )
}

export default Container
