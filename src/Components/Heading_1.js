
const Heading_1 = (props)=>{
    let title =props.data;
    const changeTextHanlder = (e)=>{
        const value = e.target.value;
        console.log(value);
        props.onchangefunction(value)
    }
    return (
        <>
            <h1>{title}</h1>
            <input type="text" onChange={changeTextHanlder} defaultValue="" placeholder="Enter your name" />
        </>
    )
}

export default Heading_1;