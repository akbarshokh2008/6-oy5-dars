import React from "react";
import Check from "../assets/img/Check.svg";
import TrashSimple from "../assets/img/TrashSimple.svg";
function Card(props) {
  const { item, id } = props.user;
  const { deleteItem } = props;
  return (
    <div className="flex  py-7 px-6 bg-[#15101C] justify-between rounded">
      <h3 className="text-[#D8BFD8]">{item}</h3>
      <div className="img flex gap-2">
        <button>
          <img className="hover:w-7" src={Check} alt="rasm" />
        </button>
        <button
          onClick={() => {
            deleteItem(id);
          }}
        >
          <img className="hover:w-7" src={TrashSimple} alt="rasm" />
        </button>
      </div>
    </div>
  );
}

export default Card;
