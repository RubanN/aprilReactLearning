import React, { useState } from 'react';
import Picker from 'emoji-picker-react';

const EmojiPicker = () => {
    const [inputStr, setInputStr] = useState('');
    const [showPicker, setShowPicker] = useState(false);
    const onEmojiClick = (emojiObject) => {
        setInputStr(prev => prev + emojiObject.emoji);
        setShowPicker(false)
    }
    return (
        <div>
            <div className="picker-container">
                <input
                    value={inputStr}
                    onChange={e => setInputStr(e.target.value)}
                />
                <img src="https://icons.getbootstrap.com/assets/icons/emoji-smile.svg"
                    onClick={() => setShowPicker(val => !val)}
                />
                {showPicker && <Picker
                    pickerStyle={{ width: '100%' }}
                    onEmojiClick={onEmojiClick}
                />}
            </div>
        </div>
    )
}

export default EmojiPicker