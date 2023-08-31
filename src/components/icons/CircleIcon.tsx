import { IconProps } from "@/constants/Types";
import React from "react";

function CircleIcon(props: IconProps) {
    return (
        <div className={props.parentClass}>
            <svg
                className={props.className}
                viewBox="0 0 38 38"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
            >
                <g
                    fill="none"
                    fillRule="evenodd"
                >
                    <g
                        transform="translate(1 1)"
                        strokeWidth="2"
                    >
                        <circle
                            strokeOpacity=".5"
                            cx="18"
                            cy="18"
                            r="18"
                        />
                        <path d="M36 18c0-9.94-8.06-18-18-18" />
                    </g>
                </g>
            </svg>
        </div>
    );
}

export default CircleIcon;
