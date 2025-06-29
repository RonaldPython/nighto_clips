const SvgButton = ({ onClick }) => {
  return (
    <button 
      onClick={onClick} 
      className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
    >
      Click Me
    </button>
  );
}
