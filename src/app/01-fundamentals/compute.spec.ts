import { compute } from "./compute";

/**
 * Karma and Jasmine --> Tools for testing
 * describe : suite or group of related tests
 * it       : test
 */
describe('compute',()=>{
    it('should return 0 if input is negative',() => {
        const result = compute(-1);
        expect(result).toBe(1);
    });
    it('should increment if input is positive',() => {
        const result = compute(1);
        expect(result).toBe(2);
    });
})