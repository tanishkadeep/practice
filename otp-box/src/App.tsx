import "./App.css";
import OTPbox from "./components/otp-box";

function App() {
  return (
    <div className="h-screen flex justify-center items-center bg-neutral-900">
      <OTPbox length={6} />
    </div>
  );
}

export default App;
