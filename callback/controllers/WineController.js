const Wine = require('../models/Wine');
const WineView = require('../views/WineView');

class WineController {
    static help() {
        WineView.help();
    }
    static wines() {
        Wine.wines((err, data) => {
            if (err) {
                WineView.message(err);
            } else {
                WineView.wines(data);
            }
        })
    }
    static add(params) {
        Wine.add(params, (err, data) => {
            if (err) {
                WineView.message(err);
            } else {
                WineView.message(data);
            }
        })
    }
    static sell(params) {
        Wine.sell(params, (err, data) => {
            if (err) {
                WineView.message(err);
            } else {
                WineView.message(data);
            }
        })
    }
    static rename(params) {
        Wine.rename(params, (err, data) => {
            if (err) {
                WineView.message(err);
            } else {
                WineView.message(data);
            }
        })
    }
    static findById(params) {
        Wine.findById(params, (err, data) => {
            if (err) {
                WineView.message(err);
            } else {
                WineView.message(data);
            }
        });
    }
    static group(params) {
        Wine.group(params, (err, data) => {
            if (err) {
                WineView.message(err);
            } else {
                WineView.group(data);
            }
        });

    }
    static age(params) {
        Wine.age(params, (err, data) => {
            if (err) {
                WineView.message(err);
            } else {
                WineView.age(data, params);
            }
        });
    }
    static message(msg) {
        WineView.message(msg);
    }
}

module.exports = WineController;
