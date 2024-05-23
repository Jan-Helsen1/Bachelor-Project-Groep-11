import "./Header.scss";

const Header: React.FC = () => {
    return (
        <div className="header">
            <h1>ValidAll</h1>
            <div className="text">
                Get your websites accessibility tested here!
            </div>
            <div className="language-selector">
                EN
            </div>
		</div>
    );
};

export default Header;