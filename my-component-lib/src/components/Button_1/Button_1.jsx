import './Button_1.css';

export const Button_1 = ({ label='Gradient Button', onClick, variant = 'primary', disabled = false }) => {
    return (
        <button className={`btn ${variant}`} onClick={onClick} disabled={disabled}>
            {label}
        </button>
    );
};



export const Button_2 = ({ label='Gradient Button', onClick, variant = 'secondary', disabled = false }) => {
    return (
        <button className={`btn ${variant}`} onClick={onClick} disabled={disabled}>
            {label}
        </button>
    );
};

