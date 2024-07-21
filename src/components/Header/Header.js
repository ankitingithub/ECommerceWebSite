import "./Header.css";

function Header({openCart}) {
  return (
    <div className="header">
      <h1>my react store</h1>
      <div>
        <button className="yellow-button" onClick={openCart}>
          Cart
        </button>
      </div>
    </div>
  );
}
export default Header;
