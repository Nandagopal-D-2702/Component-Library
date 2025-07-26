import '../Button/Button.css';

const Button = ({ label='Click Me', onClick, variant = 'primary', disabled = false }) => {
    return (
        <button className={`btn ${variant}`} onClick={onClick} disabled={disabled}>
            {label}
        </button>
    );
};

export default Button;