import React, { useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./Accordion.css";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    const [active, visible] =
      index === activeIndex ? ["active", true] : ["", false];

    return (
      <React.Fragment key={index}>
        <CSSTransition in={visible} timeout={300} classNames="full-entry">
          <div>
            <div
              className={`title ${active}`}
              onClick={() => {
                onTitleClick(index);
              }}
            >
              <i className="dropdown icon"></i>
              {item.title}
            </div>
            <CSSTransition in={visible} timeout={500} classNames="p-entry">
              <div className={`content ${active}`}>
                <p>{item.content}</p>
              </div>
            </CSSTransition>
          </div>
        </CSSTransition>
      </React.Fragment>
    );
  });

  return (
    <div className="ui styled accordion">
      <TransitionGroup component={null}>{renderedItems}</TransitionGroup>
    </div>
  );
};

export default Accordion;
