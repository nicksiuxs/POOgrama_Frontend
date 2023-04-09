import React from "react";
import LeftSide from "../../components/LeftSide/LeftSide";
import DragAndDrop from "../../components/DragAndDrop/DragAndDrop";
import { levelInformation, containers, data } from "./dataLevel1";

const Level1 = () => {
    return (
        <main className="level">
            <LeftSide {...levelInformation} />
            <div>
                <DragAndDrop containers={containers} items={data} />
            </div>
        </main>
    );
};

export default Level1;
