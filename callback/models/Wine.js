const fs = require('fs');

class Wine {
    constructor(id, name, year, type, createdAt) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.type = type;
        this.createdAt = createdAt;
    }

    static wines(callback) {
        fs.readFile('./data.json', 'utf8', (err, data) => {
            if (err) {
                callback(err, null);
            } else {
                let wines = JSON.parse(data);
                let temp = wines.map(wine => {
                    const { id, name, year, type, createdAt } = wine;

                    return new Wine(id, name, year, type, createdAt);
                });
                callback(null, temp)
            }
        })
    }

    static add(params, callback) {
        this.wines((err, data) => {
            if (err) {
                callback(err, null);
            } else {
                let wines = data;
                const [wine_name] = params;
                let id = wines[wines.length - 1].id + 1;
                let createdAt = new Date();

                let formattedWine = this.wineFormatter(wine_name);
                const [name, year, type] = formattedWine;

                wines.push(new Wine(id, name, year, type, createdAt));
                this.save(wines);

                callback(null, `${name} has been added!`);
            }
        })
    }

    static sell(params, callback) {
        this.wines((err, data) => {
            if (err) {
                callback(err, null);
            } else {
                let wines = data;
                let id = +params[0];
                let wine_name = '';

                wines.forEach(wine => {
                    if (wine.id === id) {
                        wine_name = wine.name;
                    }
                })

                wines = wines.filter(wine => wine.id !== id);
                this.save(wines);

                callback(null, `${wine_name} has been sold!`);
            }
        })
    }

    static rename(params, callback) {
        this.wines((err, data) => {
            if (err) {
                callback(err, null);
            } else {
                let wines = data;
                let [wine_id, wine_name] = params;

                let formattedWine = this.wineFormatter(wine_name);
                const [name, year, type] = formattedWine;

                wines = wines.map(wine => {
                    if (wine.id === +wine_id) {
                        wine.name = name;
                        wine.year = year;
                        wine.type = type;

                        return wine;
                    } else {
                        return wine;
                    }
                })
                this.save(wines);

                callback(null, `Wine number ${wine_id} has been renamed`);
            }
        })
    }

    static findById(params, callback) {
        this.wines((err, data) => {
            if (err) {
                callback(err, null);
            } else {
                let wines = data;
                let id = +params[0];
                let temp = '';

                wines.forEach(wine => {
                    if (wine.id === id) {
                        temp = `${wine.name} is a ${wine.type} Wine with age of ${2022 - wine.year} years old`;
                    }
                })

                callback(null, temp);
            }
        })
    }

    static wineFormatter(wine_name) {
        let formattedWine = wine_name.split("/");
        const [name, year, type] = formattedWine;

        if (type === 'R' || type === 'r') {
            return [name, +year, "Red"];
        } else if (type === 'W' || type === 'w') {
            return [name, +year, "White"];
        } else {
            return [name, +year, "Other"];
        }
    }

    static group(params, callback) {
        this.wines((err, data) => {
            if (err) {
                callback(err, null);
            } else {
                let wines = data;
                let typeWine = params[0];

                wines = wines.filter(wine => typeWine === wine.type);

                callback(null, wines);
            }
        })
    }

    static age(params, callback) {
        this.wines((err, data) => {
            if (err) {
                callback(err, null);
            } else {
                let wines = data;
                const [orderBy] = params;
                let yearWine = 0;

                if (orderBy === 'desc' || orderBy === 'descending') {
                    wines.map(wine => {
                        yearWine = 2022 - wine.year;
                        wine.year = yearWine;
                    });

                    callback(null, wines.sort((a, b) => (a.year < b.year) ? 1 : -1));

                } else if (orderBy === 'asc' || orderBy === 'ascending') {
                    wines.map(wine => {
                        yearWine = 2022 - wine.year;
                        wine.year = yearWine;
                    });

                    callback(null, wines.sort((a, b) => (a.year > b.year) ? 1 : -1));
                } else {
                    callback(null, `Please check your input! Example: 'asc || desc' or 'ascending || descending'`);
                }
            }
        })
    }

    static save(wines) {
        fs.writeFileSync('./data.json', JSON.stringify(wines, null, 3));
    }

}

module.exports = Wine;