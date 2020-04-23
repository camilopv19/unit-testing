import { greet } from './greet';

describe('getCurrencies', ()=>{
    it('should include name in the message', () =>{
        expect(greet('Mello')).toContain('Mello');
    });
})