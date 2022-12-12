import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

let counter = 1

const refresh = () => {
    ReactDOM.createRoot(document.getElementById('root')).render(<App counter={counter} />)
    if (counter == 9) {
        counter = -1
    }
}

setInterval(
    () => {
        refresh()
        counter +=1
    }, 1000
)


