import React, { useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import Calendar from "react-calendar";

// new on 07/05/2023
import { useSelector } from "react-redux";

// end 07/05/2023

// import EngineeringIcon from "@mui/icons-material/Engineering";
// import BoyIcon from "@mui/icons-material/Boy";
// import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import MenuBookIcon from "@mui/icons-material/MenuBook";
// import "react-calendar/dist/Calendar.css";
// import ShowNotice from "../notices/ShowNotice";

import ReplyIcon from "@mui/icons-material/Reply";
import ImageRender from "./ImageRender";
// import Notice from "../notices/Notice";
const Body = () => {
  const [open, setOpen] = useState(false);
  // const [openNotice, setOpenNotice] = useState({});
  // const notices = useSelector((state) => state.admin.notices.result);

  const user = JSON.parse(localStorage.getItem("user"));

  const [value, onChange] = useState(new Date());
  // const store = useSelector((state) => state);

  const imgSrc =
    "data:image/png;base64,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AAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBgzcweAeBea609AQAAwBuInzez3QwAAAAAQEBuBgAAAAAgIDcDAAAAABCQmwEAAAAACHgqEAAAAACAgO1mAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAACcjMAAAAAAAG5GQAAAACAgNwMAAAAAEBAbgYAAAAAICA3AwAAAAAQkJsBAAAAAAjIzQAAAAAABORmAAAAAAAuO45fBq8s1K+yt1sAAAAASUVORK5CYII=";
  return (
    <div className="flex-[0.8] mt-3">
      <div className="space-y-5">
        <ImageRender imgSrc={user.result.xresult} />
      </div>
    </div>
  );
};

export default Body;
