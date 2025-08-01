type HamburgerMenuIconProps = {
    width?: string,
    height?: string,
    fill?: string
}

const HamburgerMenuIcon = (
    {
        width = "800px",
        height = "800px",
        fill = "none"
    }: HamburgerMenuIconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill={fill}>
            <path d="M20 7L4 7" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
            <path d="M20 12L4 12" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
            <path d="M20 17L4 17" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
        </svg>
    )
}

export default HamburgerMenuIcon;