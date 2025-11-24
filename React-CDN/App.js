import React from 'react';
import ReactDOM from 'react-dom/client';



const Heading = (<div className='heading'> Namste</div>)

const HeaderComponent = () => (
    <div>
        <h1>Component Composistion </h1>
        <Heading />
    </div>
)

const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement);

root.render(<Heading />);

