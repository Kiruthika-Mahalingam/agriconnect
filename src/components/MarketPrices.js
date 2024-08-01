/*
import React, { useState } from 'react';
import './MarketPrices.css';

const MarketPrices = () => {
    const [category, setCategory] = useState('default');

    const showPrices = (category) => {
        setCategory(category);
    };

    const renderContent = () => {
        switch (category) {
            case 'vegetables':
                return (
                    <div className="v">
                        <div className="veg carrot">
                            <img src="..assets/vegphotos/carrot.jpeg" alt="Carrot" />
                            <p>Carrot</p>
                            <p className="price">$2.00/kg</p>
                        </div>
                        <div className="veg cucumber">
                            <img src="..assets/vegphotos/cucumber.jpeg" alt="Cucumber" />
                            <p>Cucumber</p>
                            <p className="price">$1.50/kg</p>
                        </div>
                        <div className="veg tomato">
                            <img src="..assets/vegphotos/tomato.jpeg" alt="Tomato" />
                            <p>Tomato</p>
                            <p className="price">$2.20/kg</p>
                        </div>
                        <div className="veg potato">
                            <img src="..assets/vegphotos/potato.jpeg" alt="Potato" />
                            <p>Potato</p>
                            <p className="price">$3.00/kg</p>
                        </div>
                        <div className="veg cauliflower">
                            <img src="..assets/vegphotos/cauliflower.jfif" alt="Cauliflower" />
                            <p>Cauliflower</p>
                            <p className="price">$3.00/kg</p>
                        </div>
                        <div className="veg brocolli">
                            <img src="..assets/vegphotos/brocolli.jpg" alt="Broccoli" />
                            <p>Broccoli</p>
                            <p className="price">$5.00/kg</p>
                        </div>
                    </div>
                );
            case 'fruits':
                return (
                    <div className="fr">
                        <div className="fruit">
                            <img src="..assets/fruitphotos/apples.jfif" alt="Apples" />
                            <p>Apples</p>
                            <p className="price">$2.00/kg</p>
                        </div>
                        <div className="fruit">
                            <img src="..assets/fruitphotos/oranges.jpg" alt="Oranges" />
                            <p>Oranges</p>
                            <p className="price">$1.50/kg</p>
                        </div>
                        <div className="fruit">
                            <img src="..assets/fruitphotos/pears.jfif" alt="Pears" />
                            <p>Pears</p>
                            <p className="price">$2.20/kg</p>
                        </div>
                        <div className="fruit">
                            <img src="..assets/fruitphotos/grapes.jpg" alt="Grapes" />
                            <p>Grapes</p>
                            <p className="price">$3.00/kg</p>
                        </div>
                        <div className="fruit">
                            <img src="..assets/fruitphotos/lemons.jfif" alt="Lemons" />
                            <p>Lemons</p>
                            <p className="price">$3.00/kg</p>
                        </div>
                    </div>
                );
            case 'dairy':
                return (
                    <div className="d">
                        <div className="dairy">
                            <img src="..assets/dairyphotos/cheese.webp" alt="Cheese" />
                            <p>Cheese</p>
                            <p className="price">$5.00/kg</p>
                        </div>
                        <div className="dairy">
                            <img src="..assets/dairyphotos/cowmilk.webp" alt="Cow Milk" />
                            <p>Cow Milk</p>
                            <p className="price">$1.00/l</p>
                        </div>
                        <div className="dairy">
                            <img src="..assets/dairyphotos/curd.webp" alt="Curd" />
                            <p>Curd</p>
                            <p className="price">$2.00/kg</p>
                        </div>
                        <div className="dairy">
                            <img src="..assets/dairyphotos/goatmilk.webp" alt="Goat Milk" />
                            <p>Goat Milk</p>
                            <p className="price">$3.00/l</p>
                        </div>
                        <div className="dairy">
                            <img src="..assets/dairyphotos/paneer.jpg" alt="Paneer" />
                            <p>Paneer</p>
                            <p className="price">$4.00/kg</p>
                        </div>
                    </div>
                );
            case 'meat':
                return (
                    <div className="d">
                        <div className="dairy">
                            <img src="..assets/meatphotos/chicken.webp" alt="Chicken" />
                            <p>Chicken</p>
                            <p className="price">$5.00/kg</p>
                        </div>
                        <div className="dairy">
                            <img src="..assets/meatphotos/fish.webp" alt="Fish" />
                            <p>Fish</p>
                            <p className="price">$1.00/l</p>
                        </div>
                        <div className="dairy">
                            <img src="..assets/meatphotos/beef.jpg" alt="Beef" />
                            <p>Beef</p>
                            <p className="price">$2.00/kg</p>
                        </div>
                        <div className="dairy">
                            <img src="..assets/meatphotos/mutton.jfif" alt="Mutton" />
                            <p>Mutton</p>
                            <p className="price">$3.00/l</p>
                        </div>
                        <div className="dairy">
                            <img src="..assets/meatphotos/pork.jfif" alt="Pork" />
                            <p>Pork</p>
                            <p className="price">$4.00/kg</p>
                        </div>
                    </div>
                );
           default:
                return <h2>Select a category to view prices</h2>;
        }
    };

    return (
        <div className="mp">
        <div className="container">
            <div className="sidebar">
                <div className="item" onClick={() => showPrices('vegetables')}>
                    <img src="..assets/veggies.jpg" alt="Vegetables" />
                    <p>Vegetables</p>
                </div>
                <div className="item" onClick={() => showPrices('fruits')}>
                    <img src="..assets/fruits.jpeg" alt="Fruits" />
                    <p>Fruits</p>
                </div>
                <div className="item" onClick={() => showPrices('dairy')}>
                    <img src="..assets/dairy.jpeg" alt="Dairy Products" />
                    <p>Dairy Products</p>
                </div>
                <div className="item" onClick={() => showPrices('meat')}>
                    <img src="..assets/meat.jpeg" alt="Meat Products" />
                    <p>Meat Products</p>
                </div>
            </div>
            <div className="content">
                {renderContent()}
            </div>
        </div>
        </div>
    );
};

export default MarketPrices;
*/




import React, { useState } from 'react';
import './MarketPrices.css';

const MarketPrices = () => {
    const [category, setCategory] = useState('default');

    const showPrices = (category) => {
        console.log("Category selected:", category); // Debugging line
        setCategory(category);
    };

    const renderContent = () => {
        switch (category) {
            case 'vegetables':
                return (
                    
                    <div className="v_mp">
                        {/* Use correct paths for images */}
                        <div className="veg_mp carrot">
                            <img src="/images/vegphotos/carrot.jpeg" alt="Carrot" />
                            <p>Carrot</p>
                            <p className="price">$2.00/kg</p>
                        </div>
                        <div className="veg_mp cucumber">
                            <img src="/images/vegphotos/cucumber.jpeg" alt="Cucumber" />
                            <p>Cucumber</p>
                            <p className="price">$1.50/kg</p>
                        </div>
                        <div className="veg_mp tomato">
                            <img src="/images/vegphotos/tomato.jpeg" alt="Tomato" />
                            <p>Tomato</p>
                            <p className="price">$2.20/kg</p>
                        </div>
                        <div className="veg_mp potato">
                            <img src="/images/vegphotos/potato.jpeg" alt="Potato" />
                            <p>Potato</p>
                            <p className="price">$3.00/kg</p>
                        </div>
                        <div className="veg_mp cauliflower">
                            <img src="/images/vegphotos/cauliflower.jfif" alt="Cauliflower" />
                            <p>Cauliflower</p>
                            <p className="price">$3.00/kg</p>
                        </div>
                        <div className="veg_mp brocolli">
                            <img src="/images/vegphotos/brocolli.jpg" alt="Broccoli" />
                            <p>Broccoli</p>
                            <p className="price">$5.00/kg</p>
                        </div>
                    </div>
                );
            case 'fruits':
                return (
                    <div className="fr_mp">
                        {/* Use correct paths for images */}
                        <div className="fruit_mp">
                            <img src="/images/fruitphotos/apples.jfif" alt="Apples" />
                            <p>Apples</p>
                            <p className="price">$2.00/kg</p>
                        </div>
                        <div className="fruit_mp">
                            <img src="/images/fruitphotos/oranges.jpg" alt="Oranges" />
                            <p>Oranges</p>
                            <p className="price">$1.50/kg</p>
                        </div>
                        <div className="fruit_mp">
                            <img src="/images/fruitphotos/pears.jfif" alt="Pears" />
                            <p>Pears</p>
                            <p className="price_mp">$2.20/kg</p>
                        </div>
                        <div className="fruit_mp">
                            <img src="/images/fruitphotos/grapes.jpg" alt="Grapes" />
                            <p>Grapes</p>
                            <p className="price_mp">$3.00/kg</p>
                        </div>
                        <div className="fruit_mp">
                            <img src="/images/fruitphotos/lemons.jfif" alt="Lemons" />
                            <p>Lemons</p>
                            <p className="price_mp">$3.00/kg</p>
                        </div>
                    </div>
                );
            case 'dairy':
                return (
                    <div className="d_mp">
                        {/* Use correct paths for images */}
                        <div className="dairy_mp">
                            <img src="/images/dairyphotos/cheese.webp" alt="Cheese" />
                            <p>Cheese</p>
                            <p className="price_mp">$5.00/kg</p>
                        </div>
                        <div className="dairy_mp">
                            <img src="/images/dairyphotos/cowmilk.webp" alt="Cow Milk" />
                            <p>Cow Milk</p>
                            <p className="price_mp">$1.00/l</p>
                        </div>
                        <div className="dairy_mp">
                            <img src="/images/dairyphotos/curd.webp" alt="Curd" />
                            <p>Curd</p>
                            <p className="price_mp">$2.00/kg</p>
                        </div>
                        <div className="dairy_mp">
                            <img src="/images/dairyphotos/goatmilk.webp" alt="Goat Milk" />
                            <p>Goat Milk</p>
                            <p className="price_mp">$3.00/l</p>
                        </div>
                        <div className="dairy_mp">
                            <img src="/images/dairyphotos/paneer.jpg" alt="Paneer" />
                            <p>Paneer</p>
                            <p className="price_mp">$4.00/kg</p>
                        </div>
                    </div>
                );
            case 'meat':
                return (
                    <div className="d_mp">
                        {/* Use correct paths for images */}
                        <div className="dairy_mp">
                            <img src="/images/meatphotos/chicken.webp" alt="Chicken" />
                            <p>Chicken</p>
                            <p className="price_mp">$5.00/kg</p>
                        </div>
                        <div className="dairy_mp">
                            <img src="/images/meatphotos/fish.webp" alt="Fish" />
                            <p>Fish</p>
                            <p className="price_mp">$1.00/l</p>
                        </div>
                        <div className="dairy_mp">
                            <img src="/images/meatphotos/beef.jpg" alt="Beef" />
                            <p>Beef</p>
                            <p className="price_mp">$2.00/kg</p>
                        </div>
                        <div className="dairy_mp">
                            <img src="/images/meatphotos/mutton.jfif" alt="Mutton" />
                            <p>Mutton</p>
                            <p className="price_mp">$3.00/l</p>
                        </div>
                        <div className="dairy_mp">
                            <img src="/images/meatphotos/pork.jfif" alt="Pork" />
                            <p>Pork</p>
                            <p className="price_mp">$4.00/kg</p>
                        </div>
                    </div>
                );
            default:
                return <h2>Select a category to view prices</h2>;
        }
    };

    return (
        <div className="mp">
            <div className="container_mp">
                <div className="sidebar_mp">
                    <div className="item_mp" onClick={() => showPrices('vegetables')}>
                        <img src="/images/veggies.jpg" alt="Vegetables" />
                        <p>Vegetables</p>
                    </div>
                    <div className="item_mp" onClick={() => showPrices('fruits')}>
                        <img src="/images/fruits.jpeg" alt="Fruits" />
                        <p>Fruits</p>
                    </div>
                    <div className="item_mp" onClick={() => showPrices('dairy')}>
                        <img src="/images/dairy.jpeg" alt="Dairy Products" />
                        <p>Dairy Products</p>
                    </div>
                    <div className="item_mp" onClick={() => showPrices('meat')}>
                        <img src="/images/meat.jpeg" alt="Meat Products" />
                        <p>Meat Products</p>
                    </div>
                </div>
                <div className="content_mp">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

export default MarketPrices;
