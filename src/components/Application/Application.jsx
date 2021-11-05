import React, { useState } from "react";

import "../../styles/Reset.css";
import "../../styles/LabGrotesque.css";
import "../../styles/Typography.css";
import styles from "./Application.css";
import { Input } from "../Input/Input";

export function Application() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  return (
    <div className={styles.content}>
      <h2>React test selector example application</h2>
      <div>
        <Input value={value1} onValueChange={setValue1} />
      </div>
      <InputValueContent>Input value: {value1}</InputValueContent>
      <div>
        <Input error value={value2} onValueChange={setValue2} />
      </div>
    </div>
  );
}

function InputValueContent({ children }) {
  return <div>{children}</div>;
}
