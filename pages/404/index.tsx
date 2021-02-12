// #region Global Imports
import * as React from "react";
import { NextPage } from "next";
// #endregion Global Imports

// #region Local Imports
import { withTranslation } from "@Server/i18n";
import Link from "next/link";
// #endregion Local Imports

// #region Interface Imports
import { IErrorPage } from "@Interfaces";
// #endregion Interface Imports

const Custom404: NextPage<IErrorPage.IProps> = ({ t }) => {
    return (
        <div>
            <h1>{t("common:NotFound")}</h1>
            <Link href="/">{t("common:BackHome")}</Link>
        </div>
    );
};

export default withTranslation("common")(Custom404);
