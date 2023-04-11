import './Alert.css'

export default function Alert({text, onClick, type}) {
    return (
        <section id='alert' className="alertContainer">
            <div className={`alertDiv ${type}`}>
                <p>{text}</p>
                <div onClick={onClick}>
                    <p>X</p>
                </div>
            </div>
        </section>
    );
}