import { CircleAlert } from "lucide-react";
import React from "react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

const alert = () => {
  return (
    <div>
      <Alert>
        <CircleAlert className="h-4 w-4" />
        <AlertTitle>Failed 😭😭😭</AlertTitle>
        <AlertDescription>Updating table failed</AlertDescription>
      </Alert>
    </div>
  );
};

export default alert;
