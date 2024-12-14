import Dropdown from "../../components/dropdown"; // Import the Dropdown component

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-800 flex justify-center items-center">
      <div className="w-full max-w-xl">
        <Dropdown /> {/* Use the Dropdown component here */}
      </div>
    </div>
  );
}
