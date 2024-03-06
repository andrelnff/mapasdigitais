export function createRegion(data) {
    return [{
        id: 1,
        nome: "Benguí",
        municipio: "Belém",
        distrito: "DABEN - Benguí",
        cod_mun: "1501402",
        cod_dist: "150140245",
        area: "1.97",
        limites: data['bengui_limites'],
        centro: [-48.4552001953125, -1.3759053366666054],
        data: [
            data['bengui_ruas_alagamento'],
            data['bengui_ruas_asfalto'],
            data['bengui_ruas_bloquete'],
            data['bengui_ruas_sem_pavimento'],
            data['bengui_ruas_reparos'],
            data['bengui_ruas_obstrucao']
        ],

        Disposal: data['bengui_descarte'],
        Asphalt: data['bengui_ruas_asfalto'],
        Block: data['bengui_ruas_bloquete'],
        Unpaved: data['bengui_ruas_sem_pavimento'],
        Flooding: data['bengui_ruas_alagamento'],
        Repairs: data['bengui_ruas_reparos'],
        Obstructed: data['bengui_ruas_obstrucao'],
    }];
}