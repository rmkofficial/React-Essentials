export default function TabButton({ children }) {
  const handleClick = () => {
    console.log(`You clicked on ${children}`);
  }
  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}
