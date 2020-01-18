import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { onClickHandler } from "../store/accordion";

const AccordionItem = ({ data }) => {
  const { id, title, description } = data;
  const activeTab = useSelector(state => state.accordionData.currentActiveTab);
  const dispatch = useDispatch();
  return (
    <div className="accordion-item">
      <div
        className={"title " + (id === activeTab ? "active" : "")}
        onClick={() => {
          dispatch(onClickHandler(id));
        }}
      >
        {title}
      </div>
      <div className={"show-when-active " + (id === activeTab ? "active" : "")}>
        <div className="description ">{description}</div>
      </div>
    </div>
  );
};
export default AccordionItem;
