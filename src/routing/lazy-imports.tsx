import React, { Suspense, lazy } from "react";
import ComponentLoader from "../shared/components/Component-loader/component-loader";

export default function LazyLoad(component: any) {
    const ComponentLoaded = lazy(component);
    return (props: any) => (
        <Suspense fallback={<ComponentLoader />}>
            <ComponentLoaded {...props} />
        </Suspense>
    );
}
