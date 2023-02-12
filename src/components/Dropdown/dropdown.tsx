"use client";
import React from "react";
import { Dropdown as BootstrapDropdown } from "react-bootstrap";
import styles from "./dropdown.module.scss";
import { Open_Sans } from "@next/font/google";
import clsx from "clsx";

const labelFont = Open_Sans({ weight: "500" });

type DropdownProps = {
  id: string;
  placeholder: string;
  label: string;
  listItems: string[];
  selectedItem?: string;
  onSelect: (item: string) => void;
};

export const Dropdown = ({
  id,
  label,
  placeholder,
  selectedItem,
  listItems,
  onSelect,
}: DropdownProps) => {
  return (
    <>
      <label className={clsx(labelFont.className, "pb-2")}>{label}</label>
      <BootstrapDropdown onSelect={(e) => onSelect(e as string)}>
        <BootstrapDropdown.Toggle
          id={`dropdown-${id}`}
          className={styles.toggle}
        >
          {selectedItem ? selectedItem : placeholder}
        </BootstrapDropdown.Toggle>

        <BootstrapDropdown.Menu className={styles.list}>
          {listItems.map((item) => (
            <BootstrapDropdown.Item
              value={item}
              eventKey={item}
              key={`${id}-${item}`}
            >
              {item}
            </BootstrapDropdown.Item>
          ))}
        </BootstrapDropdown.Menu>
      </BootstrapDropdown>
    </>
  );
};
