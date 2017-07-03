const assert = require("chai").assert;
const expect = require("chai").expect;

const getPrime = require("../lib/getprime");

"use strict";

describe("Prime number", () => {

    describe("handles value less than or equal to zero", () => {

        it("-1 should return Invalid input", () => {
            assert.equal(getPrime(-1), "Invalid input");
        });

        it("-100 should return Invalid input", () => {
            assert.equal(getPrime(-100), "Invalid input");
        });

        it("0 should return Invalid input", () => {
            assert.equal(getPrime(0), "Invalid input");
        });

        it("empty input should return Invalid input", () => {
            assert.equal(getPrime(), "Invalid input");
        });

    });

    describe("handles invalid type input", () => {

        it("'five' should return Invalid input", () => {
            assert.equal(getPrime("five"), "Invalid input");
        });

        it("{} should return Invalid input", () => {
            assert.equal(getPrime({}), "Invalid input");
        });

        it("[] should return Invalid input", () => {
            assert.equal(getPrime([]), "Invalid input");
        });

    });

    describe("handles valid input", () => {

        it('19 should return [ 1, 2, 3, 5, 7, 11, 13, 17, 19 ]', () => {
            assert.deepEqual(getPrime(19), [1, 2, 3, 5, 7, 11, 13, 17, 19]);
        });

        it('5 should return [ 1, 2, 3 ]', () => {
            assert.deepEqual(getPrime(5), [1, 2, 3, 5]);
        });

        it('10 should return [ 1, 2, 3, 5, 7 ]', () => {
            assert.deepEqual(getPrime(10), [1, 2, 3, 5, 7]);
        });

        it('15 should return [ 1, 2, 3, 5, 7, 11, 13, 17, 19 ]', () => {
            assert.deepEqual(getPrime(15), [1, 2, 3, 5, 7, 11, 13]);
        });

        it('25 should return [  1, 2, 3, 5, 7, 11, 13, 17, 19, 23]', () => {
            assert.deepEqual(getPrime(25), [1, 2, 3, 5, 7, 11, 13, 17, 19, 23]);
        });

        it('50 should return [  1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47 ]', () => {
            assert.deepEqual(getPrime(50), [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]);
        });

    });
});