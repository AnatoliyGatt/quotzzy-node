var assert = require('assert');
var quotzzy = require('../lib/quotzzy')();

describe('quotzzy', function() {
    describe('init', function() {
        var defaultRequestOptions = {};

        before(function() {
            defaultRequestOptions = {
                hostname: 'www.quotzzy.co',
                port: 80,
                basePath: '/api'
            };
        });

        it('should have correct default request options', function() {
            assert.deepEqual(quotzzy.defaultRequestOptions, defaultRequestOptions, 'default request options should have correct initial property values');
        });

        it('should not override default request options', function() {
            quotzzy.defaultSettings = {
                hostname: 'quotzzy.co',
                port: 3000,
                basePath: '/api/1.0/'
            };

            assert.deepEqual(quotzzy.defaultRequestOptions, defaultRequestOptions, 'default request options should not be overridden');
        });
    });

    describe('functions', function() {
        describe('#getQuote()', function() {
            function validateQuote(quote) {
                assert.notEqual(quote, undefined, 'quote should not be undefined');
                assert.notEqual(quote.text, undefined, 'quote.text should not be undefined');
                assert.notEqual(quote.text, '', 'quote.text should not be empty');
                assert.notEqual(quote.author, {}, 'quote.author should not be empty');
            }

            it('should respond with valid quote object, requested with no options', function(done) {
                quotzzy.getQuote(function(error, quote) {
                    if (!error) {
                        validateQuote(quote);
                    } else {
                        assert.throws(function() {
                            throw error;
                        }, Error);
                    }
                    done();
                });
            });

            it('should respond with valid quote object, requested with manually set key', function(done) {
                quotzzy.getQuote({
                    key: 123456
                }, function(error, quote) {
                    if(!error) {
                        validateQuote(quote);
                    } else {
                        assert.throws(function() {
                            throw error;
                        }, Error);
                    }
                    done();
                });
            });

            it('should respond with valid quote object, requested with generated key', function(done) {
                quotzzy.getQuote({
                    generateKey: true
                }, function(error, quote) {
                    if(!error) {
                        validateQuote(quote);
                    } else {
                        assert.throws(function() {
                            throw error;
                        }, Error);
                    }
                    done();
                });
            });

            it('should respond with valid quote object, requested with language set to English', function(done) {
                quotzzy.getQuote({
                    lang: 'en'
                }, function(error, quote) {
                    if(!error) {
                        validateQuote(quote);
                    } else {
                        assert.throws(function() {
                            throw error;
                        }, Error);
                    }
                    done();
                });
            });

            it('should respond with valid quote object, requested with language set to English and manually set key', function(done) {
                quotzzy.getQuote({
                    lang: 'en',
                    key: 123456
                }, function(error, quote) {
                    if(!error) {
                        validateQuote(quote);
                    } else {
                        assert.throws(function() {
                            throw error;
                        }, Error);
                    }
                    done();
                });
            });

            it('should respond with valid quote object, requested with language set to English and generated key', function(done) {
                quotzzy.getQuote({
                    lang: 'en',
                    generateKey: true
                }, function(error, quote) {
                    if(!error) {
                        validateQuote(quote);
                    } else {
                        assert.throws(function() {
                            throw error;
                        }, Error);
                    }
                    done();
                });
            });

            it('should respond with valid quote object, requested with language set to Russian', function(done) {
                quotzzy.getQuote({
                    lang: 'ru'
                }, function(error, quote) {
                    if(!error) {
                        validateQuote(quote);
                    } else {
                        assert.throws(function() {
                            throw error;
                        }, Error);
                    }
                    done();
                });
            });

            it('should respond with valid quote object, requested with language set to Russian and manually set key', function(done) {
                quotzzy.getQuote({
                    lang: 'ru',
                    key: 123456
                }, function(error, quote) {
                    if(!error) {
                        validateQuote(quote);
                    } else {
                        assert.throws(function() {
                            throw error;
                        }, Error);
                    }
                    done();
                });
            });

            it('should respond with valid quote object, requested with language set to Russian and generated key', function(done) {
                quotzzy.getQuote({
                    lang: 'ru',
                    generateKey: true
                }, function(error, quote) {
                    if(!error) {
                        validateQuote(quote);
                    } else {
                        assert.throws(function() {
                            throw error;
                        }, Error);
                    }
                    done();
                });
            });

            it('should respond with error when called with invalid lang', function(done) {
                quotzzy.getQuote({
                    lang: 'jp'
                }, function(error, quote) {
                    assert.throws(function() {
                        throw error;
                    }, Error);
                    done();
                });
            });

            it('should fail when called without arguments', function() {
                assert.throws(function() {
                    quotzzy.getQuote();
                }, Error);
            });

            it('should fail when called with options only', function() {
                assert.throws(function() {
                    quotzzy.getQuote({
                        lang: 'ru',
                        key: 123456
                    });
                }, Error);
            });

            it('should not be overridden', function() {
                quotzzy.getQuote = function() {
                    return '#getQuote()';
                };

                assert.throws(function() {
                    assert.notEqual(quotzzy.getQuote(), '#getQuote()', '#getQuote() should not be overridden');
                }, Error);
            });
        });
    });
});