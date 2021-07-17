import React, { useState, useRef, createRef } from 'react';
import classNames from "classnames"
import PropTypes from "prop-types"
import './Tooltip.scss'

const Tooltip = ({ className, children, messageStyle, messageMinWidth }) => {
    const [isToggleHovered, setIsToggleHovered] = useState(false)
    const [isToggleLocked, setIsToggleLocked] = useState(false)
    const toggleRef = useRef()
    const messageRef = useRef()

    const onMouseEnter = e => {
        setIsToggleHovered(true)
    }

    const onMouseLeave = e => {
        setIsToggleHovered(false)
    }

    const onMouseClick = e => {
        setIsToggleLocked(!isToggleLocked);
    }

    let toggleWidth = toggleRef.current && toggleRef.current.clientWidth;
    let toggleHeight = toggleRef.current && toggleRef.current.clientHeight;
    let messageWidth = messageRef.current && messageRef.current.clientWidth;
    let messageHeight = messageRef.current && messageRef.current.clientHeight;

    return (
        <div className={classNames("UiTooltip", className)}>
            <div className={classNames("UiTooltip__toggle", { "UiTooltip__toggle--active": isToggleLocked })}
                onMouseLeave={onMouseLeave}
                onMouseEnter={onMouseEnter}
                onClick={onMouseClick}
                ref={toggleRef} >
                {children[0]}
            </div>
            <div className={classNames("UiTooltip__message", `UiTooltip__message--${messageStyle}`)}
                ref={messageRef}
                style={{
                    minWidth: messageMinWidth,
                    opacity: isToggleHovered || isToggleLocked ? 1 : 0,
                    zIndex: isToggleHovered || isToggleLocked ? 100 : -1,
                    transform: `translate(-${messageWidth / 2 - toggleWidth / 2}px, -${messageHeight + toggleHeight + 5}px)`,
                }}>
                {children[1]}
            </div>
        </div>
    )
}


Tooltip.propTypes = {
    children: PropTypes.array,
    className: PropTypes.string,
    messageStyle: PropTypes.string,
    messageMinWidth: PropTypes.number,
}

Tooltip.defaultProps = {
    messageStyle: "default",
    messageMinWidth: 230,
}

export default Tooltip