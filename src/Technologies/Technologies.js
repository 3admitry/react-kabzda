function List() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
    )

}

const Technologies = (props) => {
    return (
        <div>
            {props.title}
            {props.collapsed && <List/>}

        </div>
    );
}

export default Technologies;
