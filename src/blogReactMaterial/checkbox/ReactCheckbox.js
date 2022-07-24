import { useState } from 'react';

const ReactCheckbox = () => {
    const [isSubscribed, setIsSubscribed] = useState(false);
    const handleChange = event => {
        if (event.target.checked) {
            console.log(event, '✅ Checkbox is checked');
        } else {
            console.log('⛔️ Checkbox is NOT checked');

        }
        setIsSubscribed(current => !current);

    }
    return (
        <div>
            <label htmlFor="subscribe">
                <input
                    type="checkbox"
                    value={isSubscribed}
                    onChange={handleChange}
                    id="subscribe"
                    name="subscribe"
                />
                Subscribe
            </label>
        </div>
    )
};
export default ReactCheckbox;
