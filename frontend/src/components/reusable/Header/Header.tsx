import "./Header.scss";

const Header: React.FC = () => {
    return (
        <div className="header">
            <h1>ValidAll</h1>
            <div className="text">
                Get your websites accessibility tested here!
            </div>
            <div className="language-selector">
                <a href="https://digitall.be/">
                    <img className="logo" src="/digitall_logo.png" alt="logo digitall" />
                </a>
            </div>
		</div>
    );
};

export default Header;