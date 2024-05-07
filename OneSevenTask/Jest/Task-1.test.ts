const request = require('supertest');

describe('TEST API GET', () => {
    it('Testing status code 200', async() => {
        const response = await request('https://httpbin.org').get('/json');
        expect(response.status).toBe(200);
    });

    it('Testing null parameter items', async() => {
        const response = await request('https://httpbin.org').get('/json');
        const items = response.body.slideshow.slides[1].items;
        expect(items).not.toBeNull();
    });

    it('Testing empty parameter items', async() => {
        const response = await request('https://httpbin.org').get('/json');
        const items = response.body.slideshow.slides[1].items;
        expect(items).not.toHaveLength(0);
    });

    it('Testing undefined parameter items', async() => {
        const response = await request('https://httpbin.org').get('/json');
        const items = response.body.slideshow.slides[1].items;
        expect(items).not.toBeUndefined();
    });
});