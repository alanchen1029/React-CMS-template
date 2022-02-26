import React, { useState } from "react";

import { Food } from "../types/demoTable.model";
import { CreateListItemModal, PaginatedSearchableTable } from "./components";

const demoTableRows: Food[] = [
  { id: "1", name: "Pizza", calories: 200, fat: 6.0, carbs: 24, protein: 4.0 },
  { id: "2", name: "Hot Dog", calories: 300, fat: 6.0, carbs: 24, protein: 4.0 },
  { id: "3", name: "Burger", calories: 400, fat: 6.0, carbs: 24, protein: 4.0 },
  { id: "4", name: "Hamburger", calories: 500, fat: 6.0, carbs: 24, protein: 4.0 },
  { id: "5", name: "Fries", calories: 600, fat: 6.0, carbs: 24, protein: 4.0 },
  { id: "6", name: "Ice Cream", calories: 700, fat: 6.0, carbs: 24, protein: 4.0 },
  { id: "7", name: "KFC", calories: 200, fat: 6.0, carbs: 24, protein: 4.0 },
  { id: "8", name: "Dominos", calories: 300, fat: 6.0, carbs: 24, protein: 4.0 },
  { id: "9", name: "Salsas", calories: 400, fat: 6.0, carbs: 24, protein: 4.0 },
  { id: "10", name: "Dumpling", calories: 500, fat: 6.0, carbs: 24, protein: 4.0 },
  { id: "11", name: "Coke", calories: 600, fat: 6.0, carbs: 24, protein: 4.0 },
  { id: "12", name: "Sushi", calories: 700, fat: 6.0, carbs: 24, protein: 4.0 },
  { id: "13", name: "Beef", calories: 200, fat: 6.0, carbs: 24, protein: 4.0 },
];

export const ListIndex = (): JSX.Element =>
{
  const [tableRows, setTableRows] = useState<Food[]>(demoTableRows);

  // Handle Create Item start
  const getNewCreatedItem = (newItem: Food) =>
  {
    setTableRows([newItem, ...tableRows]);
  };
  // Handle Create Item end

  return (
    <div className="panel">
      <div className="panel-header">
        <div className="header-left">List 1 Index</div>
        <div className="header-right">
          <CreateListItemModal getNewCreatedItem={getNewCreatedItem} />
        </div>
      </div>
      <div className="panel-body">
        <PaginatedSearchableTable tableRows={tableRows} />
      </div>
    </div>
  )
}