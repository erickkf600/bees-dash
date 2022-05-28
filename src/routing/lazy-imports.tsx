import React, { Suspense, lazy } from "react";

export default function LazyLoad(component: any) {
    const ComponentLoaded = lazy(component);
    return (props: any) => (
        <Suspense fallback={<div>loading...</div>}>
            <ComponentLoaded {...props} />
        </Suspense>
    );
}
