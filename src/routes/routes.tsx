import { RouteObject } from 'react-router-dom';
import { Path, PATHS, Resource } from './paths';

import Test from "../components/features/Test";


const ROUTERS: {
    [resource in Resource]: {
        element: RouteObject['element'];
    };
} = {
    TEST: { element: <Test /> },
    NOT_FOUND: { element: <>Error page</> },
};

export function routers() {
    return PATHS.reduce(
        (result, path) => {
            result.push({
                ...path,
                element: ROUTERS[path.resource].element,
            });
            return result;
        },
        [] as (Path & RouteObject)[]
    );
}
