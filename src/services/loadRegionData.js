import { fetchData } from './dataService';
import { createRegion } from '../model/region';

export async function loadRegionData() {
    const datasets = [
        'bengui_limites',
        'bengui_ruas_asfalto',
        'bengui_ruas_bloquete',
        'bengui_ruas_sem_pavimento',
        'bengui_ruas_alagamento',
        'bengui_ruas_reparos',
        'bengui_ruas_obstrucao',
        'bengui_descarte'
    ];

    const data = {};

    for (const dataset of datasets) {
        data[dataset] = await fetchData(dataset);
    }

    return createRegion(data);
}
