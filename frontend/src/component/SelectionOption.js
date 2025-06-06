import React, { useState, useEffect } from "react";
import { useRef } from "react";
import Wrapper from "../wrappers/SelectionOption";
const SelectionOption = ({ categoryfilter, clearcategory }) => {
  const options = [
    {
      label: "Fashon",
      value: 12222222,
    },
    {
      label: "IT",
      value: 233333333333,
    },
    {
      label: "Medical",
      value: 34444444444,
    },
    {
      label: "Entertainment",
      value: 4555555555555,
    },
    {
      label: "Education",
      value: 577777777777,
    },
    {
      label: "Repair",
      value: 57777777,
    },

    {
      label: "Law",
      value: 572777777,
    },
  ];

  const [value, setValue] = useState([]);
  const [multiple, setMultiple] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const containerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) setHighlightedIndex(0);
  }, [isOpen]);

  useEffect(() => {
    const handler = (e) => {
      if (e.target !== containerRef.current) return;

      switch (e.code) {
        case "Enter":
          setIsOpen((prev) => !prev);

          if (isOpen) selectOption(options[highlightedIndex]);
          break;

        case "Space":
          setIsOpen((prev) => !prev);

          if (isOpen) selectOption(options[highlightedIndex]);
          break;

        case "ArrowUP": {
          if (!isOpen) {
            setIsOpen(true);
            break;
          }
          const newValue = highlightedIndex + (e.code === "ArrowDown" ? 1 : -1);
          if (newValue >= 0 && newValue < options.length) {
            setHighlightedIndex(newValue);
            break;
          }
          break;
        }

        case "ArrowDown": {
          if (!isOpen) {
            setIsOpen(true);
          }
          const newValue = highlightedIndex + (e.code === "ArrowDown" ? 1 : -1);

          if (newValue >= 0 && newValue < options.length) {
            setHighlightedIndex(newValue);
            break;
          }
          break;
        }
        case "Escape": {
          setIsOpen(false);
          break;
        }

        default:
          break;
      }
    };
    containerRef.current?.addEventListener("Keydown", handler);
    return () => {
      containerRef.current?.removeEventListener("Keydown", handler);
    };
  }, [isOpen, highlightedIndex, options]);
  const onchange = (o) => {
    setValue(o);
  };
  const highlightlst = (index) => {
    setHighlightedIndex(index);
  };

  function clearOptions() {
    multiple ? onchange([]) : onchange([options[0]]);
    setMultiple(false);
  }

  function selectOption(option) {
    if (multiple) {
      if (value.some((item) => item.label === option.label)) {
        if (value.length === 1) {
          onchange(value.filter((o) => o.label !== option.label));
          setMultiple(false);
        } else {
          onchange(value.filter((o) => o.label !== option.label));
        }
      } else {
        onchange(value.concat(option));
      }
    } else {
      if (option !== value) {
        onchange([option]);
        setMultiple(true);
      }
    }
  }

  function isOptionSelected(option) {
    return multiple
      ? value.some((item) => item.label === option.label)
      : value.some((item) => item.label === option.label);
  }

  return <Wrapper className="glassmorphism"></Wrapper>;
};

export default SelectionOption;
