import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";

export default function DropdownComponent(props) {
  const { handleClick, listData, currentVisibleObject } = props;
  return (
    <div>
      <DropdownButton
        id="dropdown-basic-button"
        title={currentVisibleObject.bdrId}
        onSelect={handleClick}
        className="m-3"
      >
        {listData.map((bdrId) => {
          return (
            <Dropdown.Item key={bdrId} eventKey={bdrId}>
              {bdrId}
            </Dropdown.Item>
          );
        })}
      </DropdownButton>
    </div>
  );
}
