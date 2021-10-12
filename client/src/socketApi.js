import { io } from 'socket.io-client';

let socket;
export const conncetSocket = () => {
    console.log("connecting");
    socket = io(process.env.REACT_APP_BACKEND_ENDPOINT, {transports: ['websocket']});
    socket.on('connect', () => {

        console.log('connected');
    });
    socket.on('connect_error', () => {
        console.error('failed');
    })

};

export const sendMessage = (topic, data) => {
    if(!socket){
        return false;
    }
    socket.emit(topic,data);
};

export const subscribeToNewMessages = (cb) =>{
    if(!socket){
        return false;
    }
    socket.on('new-message', (message) => {
        cb(message);
    });
};