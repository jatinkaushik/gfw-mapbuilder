export default {
  "webmap": "16ef7b1a5de44ff59f8e86401b62f5e3",
  "title": "Natures Strongholds Impact Platform",
  "subtitle": "Demonstrating Our Global Impact",
  "logoUrl": "https://measures.wcs.org/Portals/_default/Skins/WCS_2016/images/wcsPeru_logo.png",
  "logoLinkUrl": "https://www.wcs.org",
  "aboutLinkUrl": "",
  "downloadLinkUrl": "",
  "printServiceUrl": "https://gis.forest-atlas.org/server/rest/services/print/ExportWebMap/GPServer/Export Web Map",
  "maskServiceUrl": "",
  "mapThemeIds": "",
  "mapThemes": "",
  "narrative": "",
  "includeSubscribeButton": false,
  "includeMyGFWLogin": false,
  "navLinksInNewTab": false,
  "hideHeader": false,
  "hideFooter": false,
  "language": "en",
  "useAlternativeLanguage": false,
  "alternativeWebmap": "",
  "alternativeLanguage": "",
  "alternativeLanguageTitle": "",
  "alternativeLanguageSubtitle": "",
  "alternativeMapThemes": "",
  "alternativeNarrative": "",
  "alternativeWebmapMenuName": "",
  "includeDocumentsTab": false,
  "documentsDirectory": "https://cmr.forest-atlas.org/resources/docs/",
  "documentsMapserver": "https://gis.forest-atlas.org/server/rest/services/CMR/documents_administratifs/MapServer",
  "iso": "",
  "activeFires": false,
  "initialExtent": {
      "x": "",
      "y": "",
      "z": ""
  },
  "viirsFires": true,
  "modisFires": true,
  "intactForests": true,
  "aboveGroundBiomass": true,
  "landCover": true,
  "mangroves": true,
  "sadAlerts": true,
  "gladAlerts": true,
  "terraIAlerts": true,
  "webmapMenuName": "",
  "slopePotentialOptions": "",
  "alternativeSlopePotentialOptions": "",
  "slopePotentialColors": "",
  "slopeClassNames": "",
  "slopeClassColors": "",
  "treeCoverClassNames": "",
  "treeCoverClassColors": "",
  "landCoverClassNames": "",
  "landCoverClassColors": "",
  "populationClassNames": "",
  "populationClassColors": "",
  "rainfallClassNames": "",
  "rainfallClassColors": "",
  "alternativeSlopeDescription": "",
  "sharinghost": "https://www.arcgis.com",
  "analyticsCode": "",
  "userFeatureToken": "",
  "analysisModules": [{
      "analysisId": "WCS_SpeciesPopulationTrend_WCSBarChart2DropDown_[TabID]_[PortalID]_[Locale]___",
      "label": {
          "en": "Species: Population Trend"
      },
      "title": {
          "en": "Species: Population Trend"
      },
      "description": {
          "en": "Population trend analysis based on field surveys and peer reviewed papers"
      },
      "chartType": "bar",
      "useGfwWidget": true,
      "widgetId": "53a2ad48-46c2-41b0-9a72-8d6ef34131c9",
      "uiParams": "none",
      "featureDataFieldsToPass": ["polygonname", "analysisId"],
      "fieldToSubstitute": "AnnualPopulationTrend"
  },
  // {
  //     "analysisId": "FRAGMENTATION",
  //     "label": {
  //         "en": "Habitat: Fragmentation Analysis",
  //         "fr": "Total perte/ gain en couvert arborÃƒÂ©",
  //         "es": "PÃƒÂ©rdida/ Aumento de la cobertura arbÃƒÂ³rea",
  //         "pt": "Perda/ Ganho de cobertura arbÃƒÂ³rea",
  //         "id": "Total tree cover loss/ gain",
  //         "zh": "Ã¦Â£Â®Ã¦Å¾â€”Ã¨Â¦â€ Ã§â€ºâ€“Ã¦ÂÅ¸Ã¥Â¤Â±/ Ã¦Â£Â®Ã¦Å¾â€”Ã¨Â¦â€ Ã§â€ºâ€“Ã¥Â¢Å¾Ã¯Â¿Â½ ",
  //         "ka": "Ã¡Æ’Â®Ã¡Æ’ËœÃ¡Æ’Â¡ Ã¡Æ’â€¢Ã¡Æ’ÂÃ¯Â¿Â½ Ã¡Æ’Â¯Ã¡Æ’ËœÃ¡Æ’Â¡ Ã¡Æ’â„¢Ã¡Æ’ÂÃ¯Â¿Â½ Ã¡Æ’â€™Ã¡Æ’â€¢Ã¡Æ’Â/ Ã¡Æ’Å“Ã¡Æ’ÂÃ¡Æ’â€ºÃ¡Æ’ÂÃ¡Æ’Â¢Ã¡Æ’Ëœ"
  //     },
  //     "title": {
  //         "en": "Fragmentation",
  //         "fr": "Forest Loss Analysis",
  //         "es": "Forest Loss Analysis",
  //         "pt": "Forest Loss Analysis",
  //         "id": "Forest Loss Analysis",
  //         "zh": "Forest Loss Analysis",
  //         "ka": "Forest Loss Analysis"
  //     },
  //     "description": {
  //         "en": "Select a year range click the run analysis button to see net change in the fragmentation for your selected polygons(s)",
  //         "fr": "Select range and tree cover density then click the run analysis button to see results",
  //         "es": "Select range and tree cover density then click the run analysis button to see results",
  //         "pt": "Select range and tree cover density then click the run analysis button to see results",
  //         "id": "Select range and tree cover density then click the run analysis button to see results",
  //         "zh": "Select range and tree cover density then click the run analysis button to see results",
  //         "ka": "Select range and tree cover density then click the run analysis button to see results"
  //     },
  //     "chartType": "badge",
  //     "valueAttribute": "data",
  //     "badgeLabel": {
  //         "en": "Active Fires",
  //         "fr": "Feux actifs",
  //         "es": "Incendios activos",
  //         "pt": "IncÃªndios ativos",
  //         "id": "Active fires",
  //         "zh": "æ´»è·ƒç«ç‚¹",
  //         "ka": "áƒáƒ¥áƒ¢áƒ˜áƒ£áƒ áƒ˜ áƒ®áƒáƒœáƒ«áƒ áƒ”áƒ‘áƒ˜"
  //     },
  //     "analysisUrl": "https://us-central1-ambell-166721.cloudfunctions.net/wcs-ee-deforestation-debug",
  //     "uiParams": [{
  //         "inputType": "rangeSlider",
  //         "startParamName": "period",
  //         "combineParams": true,
  //         "valueSeparator": ",",
  //         "bounds": [2001, 2017],
  //         "valueType": "date",
  //         "label": {
  //             "en": "Select range for analysis",
  //             "fr": "Select range for analysis",
  //             "es": "Select range for analysis",
  //             "pt": "Select range for analysis",
  //             "id": "Select range for analysis",
  //             "zh": "Select range for analysis",
  //             "ka": "Select range for analysis"
  //         }
  //     }]
  // },
  {
      analysisId: 'TC_LOSS_GAIN',
      chartType: 'badge',
      label: {
        en: 'Total tree cover loss/ gain',
        fr: 'Perte/gain total de la couverture arborée',
        es: 'Pérdida/ganancia de cobertura arbórea total',
        pt: 'Perda/ganho total de cobertura arbórea',
        id: 'Total kehilangan/perolehan tutupan pohon ',
        zh: '总森林覆盖减少/增加面积量',
        ka: 'ხის ვარჯის საერთო კარგვა / მატება'
      },
      title: {
        en: 'Total tree cover loss/ gain',
        fr: 'Perte/gain total de la couverture arborée',
        es: 'Pérdida/ganancia de cobertura arbórea total',
        pt: 'Perda/ganho total de cobertura arbórea',
        id: 'Total kehilangan/perolehan tutupan pohon ',
        zh: '总森林覆盖减少/增加面积量',
        ka: 'ხის ვარჯის საერთო კარგვა / მატება'
      },
      description: {
        en: 'Select range and tree cover density for loss data then click the run analysis button to see results. Gain data is currently only available for 2000 – 2012 and the gain analysis will always reflect the full 12-year time-period.',
        fr: 'Sélectionner la plage et la densité de couverture arborée pour les données de perte, puis cliquer sur le bouton « lancer l’analyse » pour voir les résultats. Les données de gain ne sont actuellement disponibles que pour 2000 – 2012 et l’analyse de gain reflétera toujours la plage de 12 ans entière.',
        es: 'Para obtener los datos sobre pérdida, seleccione el rango y la densidad de la cobertura arbórea, después haga clic en el botón ejecutar análisis para ver los resultados. Los datos sobre ganancia actualmente solo están disponibles para los años 2000 a 2012 y el análisis de la ganancia siempre reflejará el periodo de 12 años completo.',
        pt: 'Selecione o período e a densidade de cobertura arbórea para dados de perda; em seguida, clique no botão para executar a análise e ver os resultados. Os dados de ganho estão disponíveis atualmente apenas para o período 2000 – 2012 e a análise de ganho sempre refletirá o período completo de 12 anos.',
        id: 'Pilih rentang dan kerapatan tutupan pohon untuk data yang hilang, kemudian klik tombol mulai analisis untuk melihat hasilnya. Data perolehan saat ini hanya tersedia untuk periode 2000 – 2012 dan analisis perolehan akan selalu mencerminkan periode waktu 12 tahun penuh.',
        zh: '选择要考察减少量数据的范围和森林覆盖密度，然后点击“运行分析”按钮查看结果。目前仅有 2000 – 2012 年的增加量数据，增加分析始终反映这 12 年的完整情况。',
        ka: 'შეარჩიეთ საზღვრები და ხის ვარჯის სიხშირე კარგვის მონაცემებისთვის, შემდეგ დააჭირეთ ღილაკს ანალიზის  ჩატარება შედეგების სანახავად. მატების მონაცემები ამჟამად ხელმისაწვდომია 2000-2012 წლებისთვის და მატების ანალიზი ყოველთვის ასახავს სრულ 12-წლიან დროის პერიოდს.'
      },
      useGfwWidget: true,
      widgetId: '95c2c559-ca78-4b7a-b18b-7b2bca14ce83',
      uiParams: [{
          inputType: 'rangeSlider',
          startParamName: 'period',
          combineParams: true,
          valueSeparator: ',',
          bounds: [2001, 2018],
          valueType: 'date',
          label: {
            en: 'Select range for analysis',
            fr: 'Sélectionner une plage pour l’analyse:',
            es: 'Seleccione un rango para el análisis:',
            pt: 'Selecione o período para análise:',
            id: 'Pilih rentang untuk analisis:',
            zh: '选择分析范围:',
            ka: 'საზღვრების შერჩევა ანალიზისთვის:'
          }
        },
        {
          name: 'thresh',
          inputType: 'tcd',
          label: {
            en: 'Select tree cover density: ',
            fr: 'Sélectionner la densité de couverture arborée: ',
            es: 'Seleccione la densidad de la cobertura arbórea: ',
            pt: 'Selecione a densidade de cobertura arbórea: ',
            id: 'Pilih kerapatan tutupan pohon: ',
            zh: '选择森林覆盖密度: ',
            ka: 'ხის ვარჯის სიხშირის შერჩევა: '
          }
        }
      ]
    },
    {
      analysisId: 'TC_LOSS',
      chartType: 'bar',
      label: {
        en: 'Annual Tree cover loss',
        fr: 'Pertes de la couverture arborée annuelles',
        es: 'Pérdida de cobertura arbórea anual',
        pt: 'Perda anual de cobertura arbórea',
        id: 'Kehilangan tutupan pohon tahunan',
        zh: '年度森林覆盖减少量面积',
        ka: 'წლიური ხის ვარჯის კარგვა'
      },
      title: {
        en: 'Annual Tree cover loss',
        fr: 'Pertes de la couverture arborée annuelles',
        es: 'Pérdida de cobertura arbórea anual',
        pt: 'Perda anual de cobertura arbórea',
        id: 'Kehilangan tutupan pohon tahunan',
        zh: '年度森林覆盖减少量面积',
        ka: 'წლიური ხის ვარჯის კარგვა'
      },
      description: {
        en: 'Select range and tree cover density then click the run analysis button to see results.',
        fr: 'Sélectionner la plage et la densité de couverture arborée, puis cliquer sur le bouton « Lancer l’analyse » pour voir les résultats.',
        es: 'Para ver los resultados, seleccione el rango y la densidad de la cobertura arbórea, después haga clic en el botón ejecutar análisis.',
        pt: 'Para ver os resultados, selecione o período e a densidade de cobertura arbórea; em seguida, clique no botão para executar a análise.',
        id: 'Pilih rentang dan kerapatan tutupan pohon kemudian klik tombol mulai analisis untuk melihat hasil.',
        zh: '选择范围和森林覆盖密度，然后点击“运行分析”按钮查看结果。',
        ka: 'შეარჩიეთ საზღვრები და ხის ვარჯის სიხშირე, შემდეგ დააჭირეთ ღილაკს ანალიზის ჩატარება შედეგებს სანახავად.'
      },
      useGfwWidget: true,
      widgetId: 'e53e541c-92cd-4b00-9aa7-2c7bb36d4697',
      uiParams: [{
          inputType: 'rangeSlider',
          startParamName: 'period',
          combineParams: true,
          valueSeparator: ',',
          bounds: [2001, 2018],
          valueType: 'date',
          label: {
            en: 'Select range for analysis',
            fr: 'Sélectionner une plage pour l’analyse:',
            es: 'Seleccione un rango para el análisis:',
            pt: 'Selecione o período para análise:',
            id: 'Pilih rentang untuk analisis:',
            zh: '选择分析范围:',
            ka: 'საზღვრების შერჩევა ანალიზისთვის:'
          }
        },
        {
          name: 'thresh',
          inputType: 'tcd',
          label: {
            en: 'Select tree cover density: ',
            fr: 'Sélectionner la densité de couverture arborée: ',
            es: 'Seleccione la densidad de la cobertura arbórea: ',
            pt: 'Selecione a densidade de cobertura arbórea: ',
            id: 'Pilih kerapatan tutupan pohon: ',
            zh: '选择森林覆盖密度: ',
            ka: 'ხის ვარჯის სიხშირის შერჩევა: '
          }
        }
      ],
    },
    {
      analysisId: 'IFL',
      chartType: 'bar',
      label: {
        en: 'Annual tree cover loss in IFL',
        fr: 'Perte annuelle de la couverture arborée en PFI',
        es: 'Pérdida de cobertura arbórea anual en IFL',
        pt: 'Perda anual de cobertura arbórea em IFL',
        id: 'Kehilangan tutupan pohon tahunan di IFL',
        zh: '年度原生森林（IFL）覆盖减面积',
        ka: 'ყოველწლიური ხის ვარჯის კარგვა ხტლ-ში'
      },
      title: {
        en: 'Annual Tree Cover Loss in Intact Forest Landscapes (IFL)',
        fr: 'Perte annuelle de la couverture arborée en Paysage Forestier Intact (PFI)',
        es: 'Pérdida de cobertura arbórea anual en Paisajes Forestales Intactos (Intact Forest Landscapes, IFL)',
        pt: 'Perda anual de cobertura arbórea em paisagens florestais intactas (IFL)',
        id: 'Kehilangan Tutupan Pohon Tahunan di Lanskap Hutan Utuh (IFL)',
        zh: '年度原生森林（IFL）树木覆盖减面积',
        ka: 'ყოველწლიური ხის ვარჯის კარგვა ხელუხლებელი ტყის ლანდშაფტებში (ხტლ)'
      },
      description: {
        en: 'Results will not be available if the area you selected does not include IFL. Select range and tree cover density then click the run analysis button to see results.',
        fr: 'Les résultats ne seront pas disponibles si la zone que vous avez sélectionnée n’inclut pas de PFI. Sélectionner la plage et la densité de couverture arborée, puis cliquer sur le bouton « Lancer l’analyse » pour voir les résultats.',
        es: 'Los resultados no estarán disponibles si el área que seleccionó no incluye IFL. Para ver los resultados, seleccione el rango y la densidad de la cobertura arbórea, después haga clic en el botón ejecutar análisis.',
        pt: 'Os resultados não estarão disponíveis se a área selecionada não for considerada IFL. Para ver os resultados, selecione o período e a densidade de cobertura arbórea; em seguida, clique no botão para executar a análise.',
        id: 'Hasil tidak akan tersedia jika kawasan yang Anda pilih tidak mencakup Lanskap Hutan Utuh (IFL). Pilih rentang dan kerapatan tutupan pohon kemudian klik tombol mulai analisis untuk melihat hasil.',
        zh: '如果您选择的区域不包括原生森林，将不会提供结果。选择范围和森林覆盖密度，然后点击“运行分析”按钮查看结果。',
        ka: 'შედეგები არ იქნება ხელმისაწვდომი, თუკი თქვენ მიერ შერჩეული ფართობი არ შეიცავს ხტლ-ს. შეარჩიეთ საზღვრები და ხის ვარჯის სიხშირე, შემდეგ დააჭირეთ ღილაკს ანალიზის ჩატარება შედეგების სანახავად.'
      },
      "useGfwWidget": true,
      "widgetId": "2083a1bc-440d-43fe-8b50-ff9918a37c57",
      params: [{
        name: 'layer',
        value: 'ifl2000'
      }],
      uiParams: [{
          inputType: 'rangeSlider',
          startParamName: 'period',
          combineParams: true,
          valueSeparator: ',',
          bounds: [2001, 2018],
          valueType: 'date',
          label: {
            en: 'Select range for analysis',
            fr: 'Sélectionner une plage pour l’analyse:',
            es: 'Seleccione un rango para el análisis:',
            pt: 'Selecione o período para análise:',
            id: 'Pilih rentang untuk analisis:',
            zh: '选择分析范围:',
            ka: 'საზღვრების შერჩევა ანალიზისთვის:'
          }
        },
        {
          name: 'thresh',
          inputType: 'tcd',
          label: {
            en: 'Select tree cover density: ',
            fr: 'Sélectionner la densité de couverture arborée: ',
            es: 'Seleccione la densidad de la cobertura arbórea: ',
            pt: 'Selecione a densidade de cobertura arbórea: ',
            id: 'Pilih kerapatan tutupan pohon: ',
            zh: '选择森林覆盖密度: ',
            ka: 'ხის ვარჯის სიხშირის შერჩევა: '
          }
        }
      ]
    },
    {
      analysisId: 'Loss_LandCover',
      chartType: 'bar',
      label: {
        en: 'Annual tree cover loss by land cover class',
        fr: 'Perte annuelle de la couverture arborée par catégorie de couverture terrestre',
        es: 'Pérdida de cobertura arbórea anual por clase de cobertura de tierra',
        pt: 'Perda anual de cobertura arbórea por classe de cobertura de terra',
        id: 'Kehilangan tutupan pohon tahunan berdasarkan  kelas tutupan lahan',
        zh: '年度森林覆盖减少量（按土地覆盖分类）',
        ka: 'ყოველწლიური ხის ვარჯის კარგვა მიწის საფარის კლასის მიხედვით'
      },
      title: {
        en: 'Annual tree cover loss by land cover class',
        fr: 'Perte annuelle de la couverture arborée par catégorie de couverture terrestre',
        es: 'Pérdida de cobertura arbórea anual por clase de cobertura de tierra',
        pt: 'Perda anual de cobertura arbórea por classe de cobertura de terra',
        id: 'Kehilangan tutupan pohon tahunan berdasarkan  kelas tutupan lahan',
        zh: '年度森林覆盖减少量（按土地覆盖分类）',
        ka: 'ყოველწლიური ხის ვარჯის კარგვა მიწის საფარის კლასის მიხედვით'
      },
      description: {
        en: 'Land cover data from 2000 and provided by the European Space Agency (ESA) and UCLouvain. Select range and tree cover density then click the run analysis button to see results.',
        fr: 'Données de couverture du sol datant de 2000 et fournies par l’Agence Spatiale Européenne (European Space Agency, ESA) et UCLouvain. Sélectionner la plage et la densité de couverture arborée, puis cliquer sur le bouton « Lancer l’analyse » pour voir les résultats.',
        es: 'Los datos de la cobertura de tierra son de 2000 y fueron proporcionados por la Agencia Espacial Europea (European Space Agency, ESA) y UCLouvain. Para ver los resultados, seleccione el rango y la densidad de la cobertura arbórea, después haga clic en el botón ejecutar análisis.',
        pt: 'Dados de cobertura de terra relativos ao período posterior a 2000 e fornecidos pela Agência Espacial Europeia (ESA) e pela Universidade Católica da Lovaina (UCLouvain). Para ver os resultados, selecione o período e a densidade de cobertura arbórea; em seguida, clique no botão para executar a análise.',
        id: 'Data tutupan lahan dari tahun 2000 dan disediakan oleh Badan Antariksa Eropa –(ESA) dan UCLouvain. Pilih rentang dan kerapatan tutupan pohon kemudian klik tombol mulai analisis untuk melihat hasil.',
        zh: '自 2000 年以来的土地覆盖数据，由欧洲空间局 (ESA) 和 UCLouvain 提供。选择范围和森林覆盖密度，然后点击“运行分析”按钮查看结果。',
        ka: 'მიწის საფარის მონაცემები 2000 წლიდან მოწოდებულია ევროპული კოსმოსური სააგენტოს (ESA) და ლუვენის კათოლიკური უნივერსიტეტის (UCLouvain) მიერ. შეარჩიეთ საზღვრები და ხის ვარჯის სიხშირე, შემდეგ დააჭირეთ ღილაკს ანალიზის ჩატარება შედეგების სანახავად.'
      },
      useGfwWidget: true,
      widgetId: '31f78466-fc0b-42f9-a7ae-bea8559740d8',
      params: [{
        name: 'layer',
        value: 'gfw-landcover-2000'
      }],
      uiParams: [{
          inputType: 'rangeSlider',
          startParamName: 'period',
          combineParams: true,
          valueSeparator: ',',
          bounds: [2001, 2018],
          valueType: 'date',
          label: {
            en: 'Select range for analysis',
            fr: 'Sélectionner une plage pour l’analyse:',
            es: 'Seleccione un rango para el análisis:',
            pt: 'Selecione o período para análise:',
            id: 'Pilih rentang untuk analisis:',
            zh: '选择分析范围:',
            ka: 'საზღვრების შერჩევა ანალიზისთვის:'
          }
        },
        {
          name: 'thresh',
          inputType: 'tcd',
          label: {
            en: 'Select tree cover density: ',
            fr: 'Sélectionner la densité de couverture arborée: ',
            es: 'Seleccione la densidad de la cobertura arbórea: ',
            pt: 'Selecione a densidade de cobertura arbórea: ',
            id: 'Pilih kerapatan tutupan pohon: ',
            zh: '选择森林覆盖密度: ',
            ka: 'ხის ვარჯის სიხშირის შერჩევა: '
          }
        }
      ]
    },
    {
      analysisId: 'BIO_LOSS',
      chartType: 'bar',
      label: {
        en: 'CO2 emissions from biomass loss',
        fr: 'Émissions de Co2 de la perte de biomasse',
        es: 'Emisiones de CO2 provenientes de la pérdida de biomasa',
        pt: 'Emissões de CO₂ por perda de biomassa',
        id: 'Emisi CO2 dari kehilangan biomassa',
        zh: '生物量损失导致的二氧化碳排放量',
        ka: 'CO2 ემისია ბიომასის კარგვის გამო'
      },
      title: {
        en: 'Carbon Dioxide Emissions from Above Ground Live Woody Biomass Loss',
        fr: 'Émissions de dioxyde de carbone de la perte de biomasse ligneuse vivante aérienne',
        es: 'Emisiones de dióxido de carbono provenientes de la pérdida de biomasa leñosa viva en superficie',
        pt: 'Emissões de dióxido de carbono por perda de biomassa de vegetação lenhosa viva acima do solo',
        id: 'Emisi Karbon Dioksida dari kehilangan biomassa vegetasi berkayu di atas permukaan tanah',
        zh: '地上活木生物量损失导致的二氧化碳排放',
        ka: 'ნახშირორჟანგის ემისია მიწისზედა ცოცხალი ბიომასის კარგვის გამო'
      },
      description: {
        en: 'Emissions do not include carbon emissions from other sources besides woody biomass (tree cover) loss. Select range and tree cover density then click the run analysis button to see results.',
        fr: 'Les émissions n’incluent pas les émissions de carbone d’autres sources que la perte de biomasse (couverture arborée). Sélectionner la plage et la densité de couverture arborée, puis cliquer sur le bouton « Lancer l’analyse » pour voir les résultats.',
        es: 'Las emisiones no incluyen las emisiones de carbono de otras fuentes además de la pérdida de biomasa leñosa (cobertura arbórea). Para ver los resultados, seleccione el rango y la densidad de la cobertura arbórea, después haga clic en el botón ejecutar análisis.',
        pt: 'As estimativas não incluem emissões de carbono geradas por fontes diferentes de perda (de cobertura arbórea) de biomassa de material lenhoso. Para ver os resultados, selecione o período e a densidade de cobertura arbórea; em seguida, clique no botão para executar a análise.',
        id: 'Emisi tidak termasuk emisi karbon dari sumber lain selain kehilangan biomasa kayu (tutupan pohon). Pilih rentang dan kerapatan tutupan pohon kemudian klik tombol mulai analisis untuk melihat hasil.',
        zh: '排放量不包括除树木生物量（森林覆盖）损失之外的其他来源导致的碳排放量。选择范围和森林覆盖密度，然后点击“运行分析”按钮查看结果。总碳排放量 (吨 二氧化碳)',
        ka: 'ემისიები არ შეიცავენ ნახშირის ემისიებს სხვა წყაროებიდან, გარდა ცოცხალი ბიომასის (ხის ვარჯი) კარგვის. შეარჩიეთ საზღვრები და ხის ვარჯის სიხშირე, შემდეგ დააჭირეთ ღილაკს ანალიზის ჩატარება შედეგების სანახავად.'
      },
      useGfwWidget: true,
      widgetId: 'ac38fdbd-fdb1-4d8e-9109-674013fb51a2',
      uiParams: [{
          inputType: 'rangeSlider',
          startParamName: 'period',
          combineParams: true,
          valueSeparator: ',',
          bounds: [2001, 2018],
          valueType: 'date',
          label: {
            en: 'Select range for analysis',
            fr: 'Sélectionner une plage pour l’analyse:',
            es: 'Seleccione un rango para el análisis:',
            pt: 'Selecione o período para análise:',
            id: 'Pilih rentang untuk analisis:',
            zh: '选择分析范围:',
            ka: 'საზღვრების შერჩევა ანალიზისთვის:'
          }
        },
        {
          name: 'thresh',
          inputType: 'tcd',
          label: {
            en: 'Select tree cover density: ',
            fr: 'Sélectionner la densité de couverture arborée: ',
            es: 'Seleccione la densidad de la cobertura arbórea: ',
            pt: 'Selecione a densidade de cobertura arbórea: ',
            id: 'Pilih kerapatan tutupan pohon: ',
            zh: '选择森林覆盖密度: ',
            ka: 'ხის ვარჯის სიხშირის შერჩევა: '
          }
        }
      ]
    },
    {
      analysisId: 'GLAD_ALERTS',
      chartType: 'line',
      label: {
        en: 'GLAD alerts per month',
        fr: 'Alertes GLAD par mois',
        es: 'Alertas GLAD por mes',
        pt: 'Alertas GLAD por mês',
        id: 'Peringatan GLAD per bulan',
        zh: '每月 GLAD 预警',
        ka: 'GLAD შეტყობინებები'
      },
      title: {
        en: 'GLAD alerts per month',
        fr: 'Alertes GLAD par mois',
        es: 'Alertas GLAD por mes',
        pt: 'Alertas GLAD por mês',
        id: 'Peringatan GLAD per bulan',
        zh: '每月 GLAD 预警',
        ka: 'GLAD შეტყობინებები'
      },
      description: {
        en: 'Count the number of GLAD tree cover loss alerts per month.',
        fr: 'Compte le nombre d’alertes GLAD de perte de la couverture arborée par mois.',
        es: 'Cuente el número de alertas GLAD sobre pérdida de cobertura arbórea por mes.',
        pt: 'Quantificação de alertas GLAD de perda de cobertura arbórea por mês.',
        id: 'Hitung jumlah peringatan kehilangan tutupan pohon GLAD per bulan.',
        zh: 'Count the number of GLAD tree cover loss alerts per month.',
        ka: 'Count the number of GLAD tree cover loss alerts per month.'
      },
      useGfwWidget: true,
      widgetId: '0734ba0a-3a6c-4388-aa4a-5871791b1d1f',
      uiParams: 'none'
    },
    {
      analysisId: 'TOTAL_GLAD_ALERTS',
      chartType: 'badge',
      label: {
        en: 'Total GLAD Alerts',
        fr: 'Total des alertes GLAD',
        es: 'Alertas GLAD totales',
        pt: 'Total de alertas GLAD',
        id: 'Total Peringatan GLAD',
        zh: 'GLAD 预警总数',
        ka: 'GLAD შეტყობინებები'
      },
      title: {
        en: 'Total GLAD Alerts',
        fr: 'Total des alertes GLAD',
        es: 'Alertas GLAD totales',
        pt: 'Total de alertas GLAD',
        id: 'Total Peringatan GLAD',
        zh: 'GLAD 预警总数',
        ka: 'Total GLAD Alerts'
      },
      description: {
        en: 'Count the number of GLAD alerts which occurred within the selected time range.',
        fr: 'Compte le nombre d’alertes GLAD durant la période sélectionnée.',
        es: 'Cuente el número de alertas GLAD que ocurrieron en el rango de tiempo seleccionado.',
        pt: 'Quantifica o número de alertas GLAD ocorridos em um período selecionado.',
        id: 'Hitung jumlah peringatan GLAD yang terjadi dalam rentang waktu yang dipilih.',
        zh: '统计在所选时间范围内出现的 GLAD 预警次数。',
        ka: 'Count the number of GLAD tree cover loss alerts per month.'
      },
      useGfwWidget: true,
      widgetId: '16ff6282-8ceb-4055-938a-43726a62b205',
      uiParams: [{
        inputType: 'datepicker',
        startParamName: 'period',
        combineParams: true,
        valueSeparator: ',',
        multi: true,
        defaultStartDate: '2018-01-01',
        minDate: '2015-01-01',
        label: {
          en: 'Select range for analysis',
          fr: 'Sélectionner une plage pour l’analyse',
          es: 'Seleccione un rango para el análisis',
          pt: 'Selecione o período para análise',
          id: 'Pilih rentang untuk analisis',
          zh: '选择分析范围',
          ka: 'საზღვრების შერჩევა ანალიზისთვის'
        }
      }]
    },
    {
      analysisId: 'VIIRS_FIRES',
      chartType: 'badge',
      label: {
        en: 'VIIRS Active Fires',
        fr: 'Feux actifs VIIRS',
        es: 'Incendios activos VIIRS',
        pt: 'Incêndios ativos VIIRS',
        id: 'Kebakaran Aktif VIIRS',
        zh: 'VIIRS 活跃火点',
        ka: 'VIIRS აქტიური ხანძრები'
      },
      title: {
        en: 'VIIRS Active Fires',
        fr: 'Feux actifs VIIRS',
        es: 'Incendios activos VIIRS',
        pt: 'Incêndios ativos VIIRS',
        id: 'Kebakaran Aktif VIIRS',
        zh: 'VIIRS 活跃火点',
        ka: 'VIIRS აქტიური ხანძრები'
      },
      description: {
        en: 'This analysis counts the number of VIIRS fire alert detections during the past 7 days',
        fr: 'Cette analyse compte le nombre d’alertes de détection d’incendies VIIRS durant les 7 derniers jours',
        es: 'Este análisis cuenta el número de detecciones de alertas de incendios VIIRS durante los últimos siete días',
        pt: 'Incêndios ativos VIIRS',
        id: 'Analisis ini menghitung jumlah deteksi peringatan kebakaran VIIRS selama 7 hari terakhir',
        zh: '此分析可统计过去 7 天 VIIRS 火警监测的次数。',
        ka: 'ეს ანალიზი თვლის VIIRS ხანძრის შეტყობინებების გამოვლენის რაოდენობას ბოლო 7 დღის განმავლობაში.'
      },
      useGfwWidget: true,
      widgetId: '5d696f96-e6c7-4323-8bda-4c99cd6b0cb4',
      uiParams: 'none'
    },
    {
      analysisId: 'LCC',
      chartType: 'pie',
      label: {
        en: 'Land Cover Composition',
        fr: 'Composition de la couverture terrestre',
        es: 'Cobertura terrestre',
        pt: 'Cobertura do Solo',
        id: 'Komposisi tutupan lahan',
        zh: '土地覆盖构成',
        ka: 'მიწის საფარის შემადგენლობა'
      },
      title: {
        en: 'Land Cover Composition',
        fr: 'Composition de la couverture terrestre',
        es: 'Composición de la cobertura de tierra',
        pt: 'Composição da cobertura de terra',
        id: 'Komposisi tutupan lahan',
        zh: '土地覆盖构成',
        ka: 'მიწის საფარის შემადგენლობა'
      },
      description: {
        en: 'Land cover data is from 2015 and provided by the European Space Agency (ESA) and UCLouvain.',
        fr: 'Les données de la couverture terrestre datent de 2015 et sont fournies par l’Agence Spatiale Européenne (European Space Agency, ESA) et UCLouvain.',
        es: 'Los datos de la cobertura de tierra son de 2015 y fueron proporcionados por la Agencia Espacial Europea (European Space Agency, ESA) y UCLouvain. ',
        pt: 'Dados de cobertura de terra relativos ao período posterior a 2015 e fornecidos pela Agência Espacial Europeia (ESA) e pela UCLouvain. ',
        id: 'Data tutupan lahan dari tahun 2015 yang disediakan oleh Badan Antariksa Eropa () dan UCLouvain.',
        zh: '自 2015 年以来的土地覆盖数据，由欧洲空间局 (ESA) 和 UCLouvain 提供。 ',
        ka: 'მიწის საფარის მონაცემები 2015 წლის შემდეგაა და მოწოდებულია ევროპული კოსმოსური სააგენტოს (ESA)  და ლუვენის კათოლიკური უნივერსიტეტის (UCLouvain) მიერ.'
      },
      useGfwWidget: true,
      widgetId: '1b84364d-0efd-4d60-81ef-870f7d13ee7b',
      uiParams: 'none',
      params: [{
        name: 'layer',
        value: 'gfw-landcover-2015'
      }]
    },],
  "layerPanel": {
      "GROUP_WEBMAP": {
          "order": 1,
          "label": {
              "en": "WCS Layers"
          },
          "layers": []
      },
      "GROUP_LCD": {
          "groupType": "default",
          "order": 2,
          "label": {
              "en": "Land Cover Dynamics",
              "fr": "Evolution de la couverture des sols",
              "es": "Din?mica de la Cobertura del Suelo",
              "pt": "Din?mica de cobertura da terra ",
              "id": "Land Cover Dynamics",
              "zh": "????????",
              "ka": "????? ??????? ????????"
          },
          "layers": [{
              "order": 2,
              "id": "TREE_COVER_GAIN",
              "type": "gain",
              "url": "https://earthengine.google.org/static/hansen_2013/gain_alpha/{z}/{x}/{y}.png",
              "technicalName": "tree_cover_gain",
              "legendLayer": [1],
              "label": {
                  "en": "Tree cover gain",
                  "fr": "Gain en couvert arbor?",
                  "es": "Aumento de la cobertura arb?rea",
                  "pt": "Ganho de cobertura arb?rea",
                  "id": "Tree cover gain",
                  "zh": "??????",
                  "ka": "??? ?????? ??????"
              },
              "sublabel": {
                  "en": "(12 years, 30m, global, Hansen/UMD/Google/USGS/NASA)",
                  "fr": "(12 ans, 30m, global, Hansen/UMD/Google/USGS/NASA)",
                  "es": "(12 a?os, 30m, global, Hansen/UMD/Google/USGS/NASA)",
                  "pt": "(12 anos, 30m, global, Hansen/UMD/Google/USGS/NASA)",
                  "id": "(12 years, 30m, global, Hansen/UMD/Google/USGS/NASA)",
                  "zh": "(12 ?, 30?, ????, ??/?????/??/???????(USGS)/?????(NASA))",
                  "ka": "(12 ????????, 30?, ?????????, Hansen/UMD/Google/USGS/NASA)"
              }
          }, {
              "order": 0,
              "id": "TREE_COVER_LOSS 2"
          }]
      },
      "GROUP_LC": {
          "groupType": "default",
          "order": 3,
          "label": {
              "en": "Land Cover",
              "fr": "Couverture des sols",
              "es": "Cobertura terrestre",
              "pt": "Cobertura do Solo",
              "id": "Land Cover",
              "zh": "????",
              "ka": "????? ??????"
          },
          "layers": [{
              "order": 1,
              "id": "INTACTFORESTS_FRAGMENTATION17",
              "type": "webtiled",
              "url": "https://storage.googleapis.com/intactforest_fragmentation/intactforest_fragmentation_17/{level}/{col}/{row}",
              "technicalName": "intactforests_fragmentation17",
              "legendLayer": [0],
              "label": {
                  "en": "Fragmentation 2017"
              },
              "sublabel": {
                  "en": "(Fragmentation 2017)"
              },
              "minYear": 7,
              "maxYear": 20
          }, {
              "order": 2,
              "id": "INTACTFORESTS_ANTHROTONE",
              "type": "webtiled",
              "url": "https://storage.googleapis.com/intactforest_fragmentation/intactforest_anthrotone/{level}/{col}/{row}",
              "technicalName": "anthrotone",
              "legendLayer": [0],
              "label": {
                  "en": "Anthrotone"
              },
              "sublabel": {
                  "en": "(Anthrotone)"
              },
              "minYear": 7,
              "maxYear": 20
          }, {
              "order": 3,
              "id": "INTACTFORESTS_INTACTNESSINDEX",
              "type": "webtiled",
              "url": "https://storage.googleapis.com/intactforest_fragmentation/intactforest_intactnessindex/{level}/{col}/{row}",
              "technicalName": "intactforests_intactnessindex",
              "legendLayer": [0],
              "label": {
                  "en": "Intactnessndex"
              },
              "sublabel": {
                  "en": "(Intactness index)"
              },
              "minYear": 7,
              "maxYear": 20
          }, {
              "order": 4,
              "id": "GLOB_MANGROVE",
              "type": "webtiled",
              "url": "https://{subDomain}.ashbu.cartocdn.com/wri-01/api/v1/map/209485bfcb3eafb435befa0c405242ae:1467735931596/0/{level}/{col}/{row}.png",
              "technicalName": "global_mangroves",
              "legendLayer": [11],
              "label": {
                  "en": "Global Mangrove",
                  "fr": "Global Mangrove",
                  "es": "Global Mangrove",
                  "pt": "Global Mangrove",
                  "id": "Global Mangrove",
                  "zh": "Global Mangrove",
                  "ka": "????????? ????????"
              },
              "subDomains": [0, 1, 2, 3]
          }, {
              "order": 5,
              "id": "IFL",
              "type": "dynamic",
              "url": "https://gis-gfw.wri.org/arcgis/rest/services/forest_cover/MapServer",
              "technicalName": "intact_forest_landscapes_change",
              "layerIds": [0],
              "label": {
                  "en": "intact Forest Landscape",
                  "fr": "Paysage forestier intact",
                  "es": "Paisajes Forestales Intactos",
                  "pt": "Paisagens Florestais Intactas",
                  "id": "Intact Forest Landscape",
                  "zh": "??????",
                  "ka": "??????????? ???? ?????????"
              }
          }]
      },
      "GROUP_Other": {
          "order": 4,
          "label": {
              "en": "Other"
          },
          "layers": [{
              "order": 1,
              "id": "Oth1",
              "type": "dynamic",
              "url": "https://gis-gfw.wri.org/arcgis/rest/services/hydrology/MapServer",
              "layerIds": [2],
              "label": {
                  "en": "Hydrology"
              }
          }, {
              "order": 2,
              "id": "Oth2",
              "type": "dynamic",
              "url": "https://sampleserver6.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer",
              "layerIds": [0],
              "label": {
                  "en": "Roads"
              }
          }]
      },
      "GROUP_BASEMAP": {
          "groupType": "basemap",
          "order": 5,
          "label": {
              "en": "Basemap",
              "fr": "Basemap",
              "es": "Basemap",
              "pt": "Basemap",
              "id": "Basemap",
              "zh": "Basemap",
              "ka": "?????? ????"
          },
          "layers": [{
              "order": 1,
              "id": "landsat",
              "thumbnailUrl": "https://my.gfw-mapbuilder.org/img/basemaps-sdd18a411a3-5bf18f445e58b8766f773184b7741c67.png",
              "templateUrl": "https://d2h71bpqsyf4vw.cloudfront.net/2016/${level}/${col}/${row}.png",
              "years": ["2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016"],
              "title": {
                  "en": "Landsat",
                  "fr": "Landsat",
                  "es": "Landsat",
                  "pt": "Landsat",
                  "id": "Landsat",
                  "zh": "Landsat",
                  "ka": "Landsat"
              }
          }, {
              "order": 2,
              "id": "wri_mono",
              "thumbnailUrl": "https://my.gfw-mapbuilder.org/img/wri_mono.png",
              "title": {
                  "en": "Grey Basemap",
                  "fr": "Mono",
                  "es": "Mono",
                  "pt": "Mono",
                  "id": "Mono",
                  "zh": "Mono",
                  "ka": "Mono"
              }
          }, {
              "order": 3,
              "id": "wri_contextual",
              "thumbnailUrl": "https://my.gfw-mapbuilder.org/img/wri_contextual.png",
              "title": {
                  "en": "Contextual",
                  "fr": "Contextual",
                  "es": "Contextual",
                  "pt": "Contextual",
                  "id": "Contextual",
                  "zh": "Contextual",
                  "ka": "Contextual"
              }
          }]
      },
      "extraLayers": [{
          "order": 10000,
          "id": "MASK",
          "type": "dynamic",
          "url": "https://gis.forest-atlas.org/server/rest/services/country_masks/country_mask_global/MapServer",
          "layerIds": [0],
          "opacity": 0.35
      }, {
          "order": 10001,
          "id": "LEGEND_LAYER",
          "type": "dynamic",
          "url": "https://gis-gfw.wri.org/arcgis/rest/services/legends/MapServer",
          "layerIds": []
      }, {
          "order": 10002,
          "id": "USER_FEATURES",
          "type": "graphic",
          "visible": true
      }]
  }
};
