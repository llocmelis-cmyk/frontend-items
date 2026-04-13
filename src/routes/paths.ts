// import { PermissionModule, PermissionScope } from '@api/index';

export type Path = {
    resource: string;
    route: string;
    scope?: any;
    goodsOwnerIds?: any[];
    goodsOwnerIdsExclude?: any[];
    relation?: string;
};

export const PATHS = [
    {
        resource: 'TEST',
        route: '/',
    },
    {
        resource: 'NOT_FOUND',
        route: '*',
    },
] as const satisfies readonly Path[];

export type Resource = (typeof PATHS)[number]['resource'];
export type Route = (typeof PATHS)[number]['route'];
