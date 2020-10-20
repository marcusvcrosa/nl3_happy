const Database = require('./db.js');

const saveOrphanage = require('./saveOrphanage.js');

Database.then( async function (db) {
    //inserir dados na tabela
    await saveOrphanage(db, {
        id: 1,
        lat: "-27.2176234",
        lng: "-49.6590143",
        name: "Lar dos meninos",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "9999999",
        images: [
            "https://images.unsplash.com/photo-1591593443255-db4646e739b4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1556258707-995cd393dd8b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 8h até 18h",
        open_on_weekends: "0"
    });
    //consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages");
    console.log(selectedOrphanages);
    
    //consultar somete 1 orfanato, pelo 1d
    // const orphanages = await db.all('SELECT * FROM orphanages WHERE id = "3"');
    // console.log(orphanages);

    // deletar dado da tabela
    // await db.run("DELETE FROM orphanages WHERE id='4'");
})