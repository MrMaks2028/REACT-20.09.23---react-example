let inputData = '';

function onInputChange(e) {
    inputData = e.target.value;
}

export default function Form(props) {
    return (
        <div>
            <input onChange={onInputChange} type="text" />
            <button onClick={() => props.onAdd(inputData)}>OK</button>
        </div>
    )
}