export default function SecondaryBtn({ text }) {
  return (
    <button className="py-2 px-4 text-Primary-500 bg-Primary-100 hover:text-Primary-600 hover:bg-Primary-200 transition duration-200 ease-in-out">
      {text}
    </button>
  );
}
