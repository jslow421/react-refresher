function Backdrop(props: any) {
    return (
        // Div is built in so onClick exists
        <div className='backdrop' onClick={props.onCancel} />
    );
}

export default Backdrop