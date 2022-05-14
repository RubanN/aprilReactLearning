import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCircle, faCheckCircle, faPlus } from '@fortawesome/free-solid-svg-icons';
import './style.css'

const ShoppingAp = () => {
    const [items, setItems] = useState([
        { itemName: 'item 1', quantity: 1, isSelected: false },
        { itemName: 'item 2', quantity: 3, isSelected: true },
        { itemName: 'item 3', quantity: 2, isSelected: false },
    ]);
    const [inputValue, setInputValue] = useState('');
    const [totalItemCount, setTotalItemCount] = useState(6);
    const handleAddCart = () => {
        const newAddCart = {
            itemName: inputValue,
            quantity: 1, isSelected: false
        }
        const newCartList = [...items, newAddCart]
        setItems(newCartList)
        setInputValue("")
    }
    const handleQuantityIncrease = (index) => {
        const newItems = [...items]
        newItems[index].quantity++;
        setItems(newItems)

    }
    const handleQuantityDecrease = (index) => {
        const newItems = [...items]
        newItems[index].quantity--;
        setItems(newItems)
    }
    const toggleComplete = (index) => {
        const newItems = [...items]
        newItems[index].isSelected = !newItems[index].isSelected
        setItems(newItems)
    }


    return (
        <div className='app-background'>
            <div className='main-container'>
                <div className='add-item-box'>
                    <input value={inputValue}
                        onChange={(event) => setInputValue(event.target.value)}
                        className='add-item-input' placeholder='Add an item...'
                    />
                    <FontAwesomeIcon icon={faPlus} onClick={() => handleAddCart()}></FontAwesomeIcon>
                </div>
                < div className="item-list" >
                    {items.map((item, index) => (
                        <div className="item-container">
                            <div className="item-name" onClick={() => toggleComplete(index)}>

                                {item.isSelected ? (
                                    <>
                                        <FontAwesomeIcon icon={faCheckCircle} />
                                        <span className='completed'>{item.itemName}</span>

                                    </>
                                ) : (
                                    <>
                                        <FontAwesomeIcon icon={faCircle} />
                                        <span>{item.itemName}</span>
                                    </>
                                )}

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ShoppingAp