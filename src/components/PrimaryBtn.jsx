export default function PrimaryBtn({ text }) {
  return (
    <button className="py-2 px-4 text-Gray-white bg-Primary-500 hover:text-Primary-600 hover:bg-Primary-200 transition duration-500 ease-in-out">
      {text}
    </button>
  );
}
