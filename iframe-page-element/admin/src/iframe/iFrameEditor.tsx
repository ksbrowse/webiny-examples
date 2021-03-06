import * as React from "react";
import { css } from "emotion";
import { ElementRoot } from "@webiny/app-page-builder/render/components/ElementRoot";

const outerWrapper = css({
    boxSizing: "border-box"
});

const innerWrapper = css({
    left: 0,
    width: "100%",
    height: "auto",
    position: "relative",
    paddingBottom: 0
});

const IFrameEditor = props => {
    const { element } = props;

    if (!element.data.iframe.url) {
        return <div>Loading IFrame data...</div>;
    }

    return (
        <ElementRoot
            className={
                "webiny-pb-base-page-element-style webiny-pb-page-element-embed-iframe " +
                outerWrapper
            }
            element={element}
        >
            <div className={innerWrapper}>
                <div
                    id={element.id}
                />
                <iframe src={element.data.iframe.url} width="100%" height={element.data.iframe.height} />
            </div>
        </ElementRoot>
    );
};

export default IFrameEditor;