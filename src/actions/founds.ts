'use server';

import * as cheerio from 'cheerio';
const BASE_URL = 'https://www.clubefii.com.br/fundo_imobiliario_lista';

export async function updateFounds(formData: FormData) {
    console.log('update founds')

    const response = await fetch(BASE_URL);
    if(response.status === 200) {

        const data = await response.text();
        const page = cheerio.load(data);

        const rows = page('table.tabela_principal tbody tr.tabela_principal');

        let founds = []

        for(const row of rows) {
            const columns = cheerio.load(row)('td');

            const code = page(columns[0]).text();

            const price = page(columns[2], 'div span#valor_atual_cota').text() === '\n\nN/D\n\n' 
            ? null 
            :parseFloat(page('a div span#valor_atual_cota', columns[2]).text().replaceAll(',', '.'));

            if(!price) return;

            const found = {
                code,
                price
            };
            
            
            // const code = columns[0]?.firstChild?.
            // console.log(code)
            // console.log(r('td').html());
            // console.log(columns)

            // const columns = row.children;
            // for(const column of columns) {
                
            // }
        }


    }
}
