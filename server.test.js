const request = require('supertest');
const app = require('./server');

describe('Backend API tests' , () => {
	it('should return a welcome message', async () => {
		const response =await request (app).get('/api');
		expect(response.status).toBe(200);
		expect(response.body.message).toBe('Hello from the backend!');
	});
	
	it('should echo the message', async () => {
		const response = await request(app)
			.post('/api/echo')
			.send({message: 'Test message'});
		expect(response.status).toBe(200);
		expect(response.body.message).toBe('Test message');
	});
});
