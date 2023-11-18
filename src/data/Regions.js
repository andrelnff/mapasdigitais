import LimitsIcui from '../assets/geojson/Icui/limites.json';
import AsphaltIcui from '../assets/geojson/Icui/ruas_asfalto.json';
import UnpavedIcui from '../assets/geojson/Icui/ruas_sem_pavimento.json';
import FloodingIcui from '../assets/geojson/Icui/ruas_alagamento.json';
import RepairsIcui from '../assets/geojson/Icui/ruas_reparos.json';
import ObstructedIcui from '../assets/geojson/Icui/ruas_obstrucao.json';
import DisposalIcui from '../assets/geojson/Icui/descarte.json';

import LimitsNovaUniao from '../assets/geojson/NovaUniao/limites.json';
import AsphaltNovaUniao from '../assets/geojson/NovaUniao/ruas_asfalto.json';
import UnpavedNovaUniao from '../assets/geojson/NovaUniao/ruas_sem_pavimento.json';
import RepairsNovaUniao from '../assets/geojson/NovaUniao/ruas_reparos.json';
import ObstructedNovaUniao from '../assets/geojson/NovaUniao/ruas_obstrucao.json';
import DisposalNovaUniao from '../assets/geojson/NovaUniao/descarte.json';

import LimitsJurunas from '../assets/geojson/Jurunas/limites.json';
import AsphaltJurunas from '../assets/geojson/Jurunas/ruas_asfalto.json';
import BlockJurunas from '../assets/geojson/Jurunas/ruas_bloquete.json';
import UnpavedJurunas from '../assets/geojson/Jurunas/ruas_sem_pavimento.json';
import FloodingJurunas from '../assets/geojson/Jurunas/ruas_alagamento.json';
import RepairsJurunas from '../assets/geojson/Jurunas/ruas_reparos.json';
import ObstructedJurunas from '../assets/geojson/Jurunas/ruas_obstrucao.json';
import DisposalJurunas from '../assets/geojson/Jurunas/descarte.json';

import LimitsBengui from '../assets/geojson/Bengui/limites.json';
import AsphaltBengui from '../assets/geojson/Bengui/ruas_asfalto.json';
import BlockBengui from '../assets/geojson/Bengui/ruas_bloquete.json';
import UnpavedBengui from '../assets/geojson/Bengui/ruas_sem_pavimento.json';
import FloodingBengui from '../assets/geojson/Bengui/ruas_alagamento.json';
import RepairsBengui from '../assets/geojson/Bengui/ruas_reparos.json';
import ObstructedBengui from '../assets/geojson/Bengui/ruas_obstrucao.json';
import DisposalBengui from '../assets/geojson/Bengui/descarte.json';

import LimitsCabanagem from '../assets/geojson/Cabanagem/limites.json';
import AsphaltCabanagem from '../assets/geojson/Cabanagem/ruas_asfalto.json';
import UnpavedCabanagem from '../assets/geojson/Cabanagem/ruas_sem_pavimento.json';
import FloodingCabanagem from '../assets/geojson/Cabanagem/ruas_alagamento.json';
import RepairsCabanagem from '../assets/geojson/Cabanagem/ruas_reparos.json';
import ObstructedCabanagem from '../assets/geojson/Cabanagem/ruas_obstrucao.json';
import DisposalCabanagem from '../assets/geojson/Cabanagem/descarte.json';

import LimitsTerraFirme from '../assets/geojson/TerraFirme/limites.json';
import AsphaltTerraFirme from '../assets/geojson/TerraFirme/ruas_asfalto.json';
import BlockTerraFirme from '../assets/geojson/TerraFirme/ruas_bloquete.json';
import UnpavedTerraFirme from '../assets/geojson/TerraFirme/ruas_sem_pavimento.json';
import FloodingTerraFirme from '../assets/geojson/TerraFirme/ruas_alagamento.json';
import RepairsTerraFirme from '../assets/geojson/TerraFirme/ruas_reparos.json';
import ObstructedTerraFirme from '../assets/geojson/TerraFirme/ruas_obstrucao.json';

import LimitsGuama from '../assets/geojson/Guama/limites.json';
import AsphaltGuama from '../assets/geojson/Guama/ruas_asfalto.json';
import BlockGuama from '../assets/geojson/Guama/ruas_bloquete.json';
import UnpavedGuama from '../assets/geojson/Guama/ruas_sem_pavimento.json';
import FloodingGuama from '../assets/geojson/Guama/ruas_alagamento.json';
import RepairsGuama from '../assets/geojson/Guama/ruas_reparos.json';
import ObstructedGuama from '../assets/geojson/Guama/ruas_obstrucao.json';
import DisposalGuama from '../assets/geojson/Guama/descarte.json';

import LimitsSaoFrancisco from '../assets/geojson/SaoFrancisco/limites.json';
import AsphaltSaoFrancisco from '../assets/geojson/SaoFrancisco/ruas_asfalto.json';
import UnpavedSaoFrancisco from '../assets/geojson/SaoFrancisco/ruas_sem_pavimento.json';
import FloodingSaoFrancisco from '../assets/geojson/SaoFrancisco/ruas_alagamento.json';
import RepairsSaoFrancisco from '../assets/geojson/SaoFrancisco/ruas_reparos.json';
import ObstructedSaoFrancisco from '../assets/geojson/SaoFrancisco/ruas_obstrucao.json';
import DisposalSaoFrancisco from '../assets/geojson/SaoFrancisco/descarte.json';


const Regions = [
    {
        id: 1,
        nome: "Icuí-Guajará",
        limites: LimitsIcui,
        centro: [-48.408164978027344, -1.3266522238965712], 
        data: [FloodingIcui, AsphaltIcui, 
            UnpavedIcui, RepairsIcui, ObstructedIcui],

        Disposal: DisposalIcui,
        Asphalt:AsphaltIcui,
        Block: null,
        Unpaved: UnpavedIcui,
        Flooding: FloodingIcui,
        Repairs: RepairsIcui,
        Obstructed: ObstructedIcui,
    },

    {
        id: 2,
        nome: "Nova União",
        limites: LimitsNovaUniao,
        centro: [-48.33653926849365, -1.3415398116527943],
        data: [AsphaltNovaUniao, UnpavedNovaUniao, RepairsNovaUniao, 
            ObstructedNovaUniao],

        Disposal: DisposalNovaUniao,
        Asphalt:AsphaltNovaUniao,
        Block: null,
        Unpaved: UnpavedNovaUniao,
        Flooding: null,
        Repairs: RepairsNovaUniao,
        Obstructed: ObstructedNovaUniao,
    },

    {
        id: 9,
        nome: "São Francisco",
        limites: LimitsSaoFrancisco,
        centro: [-48.336453437805176, -1.354496658713901],
        data: [FloodingSaoFrancisco, AsphaltSaoFrancisco, UnpavedSaoFrancisco, 
            RepairsSaoFrancisco, ObstructedSaoFrancisco],

        Disposal: DisposalSaoFrancisco,
        Asphalt:AsphaltSaoFrancisco,
        Block: null,
        Unpaved: UnpavedSaoFrancisco,
        Flooding: FloodingSaoFrancisco,
        Repairs: RepairsSaoFrancisco,
        Obstructed: ObstructedSaoFrancisco,
    },

    {
        id: 3,
        nome: "Jurunas",
        limites: LimitsJurunas,
        centro: [-48.49343776702881, -1.4688742217081574],
        data: [FloodingJurunas, AsphaltJurunas, BlockJurunas, 
            UnpavedJurunas, RepairsJurunas, ObstructedJurunas],

        Disposal: DisposalJurunas,
        Asphalt:AsphaltJurunas,
        Block: BlockJurunas,
        Unpaved: UnpavedJurunas,
        Flooding: FloodingJurunas,
        Repairs: RepairsJurunas,
        Obstructed: ObstructedJurunas,
    },

    {
        id: 4,
        nome: "Benguí",
        municipio: "Belém",
        distrito: "DABEN - Benguí",
        cod_mun: "1501402",
        cod_dist: "150140245",
        area: "1.97",
        limites: LimitsBengui,
        centro: [-48.4552001953125, -1.3759053366666054],
        data: [FloodingBengui, AsphaltBengui, BlockBengui, 
            UnpavedBengui, RepairsBengui, ObstructedBengui],

        Disposal: DisposalBengui,
        Asphalt:AsphaltBengui,
        Block: BlockBengui,
        Unpaved: UnpavedBengui,
        Flooding: FloodingBengui,
        Repairs: RepairsBengui,
        Obstructed: ObstructedBengui,
    },

    {
        id: 5,
        nome: "Cabanagem",
        municipio: "Belém",
        distrito: "DABEN - Benguí",
        cod_mun: "1501402",
        cod_dist: "150140245",
        area: "1.70",
        limites: LimitsCabanagem,
        centro: [-48.43305587768555, -1.3686118205158533],
        data: [AsphaltCabanagem, UnpavedCabanagem,
            FloodingCabanagem, RepairsCabanagem, ObstructedCabanagem],

        Disposal: DisposalCabanagem,
        Asphalt:AsphaltCabanagem,
        Block: null,
        Unpaved: UnpavedCabanagem,
        Flooding: FloodingCabanagem,
        Repairs: RepairsCabanagem,
        Obstructed: ObstructedCabanagem,
    },

    {
        id: 6,
        nome: "Terra Firme",
        limites: LimitsTerraFirme,
        centro: [-48.450565338134766, -1.4550599791599692],
        data: [BlockTerraFirme,AsphaltTerraFirme,RepairsTerraFirme,UnpavedTerraFirme, FloodingTerraFirme, ObstructedTerraFirme],

        Disposal: null,
        Asphalt:AsphaltTerraFirme,
        Block: BlockTerraFirme,
        Unpaved: UnpavedTerraFirme,
        Flooding: FloodingTerraFirme,
        Repairs: RepairsTerraFirme,
        Obstructed: ObstructedTerraFirme,
    },

    {
        id: 7,
        nome: "Guamá",
        limites: LimitsGuama,
        centro: [-48.463053703308105, -1.4699038512829878],
        data: [FloodingGuama, AsphaltGuama, BlockGuama, 
            UnpavedGuama, RepairsGuama, ObstructedGuama],

        Disposal: DisposalGuama,
        Asphalt:AsphaltGuama,
        Block: null,
        Unpaved: UnpavedGuama,
        Flooding: FloodingGuama,
        Repairs: RepairsGuama,
        Obstructed: ObstructedGuama,
    },
];

export default Regions;
