import React, { createContext, useEffect, useState } from 'react';

export const mouse_context = createContext();
const CursorContext = ({ children }) => {
    const [mousePosition, setmousePosition] = useState({
        x: 0,
        y: 0
    });

    //   console.log(mousePosition);
    useEffect(() => {
        const mouseMove = (e) => {
            setmousePosition({
                x: e.clientX,
                y: e.clientY
            })
        }

        window.addEventListener('mousemove', mouseMove)
        return () => {
            window.removeEventListener('mousemove', mouseMove)
        }
    }, [])

    const variants = {
        default: {
            x: mousePosition.x - 10,
            y: mousePosition.y - 10,
        },
        element: {
            height: 90,
            width: 90,
            x: mousePosition.x - 40,
            y: mousePosition.y - 40,
            backgroundColor: "yellow",
            mixBlendMode: "difference",
        }
    }
    const [cursorVariant, setCursorVariant] = useState('default')

    const onEnter = () => setCursorVariant('element');
    const onLeave = () => setCursorVariant('default');

    const value = {
        cursorVariant,
        variants,
        onEnter,
        onLeave
    }
    return <mouse_context.Provider value={value}>{children}</mouse_context.Provider>
};

export default CursorContext;
