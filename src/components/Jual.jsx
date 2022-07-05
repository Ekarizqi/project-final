import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Jual() {
  return (
    <div className="p-2 mb-3 mx-auto text-center fixed-bottom custom-space-4 custom-button-auth custom-border-search">
      <FontAwesomeIcon
        icon={faPlus}
        className="text-white custom-font-1 mr-2"
      />
      <span className="text-white custom-font-1">Jual</span>
    </div>
  );
}
