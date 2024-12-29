declare module "react-scroll" {
    import React from "react";

    interface LinkProps extends React.HTMLProps<HTMLAnchorElement> {
        to: string;
        spy?: boolean;
        smooth?: boolean | string;
        offset?: number;
        duration?: number | string;
        isDynamic?: boolean;
        onSetActive?: (to: string) => void;
        onSetInactive?: (to: string) => void;
        ignoreCancelEvents?: boolean;
        hashSpy?: boolean;
    }

    export const Link: React.FC<LinkProps>;
    export const Element: React.FC<React.HTMLProps<HTMLDivElement>>;
    export const Events: any;
    export const scrollSpy: any;
    export const scroller: any;
    export default { Link, Element, Events, scrollSpy, scroller };
}
