// #region Global Imports
import * as React from "react";
import { NextPage } from "next";
// #endregion Global Imports

// #region Local Imports
import { withTranslation } from "@Server/i18n";
import { LocaleButton } from "@Components";
// #endregion Local Imports

// #region Interface Imports
import { IHomePage } from "@Interfaces";
// #endregion Interface Imports

const Home: NextPage<IHomePage.IProps, IHomePage.InitialProps> = ({
    t,
    i18n,
}) => {

    const renderLocaleButtons = (activeLanguage: string) =>
        ["en", "es", "tr"].map(lang => (
            <LocaleButton
                key={lang}
                lang={lang}
                isActive={activeLanguage === lang}
                onClick={() => i18n.changeLanguage(lang)}
            />
        ));

    return (
        <div>
            <h1>{t("common:Hello")}</h1>
            <h3>{t("common:World")}</h3>
            {renderLocaleButtons(i18n.language)}
        </div>
    );
};

const Extended = withTranslation("common")(Home);

export default Extended;
