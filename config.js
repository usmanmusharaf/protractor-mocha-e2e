// Protractor config file
exports.config = {
    framework: 'mocha',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl: "http://www.angulartodo.com/",
    Capabilities: [
        { 'browserName': 'chrome' },
    ],
    specs: [
        "./dist/**/*.test.js",
    ],
}