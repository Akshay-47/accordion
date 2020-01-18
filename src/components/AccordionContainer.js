import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import AccordionItem from "./AccordionItem";
import { getData } from "../store/accordion";

const AccordionContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);
  const isLoading = useSelector(state => state.accordionData.isLoading);
  const data = useSelector(state => state.accordionData.data);

  const renderItems = items => {
    console.log(items);
    return items.map((item, index) => (
      <AccordionItem key={index} data={item} />
    ));
  };
  return (
    <div className="accordion-container">
      {isLoading && (
        <div className="loader">
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>
        </div>
      )}
      {renderItems(data)}
    </div>
  );
};

export default AccordionContainer;
