"use client";

export function SamirsainMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 135 75"
      {...props}
    >
      <path
        fill="currentColor"
        d="M90 15V0H135V15H90ZM75 30V15H90V30H75ZM90 30H120V45H90V30ZM135 60H120V45H135V60ZM120 60V75H75V60H120Z"
      />
      <path
        fill="currentColor"
        d="M15 15V0H60V15H15ZM0 30V15H15V30H0ZM15 30H45V45H15V30ZM60 60H45V45H60V60ZM45 60V75H0V60H45Z"
      />
    </svg>
  );
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 135 75"><path fill="${color}" d="M90 15V0H135V15H90ZM75 30V15H90V30H75ZM90 30H120V45H90V30ZM135 60H120V45H135V60ZM120 60V75H75V60H120Z"/><path fill="${color}" d="M15 15V0H60V15H15ZM0 30V15H15V30H0ZM15 30H45V45H15V30ZM60 60H45V45H60V60ZM45 60V75H0V60H45Z"/></svg>`;
}

