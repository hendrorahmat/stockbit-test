import * as request from 'supertest';
import {app} from '../src/server';

describe('Test Get Data', () => {
    it('it should return proper data', async () => {
        const result = await request(app).get('/search?page=1&s=Batman');
        expect(result.status).toBe(200);
    })
    
    it('it should return detail movie', async () => {
        const result = await request(app).get('/tt0372784/detail');
        expect(result.status).toBe(200);
    })
});