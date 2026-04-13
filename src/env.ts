export const ENV: string = 'stage';

export const tenants = {
    "test": {
        baseUrl: 'http://component-test.test/api',
        name: "test way",
        id: "test"
    },
}

export const BASE_TENANT: keyof typeof tenants = "test";