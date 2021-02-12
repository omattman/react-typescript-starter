// #region Global Imports
import * as React from "react";
// #endregion Global Imports

// #region Interface Imports
import { IHeading } from "./Heading";
// #endregion Interface Imports

const Heading: React.FunctionComponent<IHeading.IProps> = (
    props
): JSX.Element => {
    const { text } = props;

    return (
        <div>
            <span>{text}</span>
            <span>{text}</span>
        </div>
    );
};

export { Heading };
