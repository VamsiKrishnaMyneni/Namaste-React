import React from 'react';
import ReactDOM from 'react-dom/client';

import './App.css';


const Header = () => {
    const styles = {
        header: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 20px',
            background: '#222',
            color: '#fff',
            fontFamily: 'Segoe UI, Roboto, Arial, sans-serif'
        },
        logo: { fontWeight: 700, fontSize: 20 },
        nav: { display: 'flex', gap: 16 },
        link: { color: '#fff', textDecoration: 'none', fontSize: 16 }
    };

    return (
        <header style={styles.header}>
            <div style={styles.logo}>Eat&Go</div>
            <nav style={styles.nav}>
                <a style={styles.link} href="#">Home</a>
                <a style={styles.link} href="#">About</a>
                <a style={styles.link} href="#">Contact</a>
            </nav>
        </header>
    );
};

const RestaurantCard = () => {
    return (
        <div className="restro-card">
            <img alt='restro-log' className="restro-logo" src="https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/1/31/f749e8a3-c466-4587-ad36-48e51fa68709_image0e69a0e0abefd4632a64e8fd55698200f.JPG" />
            <h3 className='restro-name'>Meghana Foods   </h3>
            <h5>Biryani, North Indian, Asian</h5>
            <h4>4.4 ⭐  •  30 mins  •  ₹500 for two</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search"> Search </div>
            <div className="restaurant-list"> <RestaurantCard /> <RestaurantCard /> <RestaurantCard /> <RestaurantCard /> <RestaurantCard /> </div>
        </div>
    )
}

const App = () => {
    return (
        <div className='app'> <Header /> <Body /></div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);