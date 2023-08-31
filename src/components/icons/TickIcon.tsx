import { IconProps } from "@/constants/Types";
import React from "react";

function TickIcon(props: IconProps) {
    return (
        <div className={props.parentClass}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={props.className}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                />
            </svg>
        </div>
    );
}

export default TickIcon;
