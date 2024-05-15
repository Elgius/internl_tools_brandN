import { CircleAlert } from "lucide-react";
import React from "react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

const alertS = () => {
  return (
    <div>
      <Alert>
        <CircleAlert className="h-4 w-4" />
        <AlertTitle>Success!</AlertTitle>
        <AlertDescription>Successfully updated you attendace!</AlertDescription>
      </Alert>
    </div>
  );
};

export default alertS;
