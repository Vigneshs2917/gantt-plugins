/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyGentt {
    }
}
declare global {
    interface HTMLMyGenttElement extends Components.MyGentt, HTMLStencilElement {
    }
    var HTMLMyGenttElement: {
        prototype: HTMLMyGenttElement;
        new (): HTMLMyGenttElement;
    };
    interface HTMLElementTagNameMap {
        "my-gentt": HTMLMyGenttElement;
    }
}
declare namespace LocalJSX {
    interface MyGentt {
    }
    interface IntrinsicElements {
        "my-gentt": MyGentt;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-gentt": LocalJSX.MyGentt & JSXBase.HTMLAttributes<HTMLMyGenttElement>;
        }
    }
}