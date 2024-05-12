import React from "react";
import Event01 from "./a_Event/Event01";
import Event02 from "./a_Event/Event02";
import Event03 from "./a_Event/Event03";
import Event04 from "./a_Event/Event04";
import Event05 from "./a_Event/Event05";
import Practice01 from "./b_Practice/Practice01";
import Practice02 from "./b_Practice/Practice02";
import Practice03 from "./b_Practice/Practice03";

import Practice from "./b_Practice/practice/index";

export default function Index() {
  return (
    <div>
      <h1
        style={{
          backgroundColor: "pink",
        }}
      >
        0511
      </h1>

      <h2>1. Event</h2>
      <Event01 />
      <Event02 />
      <Event03 />
      <Event04 />
      <Event05 />

      <h2>2. Practice</h2>
      <Practice01 />
      <Practice02 />
      <Practice03 />

      <Practice />
      
    </div>
  );
}
