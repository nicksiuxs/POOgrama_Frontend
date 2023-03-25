import './Alert.css'

export default function Alert(props) {
    return (
        <section id='alert' className="alertContainer">
            <div className="alertDiv">
                <div onClick={props.onClick}>
                    <p>X</p>
                </div>
                <p>{props.text}</p>
            </div>
        </section>
    );
}