import { useVeltClient, VeltCommentTool, VeltPresence } from "@veltdev/react";
import { useEffect } from "react";
import "./App.css";

export default function YourDocument() {
  // Get the Velt client
  const { client } = useVeltClient();

  useEffect(() => {
    if (client) {
      // Set a document ID
      client.setDocumentId("unique-document-id");
    }
  }, [client]);

  return (
    <div>
      <div className="toolbar">
        <div className="comment-tool">
          <VeltCommentTool />
        </div>
        <div className="presence">
          <VeltPresence />
        </div>
      </div>

      <div className="box1">
        <div className="box2">
          <h2>Highlight this text to add a comment!</h2>
          <p>Or tap the comment icon and get started</p>
        </div>
      </div>
    </div>
  );
}
