
import styled from "Shared/Styled";
import React from "react";

export const StyledBurger = styled("button")<{ open: boolean }>`
    position: absolute;
    top: 5%;
    left: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;
    span {
        width: 2rem;
        height: 0.25rem;
        background: ${(props) => props.theme.palette.primary.main};
        border-radius: 10px;
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;
        :first-child {
            transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
        }
        :nth-child(2) {
            opacity: ${(props) => (props.open ? "0" : "1")};
            transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
        }
        :nth-child(3) {
            transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
        }
    }
`;

export const Burger = ({}) => {
    const [open, setOpen] = React.useState(false);

    return (
        <StyledBurger
            aria-label="Toggle menu"
            // aria-expanded={isExpanded}
            open={open}
            onClick={() => setOpen(!open)}
        >
            <span />
            <span />
            <span />
        </StyledBurger>
    );
};
