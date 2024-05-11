import React from "react";
import Custom01 from "./a_Custom/Custom01";
import Custom02 from "./a_Custom/Custom02";
import Custom03 from "./a_Custom/Custom03";
import Custom04 from "./a_Custom/Custom04";
import Event01 from "./b_Event/Event01";
import Event02 from "./b_Event/Event02";
import Event03 from "./b_Event/Event03";
import Event04 from "./b_Event/Event04";
import Practice01 from "./c_Practice/Practice01";
import Practice02 from "./c_Practice/Practice02";
import Practice03 from "./c_Practice/Practice03";

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

      <h2>1. Cutom Hook</h2>
        <Custom01 />
        <Custom02 />
        <Custom03 />
        <Custom04 />

      <h2>2. Event</h2>
      <Event01 />
      <Event02 />
      <Event03 />
      <Event04 />

      <h2>3. Practice</h2>
      <Practice01 />
      <Practice02 />
      <Practice03 />
      
    </div>
  );
}
