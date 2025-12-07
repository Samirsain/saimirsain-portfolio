import { ImageResponse } from "next/og";

// Image metadata
export const size = {
    width: 32,
    height: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    background: "black",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "6px", // Rounded corners
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="14"
                    viewBox="0 0 135 75"
                    fill="none"
                >
                    <path
                        fill="white"
                        d="M90 15V0H135V15H90ZM75 30V15H90V30H75ZM90 30H120V45H90V30ZM135 60H120V45H135V60ZM120 60V75H75V60H120Z"
                    />
                    <path
                        fill="white"
                        d="M15 15V0H60V15H15ZM0 30V15H15V30H0ZM15 30H45V45H15V30ZM60 60H45V45H60V60ZM45 60V75H0V60H45Z"
                    />
                </svg>
            </div>
        ),
        // ImageResponse options
        {
            ...size,
        }
    );
}

