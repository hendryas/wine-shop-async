class WineView {
    static help() {
        console.log('\nWine Management command center:');
        console.log('node index.js');
        console.log('node index.js help');
        console.log('node index.js wines');
        console.log('node index.js add <wine_name>');
        console.log('node index.js sell <wine_id>');
        console.log('node index.js rename <wine_id> <wine_name>');
        console.log('node index.js findById <wine_id>');
        console.log('node index.js group <wine_type>');
        console.log('node index.js age <asc || desc> \n');
    }

    static wines(wines) {
        console.log('Welcome to Wine Management Apps:');
        wines.forEach(wine => {
            const { id, name, type } = wine;
            console.log(`${id}. ${name} - ${type}`);
        })
    }

    static group(wines) {
        console.log('This is list Wine with grouping by type :');
        wines.forEach(wine => {
            const { id, name, type } = wine;
            console.log(`- ${name} - ${type}`);
        })
    }

    static age(wines, params) {
        let orderBy = params[0];
        if (orderBy === 'desc' || orderBy === 'descending') {
            console.log('This is list Wine with grouping by age descending :');

            wines.forEach(wine => {
                const { id, name, type } = wine;
                console.log(`- ${name} - ${type} - ${wine.year} old (${2022 - wine.year})`);
            });

        } else if (orderBy === 'asc' || orderBy === 'ascending') {
            console.log('This is list Wine with grouping by age ascending :');

            wines.forEach(wine => {
                const { id, name, type } = wine;
                console.log(`- ${name} - ${type} - ${wine.year} old (${2022 - wine.year})`);
            });
        }

    }

    static message(msg) {
        console.log(msg);
    }
}

module.exports = WineView;