const Button = ({ label, onClick, isActive }) => {
    return (
        <button onClick={onClick} className={`btn ${isActive ? 'active' : ''}`}>
        {label}
        </button>
    );
};

export default Button;
