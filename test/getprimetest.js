var assert = require("chai").assert;
var expect = require("chai").expect;
//var chai = require("chai").assert;

var mocha = require("mocha");

var getPrime = require("../lib/getprime");

describe("Prime number", () => {

    describe("handles value less than or equal to zero", () => {

        it("should return Invalid input", () => {
            assert.equal(getPrime(-1), "Invalid input");
        });

        it("should return Invalid input", () => {
            assert.equal(getPrime(-100), "Invalid input");
        });

        it("should return Invalid input", () => {
            assert.equal(getPrime(0), "Invalid input");
        });

    });

    describe("handles invalid type input", () => {

        it("should return Invalid input", () => {
            assert.equal(getPrime("five"), "Invalid input");
        });

        it("should return Invalid input", () => {
            assert.equal(getPrime({}), "Invalid input");
        });

        it("should return Invalid input", () => {
            assert.equal(getPrime([]), "Invalid input");
        });

    });

    describe("handles valid input", () => {

        it('should return [ 1, 2, 3, 5, 7, 11, 13, 17, 19 ]', () => {
            assert.deepEqual(getPrime(19), [1, 2, 3, 5, 7, 11, 13, 17, 19]);
        });

        it('should return [ 1, 2, 3 ]', () => {
            assert.deepEqual(getPrime(5), [1, 2, 3, 5]);
        });

        it('should return [ 1, 2, 3, 5, 7 ]', () => {
            assert.deepEqual(getPrime(10), [1, 2, 3, 5, 7]);
        });

        it('should return [ 1, 2, 3, 5, 7, 11, 13, 17, 19 ]', () => {
            assert.deepEqual(getPrime(15), [1, 2, 3, 5, 7, 11, 13]);
        });

        it('should return [  1, 2, 3, 5, 7, 11, 13, 17, 19, 23]', () => {
            assert.deepEqual(getPrime(25), [1, 2, 3, 5, 7, 11, 13, 17, 19, 23]);
        });

        it('should return [  1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47 ]', () => {
            assert.deepEqual(getPrime(50), [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]);
        });

    });
});