var assert = require('assert');
var quotzzy = require('../lib/quotzzy')();

describe('quotzzy', function () {
    describe('init', function () {
        var defaultRequestOptions = {};

        before(function () {
            defaultRequestOptions = {
                hostname: 'www.quotzzy.co',
                port: 80,
                basePath: '/api'
            };
        });

        it('should have correct default request options', function () {
            assert.deepEqual(quotzzy.defaultRequestOptions, defaultRequestOptions, 'default request options should have correct initial property values');
        });
    });

    describe('functions', function () {
        describe('#getQuote()', function () {
            function validateQuote(quote) {
                assert.ok(quote, 'quote should not be undefined, null or empty');
                assert.ok(quote.text, 'quote.text should not be undefined, null or empty');
                assert.notDeepEqual(quote.author, {}, 'quote.author should not be empty');
            }

            it('should respond with valid quote object, requested with no options', function (done) {
                quotzzy.getQuote(function (error, quote) {
                    if (error) {
                        return done(error);
                    }
                    validateQuote(quote);
                    done();
                });
            });

            it('should respond with valid quote object, requested with manually set key', function (done) {
                quotzzy.getQuote({
                    key: 123456
                }, function(error, quote) {
                    if (error) {
                        return done(error);
                    }
                    validateQuote(quote);
                    done();
                });
            });

            it('should respond with valid quote object, requested with generated key', function (done) {
                quotzzy.getQuote({
                    generateKey: true
                }, function (error, quote) {
                    if (error) {
                        return done(error);
                    }
                    validateQuote(quote);
                    done();
                });
            });

            it('should respond with valid quote object, requested with language set to English', function (done) {
                quotzzy.getQuote({
                    lang: 'en'
                }, function (error, quote) {
                    if (error) {
                        return done(error);
                    }
                    validateQuote(quote);
                    done();
                });
            });

            it('should respond with valid quote object, requested with language set to English and manually set key', function (done) {
                quotzzy.getQuote({
                    lang: 'en',
                    key: 123456
                }, function (error, quote) {
                    if (error) {
                        return done(error);
                    }
                    validateQuote(quote);
                    done();
                });
            });

            it('should respond with valid quote object, requested with language set to English and generated key', function (done) {
                quotzzy.getQuote({
                    lang: 'en',
                    generateKey: true
                }, function (error, quote) {
                    if (error) {
                        return done(error);
                    }
                    validateQuote(quote);
                    done();
                });
            });

            it('should respond with valid quote object, requested with language set to Russian', function (done) {
                quotzzy.getQuote({
                    lang: 'ru'
                }, function (error, quote) {
                    if (error) {
                        return done(error);
                    }
                    validateQuote(quote);
                    done();
                });
            });

            it('should respond with valid quote object, requested with language set to Russian and manually set key', function (done) {
                quotzzy.getQuote({
                    lang: 'ru',
                    key: 123456
                }, function (error, quote) {
                    if (error) {
                        return done(error);
                    }
                    validateQuote(quote);
                    done();
                });
            });

            it('should respond with valid quote object, requested with language set to Russian and generated key', function (done) {
                quotzzy.getQuote({
                    lang: 'ru',
                    generateKey: true
                }, function (error, quote) {
                    if (error) {
                        return done(error);
                    }
                    validateQuote(quote);
                    done();
                });
            });

            it('should respond with error when called with invalid lang', function (done) {
                quotzzy.getQuote({
                    lang: 'jp'
                }, function (error, quote) {
                    assert.throws(function () {
                        throw error;
                    }, Error);
                    done();
                });
            });

            it('should fail when called without arguments', function () {
                assert.throws(function () {
                    quotzzy.getQuote();
                }, Error);
            });

            it('should fail when called with options only', function () {
                assert.throws(function () {
                    quotzzy.getQuote({
                        lang: 'ru',
                        key: 123456
                    });
                }, Error);
            });
        });
    });
});
