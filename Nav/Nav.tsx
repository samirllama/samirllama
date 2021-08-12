import styled from "Shared/Styled";
import React, { ReactChild } from "react";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import { StaticContext } from "react-router";
import { DrawerToggleConnector } from "src/components/shared/DrawerToggle/DrawerToggleContainer.ts";
import "./Nav.scss";
import ExpandIcon from "src/components/icons/Expand";

interface NavProps
    extends RouteComponentProps<{}, StaticContext, { to: { pathname: string; state?: { vin?: string } } }> {
    path: { pathname: string; state?: any };
    title: string;
    toggleGPC: () => void;
    isCurrentlyOpen: boolean;
    children?: ReactChild;
}

export const Nav: React.FunctionComponent<NavProps> = (props) => {
    const { children, isCurrentlyOpen, location, path, title, toggleGPC } = props;

    // Leaves the drawer open if a user is moving from the GPC to the TradeIn component.
    const handleClick = (to: { pathname: string }) => () => {
        if (to.pathname === "/my-garage" && isCurrentlyOpen) {
            toggleGPC();
            return;
        }

        // If the drawer is closed, always open it.
        if (!isCurrentlyOpen) {
            toggleGPC();
            return;
        }

        // If the same path is being clicked as where we are, close the drawer.
        const differentLocation = to.pathname !== location.pathname;
        if (!differentLocation) {
            toggleGPC();
            return;
        }
    };

    return (
        <nav className="menu">
            <input type="checkbox" className="menu-open" name="menu-open" id="menu-open" />
            <label className="menu-open-button" htmlFor="menu-open">
                <span className="hamburger hamburger-1" />
                <span className="hamburger hamburger-2" />
                <span className="hamburger hamburger-3" />
            </label>
            <Link to={path} onClick={handleClick(path)} className="menu-item">
                <ExpandIcon />
            </Link>
            <Link to={path} onClick={handleClick(path)} className="menu-item">
                {" "}
                <i className="fa fa-plus" />{" "}
            </Link>
            <Link to={path} onClick={handleClick(path)} className="menu-item">
                {" "}
                <i className="fa fa-heart" />{" "}
            </Link>
        </nav>
    );
};

export const NavContainer = withRouter(DrawerToggleConnector(Nav));
