
import { useTaps } from '@/data/store';

import "98.css";

export default function CountButton() {
    const { taps, addTap, removeTap, resetTap } = useTaps((state) => state)
    
    return (
        <>
            <div className="title-bar">
                <div className="title-bar-text">Counter</div>
                    <div className="title-bar-controls">
                        <button aria-label="Minimize" />
                        <button aria-label="Maximize" />
                        <button aria-label="Close" />
                    </div>
                </div>

                <div className="window-body">
                <p style={{ textAlign: "center" }}>Current count: {taps}</p>
                <div className="field-row" style={{ justifyContent: "center" }}>
                    <button onClick={() => addTap() }>+</button>
                    <button onClick={() => removeTap()}>-</button>
                    <button onClick={() => resetTap() }>0</button>
                </div>
            </div>
        </>
    )
}