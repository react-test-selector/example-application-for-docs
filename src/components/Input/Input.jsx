import React from "react";

import styles from "./Input.css";

export function Input(props) {
    return <input className={styles.input} value={props.value} onChange={e => props.onValueChange(e.target.value)} />;
}