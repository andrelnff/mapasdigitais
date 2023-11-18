import React, {useState, useEffect} from "react";
import './ChartsTable.css'
import ApexChart from 'react-apexcharts'
import { StatisticData } from "../../data/StatisticData";

function ChartsTable(props){
    const [labels, setLabels] = useState([])
    const [seriesArea, setSeriesArea] = useState([])
    const [seriesHab, setSeriesHab] = useState([])
    const [seriesTDomi, setSeriesTDomi] = useState([])
    const [seriesTMorad, setSeriesTMorad] = useState([])
    const [seriesRenTotal, setSeriesRenTotal] = useState([])
    const [seriesRenPerC, setSeriesRenPerC] = useState([])
    const [seriesMedMorad, setSeriesMedMorad] = useState([])
    const [seriesRendaMedChefFM, setSeriesRendaMedChefFM] = useState([])
    const [seriesRendaMedPO, setSeriesRendaMedPO] = useState([])
    const [seriesChefAlfa, setSeriesChefAlfa] = useState([])
    const [seriesPessDBranc, setSeriesPessDBranc] = useState([])
    const [seriesPessDPret, setSeriesPessDPret ] = useState([])
    const [seriesChefMulh, setSeriesChefMulh] = useState([])
    const [seriesAbstAgua, setSeriesAbstAgua] = useState([])
    const [seriesColetLixo, setSeriesColetLixo] = useState([])
    const [seriesArborizacao, setSeriesArborizacao] = useState([])
    const [seriesEsgotoAbert, setSeriesEsgotoAbert] = useState([])
    const [seriesIlumiPub, setSeriesIlumiPub] = useState([])
    const [seriesViasPavi, setSeriesViasPavi] = useState([])
    const [seriesDomCaucada, setSeriesDomCaucada] = useState([])

    useEffect(() => {

        GenerateData(props.controlChart, props.data)

    }, [props.controlChart])   

    function GenerateData(array, data){
        let labels = []
        let seriesArea = []
        let seriesHab = []
        let seriesTDomi = []
        let seriesTMorad = []
        let seriesRenTotal = []
        let seriesRenPerC = []
        let seriesMedMorad = []
        let seriesRendaMedChefFM = []
        let seriesRendaMedPO = []
        let seriesChefAlfa = []
        let seriesPessDBranc = []
        let seriesPessDPret = []
        let seriesChefMulh = []
        let seriesAbstAgua = []
        let seriesColetLixo = []
        let seriesArborizacao = []
        let seriesEsgotoAbert = []
        let seriesIlumiPub = []
        let seriesViasPavi = []
        let seriesDomCaucada = []


        array.forEach((item, index) => {
            if(item === true){
                labels.push(data[index].label)
                seriesArea.push(data[index].area)
                seriesHab.push(data[index].concentracaoPopulacional)
                seriesTDomi.push(data[index].totalDeDomicilios)
                seriesTMorad.push(data[index].totalDeMoradores)
                seriesRenTotal.push(data[index].rendimentoTotal)
                seriesRenPerC.push(data[index].rendimentoPerCapita)
                seriesMedMorad.push(data[index].mediaDeMoradoresEmDomicilios)
                seriesRendaMedChefFM.push(data[index].rendaMediaDosChefesDeFamilia)
                seriesRendaMedPO.push(data[index].rendaMediaDasPessoasOcupadas)
                seriesChefAlfa.push(data[index].chefesDeFamiliaAlfabetizados)
                seriesPessDBranc.push(data[index].pessoasDeclaradasBrancas)
                seriesPessDPret.push(data[index].cessoasDeclaradasPretas)
                seriesChefMulh.push(data[index].chefeDeDomicilioMulheres)
                seriesAbstAgua.push(data[index].domiciliosComAbastecimentoDeAguaPelaRedeGeral)
                seriesColetLixo.push(data[index].domiciliosComColetaDeLixo)
                seriesArborizacao.push(data[index].domiciliosComArborizacaoNasRuas)
                seriesEsgotoAbert.push(data[index].esgotoEmViasACeuAberto)
                seriesIlumiPub.push(data[index].domiciliosComIlumincaoPublica)
                seriesViasPavi.push(data[index].domiciliosComViasPavimentadas)
                seriesDomCaucada.push(data[index].domiciliosComCaucada)



            }
        })

        setLabels(labels)
        setSeriesArea(seriesArea)
        setSeriesHab(seriesHab)
        setSeriesTDomi(seriesTDomi)
        setSeriesTMorad(seriesTMorad)
        setSeriesRenTotal(seriesRenTotal)
        setSeriesRenPerC(seriesRenPerC)
        setSeriesMedMorad(seriesMedMorad)
        setSeriesRendaMedChefFM(seriesRendaMedChefFM)
        setSeriesRendaMedPO(seriesRendaMedPO)
        setSeriesChefAlfa(seriesChefAlfa)
        setSeriesPessDBranc(seriesPessDBranc)
        setSeriesPessDPret(seriesPessDPret)
        setSeriesChefMulh(seriesChefMulh)
        setSeriesAbstAgua(seriesAbstAgua)
        setSeriesColetLixo(seriesColetLixo)
        setSeriesArborizacao(seriesArborizacao)
        setSeriesEsgotoAbert(seriesEsgotoAbert)
        setSeriesIlumiPub(seriesIlumiPub)
        setSeriesViasPavi(seriesViasPavi)
        setSeriesDomCaucada(seriesDomCaucada)

    }


    return <div className="charts-table">
        <div className="grafh">
            <ApexChart
                type="pie"
                width={'100%'}

                series={seriesArea}
                options={{
                    title:{text:'Área em km2'},
                    noData:{text:'Insira regiões.'},
                    chart:{
                        width: '100%',
                        height: '100%'
                    },
                    labels:labels,
                    dataLabels:{
                        formatter: function(val, opts){
                            return opts.w.config.series[opts.seriesIndex]
                        }
                    }
                }}

            >
            </ApexChart>
            
 
        </div>
        <div className="grafh">
        <ApexChart
                type="pie"
                width={'100%'}
                series={seriesHab}
                options={{
                    title:{text:'Concentração Populacional (Habitantes/km2)'},
                    noData:{text:'Insira regiões.'},
                    labels:labels,
                    chart:{
                        width:'100%',
                        height:'100%'
                    },
                    dataLabels:{
                        formatter: function(val, opts){
                            return opts.w.config.series[opts.seriesIndex]
                        }
                    }
                }}

            >
            </ApexChart>
        </div>
        <div className="grafh">
        <ApexChart
                width={'100%'}
                series={[{
                    name: 'Total de Domicílios',
                    type: 'column',
                    data: seriesTDomi
                },{
                    name: 'Total de Moradores',
                    type: 'line',
                    data: seriesTMorad
                }]}
                options={{
                    chart:{
                        width:'100%',
                        height:'100%',
                        type:'line',
                        toolbar:{
                            show:false,
                        }
                    },
                    stroke:{
                        width:[0, 2]
                    },
                    title: { 
                        text:'Total de domicílios e seus respectivos moradores'
                    },
                    noData:{text:'Insira regiões.'},
                    labels: labels,
                    markers: {
                        size: [0, 4]
                    },
                    xaxis: {
                        labels:{
                            style:{
                                fontSize: '10px',

                            }
                        },
                        type: 'category',
                    },
                    yaxis:[
                        {
                            title:{
                                text: 'Total de domicilios'
                            },
                        },{
                            opposite: true,
                            title:{
                                text:'Total de moradores'
                            }
                        }
                    ]
                    

                }}
            >
            </ApexChart>
        </div>
        <div className="grafh">
        <ApexChart
                width={'100%'}
                series={[{
                    name: 'Rendimento Total',
                    type: 'column',
                    data: seriesRenTotal
                },{
                    name: 'Rendimento per capita',
                    type: 'line',
                    data: seriesRenPerC
                }]}
                options={{
                    chart:{
                        width: '100%',
                        height: '100%',
                        type:'line',
                        toolbar:{
                            show:false,
                        }
                    },
                    stroke:{
                        width:[0, 2]
                    },
                    title: { 
                        text:'Rendimento total e per capita dos domicílios (R$)'
                    },
                    noData:{text:'Insira regiões.'},
                    labels: labels,
                    dataLabels:{
                        enabled: true,
                        enabledOnSeries: [1]
                    },
                    xaxis: {
                        labels:{
                            style:{
                                fontSize: '10px',

                            }
                        },
                        type: 'category',
                    },
                    yaxis:[
                        {
                            title:{
                                text: 'Rendimento Total'
                            },
                            labels:{
                                formatter: function (value) {
                                    return (value / 1000000).toFixed(1) + ' M'
                                }
                            }
                        },{
                            opposite: true,
                            title:{
                                text:'Rendimnento Per capita'
                            }
                        }
                    ]
                    

                }}
            >
            </ApexChart>
        </div>
        <div className="grafh">
        <ApexChart
                width={'100%'}
                series={[
                {
                    name: 'Média de moradores em domicílios',
                    type: 'column',
                    data: seriesMedMorad
                },    
                {
                    name: 'Renda média dos chefes de familia',
                    type: 'line',
                    data: seriesRendaMedChefFM
                },{
                    name: 'Renda média das pessoas ocupadas',
                    type: 'line',
                    data: seriesRendaMedPO
                },
                ]}
                options={{
                    chart:{
                        width:'100%',
                        height:'100%',
                        type:'line',
                        toolbar:{
                            show:false,
                        }
                    },
                    stroke:{
                        width:[0 , 2, 2]
                    },
                    title: { 
                        text:'Total de domicílios e seus respectivos moradores'
                    },
                    noData:{text:'Insira regiões.'},
                    labels: labels,
                    dataLabels:{
                        enabled: true
                    },
                    xaxis: {
                        labels:{
                            style:{
                                fontSize: '10px',

                            }
                        },
                        type: 'category',
                    },
                    yaxis:[
                        {
                            title:{
                                text: 'Média de moradores'
                            },
                        },{ 
                            opposite:true,
                            title:{
                                text:'Renda média em (R$)'
                            },
                        },{
                            opposite: true,
                            min: 0,
                            max: 1200,
                            show:false
                        }
                    ]
                    

                }}
            >
            </ApexChart>
        </div>
        <div className="grafh">
        <ApexChart
                width={'100%'}
                series={[{
                    name: 'Chefes de familia alfabetizados',
                    type: 'column',
                    data: seriesChefAlfa
                },{
                    name: 'Pessoas declaradas brancas',
                    type: 'line',
                    data: seriesPessDBranc
                },{
                    name: 'Pessoas declaradas pretas',
                    type: 'line',
                    data: seriesPessDPret
                },{
                    name: 'Chefes de domicilios mulheres',
                    type: 'line',
                    data: seriesChefMulh
                }]}
                options={{
                    chart:{
                        width:'100%',
                        height:'100%',
                        type:'line',
                        toolbar:{
                            show:false,
                        }
                    },
                    stroke:{
                        width:[0, 2]
                    },
                    title: { 
                        text:'Caracterização dos domicilios (%).'
                    },
                    noData:{text:'Insira regiões.'},
                    dataLabels:{
                        enabled: true
                    },
                    labels: labels,
                    xaxis: {
                        labels:{
                            style:{
                                fontSize: '10px',

                            }
                        },
                        type: 'category',
                    },
                    yaxis:{
                        labels:{
                            formatter: function(value) {
                                return value + '%'
                            }
                        }
                    }

                    

                }}
            >
            </ApexChart>
        </div>
        <div className="grafh">
        <ApexChart
                width={'100%'}
                series={[{
                    name: 'Domicílios com abastecimento de água pela rede geral',
                    type: 'line',
                    data: seriesAbstAgua
                },{
                    name: 'Domicílios com com coleta de lixo',
                    type: 'line',
                    data: seriesColetLixo
                },{
                    name: 'Domicílios com arborização',
                    type: 'line',
                    data: seriesArborizacao
                },{
                    name: 'Domicilios com esgoto à céu aberto',
                    type: 'line',
                    data: seriesEsgotoAbert
                }]}
                options={{
                    chart:{
                        width:'100%',
                        height:'100%',
                        type:'line',
                        toolbar:{
                            show:false,
                        }
                    },
                    stroke:{
                        width:[2, 2, 3, 2]
                    },
                    title: { 
                        text:'Condições dos domicílios. (%)'
                    },
                    noData:{text:'Insira regiões.'},
                    dataLabels:{
                        enabled:true,

                    },
                    labels: labels,
                    xaxis: {
                        labels:{
                            style:{
                                fontSize: '10px',

                            }
                        },
                        type: 'category',
                    },
                    yaxis:{
                        labels:{
                            formatter: function(value) {
                                return value + '%'
                            }
                        }
                    }

                    

                }}
            >
            </ApexChart>
        </div>
        <div className="grafh">
        <ApexChart
                width={'100%'}
                series={[{
                    name: 'Domicílios com iluminação pública',
                    type: 'line',
                    data: seriesIlumiPub
                },{
                    name: 'Domicílios com ruas pavimentadas',
                    type: 'line',
                    data: seriesViasPavi
                },{
                    name: 'Domicílios com cauçada',
                    type: 'line',
                    data: seriesDomCaucada
                }]}
                options={{
                    chart:{
                        width:'100%',
                        height:'100%',
                        type:'line',
                        toolbar:{
                            show:false,
                        }
                    },
                    stroke:{
                        width:[2, 2, 2]
                    },
                    title: { 
                        text:'Condições dos domicílios. (%)'
                    },
                    noData:{text:'Insira regiões.'},
                    dataLabels:{
                        enabled:true,

                    },
                    labels: labels,
                    xaxis: {
                        labels:{
                            style:{
                                fontSize: '10px',

                            }
                        },
                        type: 'category',
                    },
                    yaxis:{
                        labels:{
                            formatter: function(value) {
                                return value + '%'
                            }
                        }
                    }
                }}
            >
            </ApexChart>
        </div>
        <p>Fonte: IBGE 2010</p>
    </div>
}

export default ChartsTable