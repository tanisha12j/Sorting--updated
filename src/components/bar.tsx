interface props {
    height: number,
}
const Bar = (props: props) => {
    return <div className="bar" style={{ height: props.height }} />
}

export default Bar;