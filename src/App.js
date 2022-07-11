import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

const wikiQuery =
  "https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=candy";

const items = [
  {
    title: "What is Lorem Ipsum?",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title: "Why do we use it?",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
  },
  {
    title: "Where does it come from?",
    content:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ",
  },
  {
    title: "Where can I get some?",
    content:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
  },
];

const dropdownOptions = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "The Shade of Blue",
    value: "blue",
  },
];

export default () => {
  const [selected, setSelected] = useState(dropdownOptions[0]);

  return (
    <div>
      {/* <Search /> */}
      {/* <Accordion items={items} /> */}
      <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        dropdownOptions={dropdownOptions}
      />
    </div>
  );
};
