import { VeltProvider, VeltComments, VeltPresence } from "@veltdev/react";
import YourAuthComponent from "./YourAuthComponent.js";
import YourDocument from "./YourDocument.js";
import "./App.css";

export default function App() {
  return (
    <VeltProvider apiKey="j3AwoBkuQMTEgeqrmPve">
      <VeltComments />
      <div>
        <YourAuthComponent />
        <YourDocument />
      </div>
    </VeltProvider>
  );
}
