import * as React from "react";
import "./styles.scss";

export const NavMenuWrapper = ({
    isOpen,
    handleClick,
    children,
}: {
    isOpen: boolean;
    handleClick: any;
    children: any;
}) => {
    const wrapperRef = React.useRef(null);
    const [menuOpen, setMenuOpen] = React.useState(false);

    const showDelete = (arg: any) => {
        console.log(`delete${arg}`);
        return true;
    };

    const closeMenu = () => {
        console.log(`setMenuOpen(false)`);
        setMenuOpen(false);
    };

    React.useEffect(() => {
        if (isOpen) {
            console.log(` setMenuOpen to (true)`);
            setMenuOpen(true);
        } else {
            console.log(` setMenuOpen to (false)`);
            setMenuOpen(false);
        }
    }, [isOpen]);

    React.useEffect(() => {
        const listener = (event: { target: any }) => {
            // Do nothing if clicking ref's element or descendent elements
            // @ts-ignore
            if (!wrapperRef.current || wrapperRef.current.contains(event.target)) {
                return;
            }
            console.log("event", event.target);
            closeMenu();
        };

        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [wrapperRef]);

    // if (!isOpen) return null;
    //
    // if (!menuOpen) {
    //     return null;
    // }

    if (menuOpen) {
        return (
            <div className="nav-menu-wrapper" ref={wrapperRef}>
                {children}
            </div>
        );
    } else return null;
};
