import React from 'react';
import Board from "@lourenci/react-kanban";

const board = {
    columns: [
      {
        id: 1,
        title: "Backlog",
        cards: [
          {
            id: 1,
            title: "Task title 1",
            description: "Task details"
          },
          
        ]
      },
      {
        id: 2,
        title: "Doing",
        cards: [
          {
            id: 3,
            title: "Task title 2",
            description: "Task details"
          }
        ]
      },
      {
        id: 3,
        title: "Done",
        cards: [
          {
            id: 4,
            title: "Task title 3",
            description: "Task details"
          },
          
        ]
      }
    ]
  };

function UncontrolledBoard() {
    return (
      
      <Board 
        allowRemoveLane
        allowRenameColumn
        allowRemoveCard
        onLaneRemove={console.log}
        onCardRemove={console.log}
        onLaneRename={console.log}
        initialBoard={board}
        allowAddCard={{ on: "top" }}
        onNewCardConfirm={(draftCard) => ({
          id: new Date().getTime(),
          ...draftCard
        })}
        onCardNew={console.log}
      />
    );
  }

  export default UncontrolledBoard;