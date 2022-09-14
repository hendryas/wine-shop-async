const Wine = require('../models/Wine');
const WineView = require('../views/WineView');

class WineController {
    static help() {
        WineView.help();
    }
    static wines() {
        Wine.wines()
            .then(wines => WineView.wines(wines))
            .catch(err => {
                WineView.message(err);
            });
    }
    static add(params) {
        Wine.add(params)
            .then(result => WineView.message(result))
            .catch(err => {
                WineView.message(err);
            });
    }
    static sell(params) {
        Wine.sell(params)
            .then(result => WineView.message(result))
            .catch(err => {
                WineView.message(err);
            });
    }
    static rename(params) {
        Wine.rename(params)
            .then(result => WineView.message(result))
            .catch(err => {
                WineView.message(err);
            });
    }
    static findById(params) {
        Wine.findById(params)
            .then(result => WineView.message(result))
            .catch(err => {
                WineView.message(err);
            });
    }
    static group(params) {
        Wine.group(params)
            .then(result => WineView.group(result))
            .catch(err => {
                WineView.message(err);
            });
    }
    static age(params) {
        Wine.age(params)
            .then(result => WineView.age(result, params))
            .catch(err => {
                WineView.message(err);
            })
    }
    static message(msg) {
        WineView.message(msg);
    }
}

module.exports = WineController;
