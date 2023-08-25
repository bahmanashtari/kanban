import { useState } from "react";

import BoardSection from "./BoardSection";
import Filters from "./Filters";
import CreateNewBoard from "./CreateNewBoard";

const globalState = {
  baordname: "test",
  searchKey: "a",
  sections: [
    {
      key: "sectionID",
      name: "secion1",
      tasks: [
        { key: "id1", description: "some text", like: 0, createDate: "" },
        { key: "id2", description: "some text2", like: 2, createDate: "" },
      ],
    },
  ],
  viewSections: null, // sectionID
  sortBy: null, // votes
};

const MainBoard = (props) => {
  const [boardName, setBoardName] = useState("");
  const [sections, setSections] = useState([]);

  const createBoardHandler = (boardDetails) => {
    const boardName = boardDetails.boardName;
    const sectionNames = Object.entries(boardDetails).reduce(
      (acc, [key, val]) => {
        if (key.startsWith("sectionName_")) {
          acc = [...acc, val];
        }
        return acc;
      },
      []
    );
    setBoardName(boardName);
    setSections(sectionNames);
  };

  const sectionsToShow = sections.map((section) => (
    <BoardSection name={section} />
  ));

  return (
    <div className="bg-zinc-700 flex items-center justify-center h-screen">
      <div className="bg-slate-700 shadow-2xl rounded-lg p-8 w-5/6 h-4/5">
        <section className="h-10 align-text-top text-gray-400 font-bold text-2xl">
          {boardName}
        </section>
        {sections.length > 0 && (
          <section>
            <Filters />
          </section>
        )}
        <section className="grid grid-flow-col">
          {sections.length > 0 && sectionsToShow}
          {sections.length === 0 && (
            <CreateNewBoard onCreateBoard={createBoardHandler} />
          )}
        </section>
      </div>
    </div>
  );
};

export default MainBoard;
