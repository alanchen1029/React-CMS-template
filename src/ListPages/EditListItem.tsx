import React from "react";
import { Link } from "react-router-dom";

import ChevronLeft from "../assets/images/chevron-left.svg";
import { Food } from "../types/demoTable.model";
import { DEMO_LIST1_ROUTE } from "../_constants/route.constants";
import { ListItemForm } from "./components";

const demoItem: Food = { id: "1", name: "Pizza", calories: 200, fat: 6.0, carbs: 24, protein: 4.0 };

export const EditListItem = (): JSX.Element =>
{
  function editItem()
  {
    //do api request here
  }

  return (
    <div className="panel narrow-panel">
      <div className="panel-header">
        <div className="header-left">
          <Link to={DEMO_LIST1_ROUTE}>
            <img src={ChevronLeft} alt="" />
            Edit
          </Link>
        </div>
      </div>
      <div className="panel-body">
        <ListItemForm initialValues={demoItem} onSubmit={editItem} />
      </div>
    </div>
  )
}