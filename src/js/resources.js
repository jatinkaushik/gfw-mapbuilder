import layerKeys from 'constants/LayerConstants';

export default {

  //- NOTE: New Forest Atlas 2.0 Options, These are the raw values coming from ArcGIS Online from
  //- Application Id: ...

  //- General Settings
  webmap: 'e148ac47cd374d9da4d208aacfe690cf',
  title: 'GFW Mapbuilder',
  subtitle: 'Make maps that matter',
  logoUrl: './css/images/gfw-logo.png',
  // logoUrl: 'http://cmr.forest-atlas.org/map/app/images/CMR_flag_new.png',
  logoLinkUrl: 'http://www.minfof.cm/',
  aboutLinkUrl: 'http://www.wri.org/our-work/project/',
  downloadLinkUrl: 'http://data.globalforestwatch.org/',
  printServiceUrl: 'http://gis-forest-atlas.wri.org/arcgis/rest/services/CMR/CMRExportWebMap/GPServer/Export%20Web%20Map',
  maskServiceUrl: 'http://gis-forest-atlas.wri.org/arcgis/rest/services/CMR/CMR_00_Africa/MapServer',
  mapThemeIds: '1c38ba1095fe49e3ba234bf9105c1077;c76d788b7487476bae4d09a4e933be19',
  mapThemes: 'Forest Atlas of Cameroon;Forest Atlas of Equatorial Guinea',
  narrative: '',
  includeSubscribeButton: false,
  includeMyGFWLogin: false,
  //- Language Settings
  language: 'en',
  useAlternativeLanguage: 'true',
  alternativeLanguage: 'fr',
  alternativeLanguageTitle: 'Forest Atlas',
  alternativeLanguageSubtitle: 'Application subtitle',
  alternativeMapThemes: 'Forest Atlas of Cameroon;Forest Atlas of Equatorial Guinea',
  alternativeNarrative: '',
  alternativeWebmapMenuName: 'Land Use',
  //- Documents Settings
  includeDocumentsTab: false,
  documentsDirectory: 'https://wri-public-data.s3.amazonaws.com/forest_atlas/cmr/doc_pdf/',
  documentsMapserver: 'http://54.88.79.102/arcgis/rest/services/CMR/documents_administratifs/MapServer',
  //- Layers/Analysis Settings
  iso: '',
  activeFires: true,
  intactForests: true,
  aboveGroundBiomass: true,
  landCover: true,
  webmapMenuName: 'Land Use',
  //- Restoration Module settings
  restorationModule: false,
  restorationImageServer: 'http://gis-gfw.wri.org/arcgis/rest/services/country_data/ETH_Restoration/ImageServer',
  slopePotentialOptions: 'Potential for commercial plantation on bare soil and shrubland only;Potential for agri-silviculture and agro-silvo-pastoralism, and woodlot;Potential for establishing natural forest only;Potential for restocking degraded natural forest only;Potential for woodlot only;Potential for silvo-pastoralism only;Potential for tree-buffer zone along rivers, lakes and reservoirs only;Potential for commercial plantation as buffer zone around (NF)PAs;Two restoration options identified as having potential;Three or more restoration options identified as having potential',
  slopePotentialColors: 'rgb(234,199,253);rgb(253,178,46);rgb(88,126,15);rgb(210,147,116);rgb(245,208,139);rgb(177,177,36);rgb(26,176,144);rgb(175,15,143);rgb(217,254,199);rgb(255,254,137);',
  restorationOptions: 'establishing natural forest outside of cropland;restocking of degraded natural forest;agri-silviculture and agro-silvo-pastoralism;silvo-pastoralism;woodlot;commercial plantation on bare soil and shrubland;commercial plantation as buffer zone to national forest priority areas and protected areas;tree-based buffer zone along rivers, lakes and reservoirs;',
  restorationOptionsRasterIds: '9;10;6;11;13;8;7;12;',
  slopeClassNames: 'No Data;<= 30%;30 - 60%;> 60%;',
  slopeClassColors: 'rgb(0, 0, 0);rgb(255, 235, 175);rgb(115, 115, 0);rgb(168, 0, 0);',
  treeCoverClassNames: 'No Data;<= 10%;10 - 30%;> 30%;',
  treeCoverClassColors: 'rgb(0, 0, 0);rgb(180, 215, 158);rgb(245, 245, 122);rgb(205, 170, 102);',

  //- The following values are built from the above values, this makes them easier to use in the Application
  //- Based on slopePotentialOptions
  slopeAnalysisPotentialOptions: [
    'Potential for commercial plantation on bare soil and shrubland only',
    'Potential for agri-silviculture and agro-silvo-pastoralism, and woodlot',
    'Potential for establishing natural forest only',
    'Potential for restocking degraded natural forest only',
    'Potential for woodlot only',
    'Potential for silvo-pastoralism only',
    'Potential for tree-buffer zone along rivers, lakes and reservoirs only',
    'Potential for commercial plantation as buffer zone around (NF)PAs',
    'Two restoration options identified as having potential',
    'Three or more restoration options identified as having potential'
  ],
  //- Based on slopePotentialColors
  slopeAnalysisPotentialColors: ['rgb(234,199,253)', 'rgb(253,178,46)', 'rgb(88,126,15)', 'rgb(210,147,116)', 'rgb(245,208,139)', 'rgb(177,177,36)', 'rgb(26,176,144)', 'rgb(175,15,143)', 'rgb(217,254,199)', 'rgb(255,254,137)'],
  //- Based on all the variations of restorationOptions
  restorationModuleOptions: [{
    id: '$9',
    label: 'establishing natural forest outside of cropland'
  }, {
    id: '$10',
    label: 'restocking of degraded natural forest'
  }, {
    id: '$6',
    label: 'agri-silviculture and agro-silvo-pastoralism'
  }, {
    id: '$11',
    label: 'silvo-pastoralism'
  }, {
    id: '$13',
    label: 'woodlot'
  }, {
    id: '$8',
    label: 'commercial plantation on bare soil and shrubland'
  }, {
    id: '$7',
    label: 'commercial plantation as buffer zone to national forest priority areas and protected areas'
  }, {
    id: '$12',
    label: 'tree-based buffer zone along rivers, lakes and reservoirs'
  }],
  //- Based on slopeClassNames and slopeClassColors
  slopeClasses: ['No Data', '<= 30%', '30 - 60%', '> 60%'],
  slopeColors: ['rgb(0, 0, 0)', 'rgb(255, 235, 175)', 'rgb(115, 115, 0)', 'rgb(168, 0, 0)'],
  //- Bsaed on treeCoverClassNames and treeCoverClassColors
  treeCoverClasses: ['No Data', '<= 10%', '10 - 30%', '> 30%'],
  treeCoverColors: ['rgb(0, 0, 0)', 'rgb(180, 215, 158)', 'rgb(245, 245, 122)', 'rgb(205, 170, 102)'],
  //- Built based on title, subtitle, language settings, and map themes
  labels: {
    'en': {
      'title': 'Forest Atlas of Cameroon',
      'subtitle': 'Ministry of Forestry and Wildlife',
      'webmapMenuName': 'Land Use',
      'narrative': '',
      'themes': [{
        'label': 'Forest Atlas of Democratic Republic of Congo',
        'url': 'http://wri.github.io/forest_atlas_template/?appid=edfa3967f09f4236ae9249dd82265687'
      }, {
        'label': 'Forest Atlas of Equatorial Guinea',
        'url': 'http://wri.github.io/forest_atlas_template/?appid=c76d788b7487476bae4d09a4e933be19'
      }]
    },
    'fr': {
      'title': 'Atlas Forestier du Cameroon',
      'subtitle': 'Ministère des Forêts et de la Faune',
      'webmapMenuName': 'Land Use',
      'narrative': '',
      'themes': [{
        'label': 'Testing Congo',
        'url': 'http://wri.github.io/forest_atlas_template/?appid=edfa3967f09f4236ae9249dd82265687'
      }, {
        'label': 'Testing Guinea',
        'url': 'http://wri.github.io/forest_atlas_template/?appid=c76d788b7487476bae4d09a4e933be19'
      }]
    }
  },

  /**
  * NOTE: Below are config related items, they are not configured in AGOL or generated by the template
  ** file, they are here for convenience of editing them or adding more accordions to the app
  */

  /**
  * Layer Config Options, [brackets] = optional
  * if type is anything other than graphic and the layer is not disabled, it must have a url
  * id - {string} - layer Id, must be unique
  * type - {string} - layer type (dynamic, image, feature, tiled, webtiled)
  * [order] - {number} - determines layer order on map, 1 is the bottom and higher numbers on top
  * [label] - {string} - Label in the UI, should be an object with atleast the configured languages prefixed
  * [sublabel] - {string} - Label in the UI, should be an object with atleast the configured languages prefixed
  * [group] - {string} - group in the UI, No group means it won't show in the UI
  * [groupKey] - {string} - Key for the group, do not modify
  * [url] - {string} - Url for the map service, if present the app will attempt to add to the map via the LayerFactory,
  * [disabled] - {boolean} - grey the checkbox out in the UI and prevent user from using it
  * - can also be updated dynamically if a layer fails to be added to the map to block the user from interacting with a down service
  * [legendLayer] - {number} - If this layer service has no legend, you can add a legend to the LEGEND_LAYER and reference its layer ID here
  * [miscellaneous layer params], layerIds, opacity, colormap, inputRange, outputRange
  * - Add any extra layer params as needed, check LayerFactory to see which ones are supported and feel free to add more if necessary
  * - type should be what the layer contructor expects, these are directly passed to Esri JavaScript layer constructors
  */
  layers: {
    en: [{
      id: 'TREE_COVER_LOSS',
      order: 5,
      type: 'image',
      visible: false,
      group: 'Land Cover Dynamics',
      groupKey: layerKeys.GROUP_LCD,
      label: 'Tree cover loss',
      sublabel: '(annual, 30m, global, Hansen/UMD/Google/USGS/NASA)',
      url: 'http://gis-treecover.wri.org/arcgis/rest/services/ForestCover_lossyear_density/ImageServer',
      colormap: [[1, 219, 101, 152]],
      inputRange: [1, 15],
      outputRange: [1],
      legendLayer: 0
    }, {
      id: 'TREE_COVER_GAIN',
      order: 6,
      type: 'tiled',
      visible: false,
      group: 'Land Cover Dynamics',
      groupKey: layerKeys.GROUP_LCD,
      label: 'Tree cover gain',
      sublabel: '(12 years, 30m, global, Hansen/UMD/Google/USGS/NASA)',
      url: 'http://gis-treecover.wri.org/arcgis/rest/services/ForestGain_2000_2012_map/MapServer',
      legendLayer: 1
    }, {
      id: 'ACTIVE_FIRES',
      order: 7,
      type: 'dynamic',
      group: 'Land Cover Dynamics',
      groupKey: layerKeys.GROUP_LCD,
      label: 'Active fires',
      sublabel: '(daily, 1km, global, NASA)',
      url: 'http://gis-potico.wri.org/arcgis/rest/services/Fires/Global_Fires/MapServer',
      layerIds: [0, 1, 2, 3]
    }, {
      id: 'TREE_COVER',
      order: 1,
      type: 'image',
      group: 'Land Cover',
      groupKey: layerKeys.GROUP_LC,
      label: 'Tree cover density',
      sublabel: '(year 2000, 30m global, Hansen/UMD/Google/USGS/NASA)',
      url: 'http://gis-treecover.wri.org/arcgis/rest/services/TreeCover2000/ImageServer',
      colormap: [[1, 0, 179, 0]], // colormap: [[1, 174, 203, 107]],
      inputRange: [30, 101],
      outputRange: [1],
      visible: false,
      opacity: 0.8,
      legendLayer: 2
    }, {
      id: 'LAND_COVER',
      order: 2,
      type: 'dynamic',
      group: 'Land Cover',
      groupKey: layerKeys.GROUP_LC,
      label: 'Land cover',
      url: 'http://gis-gfw.wri.org/arcgis/rest/services/forest_cover/MapServer',
      layerIds: [10],
      rasterId: '$523',
      bounds: [1, 20],
      classes: ['Dense moist forest', 'Submontane forest', 'Mountain forest', 'Edaphic forest', 'Mangrove', 'Forest-savanna mosaic', 'Rural complex and young secondary forest', 'Closed to open deciduous woodland', 'Savanna woodland-Tree savanna', 'Shrubland', 'Grassland', 'Aquatic grassland', 'Swamp grassland', 'Sparse vegetation', 'Mosaic cultivated areas/vegeatation( herbaceous or shrub)', 'Agriculture', 'Irrigated agriculture', 'Bare areas', 'Artificial surfaces and associated areas', 'Water Bodies'],
      colors: ['#3B823D', '#7CA079', '#AAB785', '#355936', '#5BBCF8', '#8BB94B', '#F0F979', '#7B8840', '#CABA4F', '#D3A162', '#FDCA76', '#C1E5DC', '#7AD3AB', '#F3F3AF', '#F6988F', '#FFFFF0', '#FFFFF0', '#A7A7A7', '#F83D48', '#353C92']
    }, {
      id: 'IFL',
      order: 3,
      type: 'dynamic',
      group: 'Land Cover',
      groupKey: layerKeys.GROUP_LC,
      label: 'Intact Forest Landscape',
      url: 'http://gis-gfw.wri.org/arcgis/rest/services/forest_cover/MapServer',
      layerIds: [0]
    }, {
      id: 'AG_BIOMASS',
      order: 4,
      type: 'dynamic',
      group: 'Land Cover',
      groupKey: layerKeys.GROUP_LC,
      label: 'Above ground biomass',
      url: 'http://gis-gfw.wri.org/arcgis/rest/services/forest_cover/MapServer',
      layerIds: [1]
    }, {
      id: 'MASK',
      order: 100,
      type: 'dynamic',
      url: 'http://gis.forest-atlas.org/arcgis/rest/services/country_masks/country_mask_global/MapServer',
      opacity: 0.35,
      layerIds: [0]
    }, {
      id: 'LEGEND_LAYER',
      order: 101,
      type: 'dynamic',
      url: 'http://gis-gfw.wri.org/arcgis/rest/services/legends/MapServer',
      visible: false,
      opacity: 0,
      layerIds: []
    }],
    fr: [{
      id: 'TREE_COVER_LOSS',
      order: 5,
      type: 'image',
      visible: false,
      group: 'Land Cover Dynamics',
      groupKey: layerKeys.GROUP_LCD,
      label: 'Tree cover loss',
      sublabel: '(annual, 30m, global, Hansen/UMD/Google/USGS/NASA)',
      url: 'http://gis-treecover.wri.org/arcgis/rest/services/ForestCover_lossyear_density/ImageServer',
      colormap: [[1, 219, 101, 152]],
      inputRange: [1, 15],
      outputRange: [1],
      legendLayer: 0
    }, {
      id: 'TREE_COVER_GAIN',
      order: 6,
      type: 'tiled',
      visible: false,
      group: 'Land Cover Dynamics',
      groupKey: layerKeys.GROUP_LCD,
      label: 'Tree cover gain',
      sublabel: '(12 years, 30m, global, Hansen/UMD/Google/USGS/NASA)',
      url: 'http://gis-treecover.wri.org/arcgis/rest/services/ForestGain_2000_2012_map/MapServer',
      legendLayer: 1
    }, {
      id: 'ACTIVE_FIRES',
      order: 7,
      type: 'dynamic',
      group: 'Land Cover Dynamics',
      groupKey: layerKeys.GROUP_LCD,
      label: 'Active fires',
      sublabel: '(daily, 1km, global, NASA)',
      url: 'http://gis-potico.wri.org/arcgis/rest/services/Fires/Global_Fires/MapServer',
      layerIds: [0, 1, 2, 3]
    }, {
      id: 'TREE_COVER',
      order: 1,
      type: 'image',
      group: 'Land Cover',
      groupKey: layerKeys.GROUP_LC,
      label: 'Tree cover density',
      sublabel: '(year 2000, 30m global, Hansen/UMD/Google/USGS/NASA)',
      url: 'http://gis-treecover.wri.org/arcgis/rest/services/TreeCover2000/ImageServer',
      colormap: [[1, 0, 179, 0]],
      inputRange: [30, 101],
      outputRange: [1],
      visible: false,
      opacity: 0.8,
      legendLayer: 2
    }, {
      id: 'LAND_COVER',
      order: 2,
      type: 'dynamic',
      group: 'Land Cover',
      groupKey: layerKeys.GROUP_LC,
      label: 'Land cover',
      url: 'http://gis-gfw.wri.org/arcgis/rest/services/forest_cover/MapServer',
      layerIds: [10],
      rasterId: '$523',
      bounds: [1, 20],
      classes: ['Dense moist forest', 'Submontane forest', 'Mountain forest', 'Edaphic forest', 'Mangrove', 'Forest-savanna mosaic', 'Rural complex and young secondary forest', 'Closed to open deciduous woodland', 'Savanna woodland-Tree savanna', 'Shrubland', 'Grassland', 'Aquatic grassland', 'Swamp grassland', 'Sparse vegetation', 'Mosaic cultivated areas/vegeatation( herbaceous or shrub)', 'Agriculture', 'Irrigated agriculture', 'Bare areas', 'Artificial surfaces and associated areas', 'Water Bodies'],
      colors: ['#3B823D', '#7CA079', '#AAB785', '#355936', '#5BBCF8', '#8BB94B', '#F0F979', '#7B8840', '#CABA4F', '#D3A162', '#FDCA76', '#C1E5DC', '#7AD3AB', '#F3F3AF', '#F6988F', '#FFFFF0', '#FFFFF0', '#A7A7A7', '#F83D48', '#353C92']
    }, {
      id: 'IFL',
      order: 3,
      type: 'dynamic',
      group: 'Land Cover',
      groupKey: layerKeys.GROUP_LC,
      label: 'Intact Forest Landscape',
      url: 'http://gis-gfw.wri.org/arcgis/rest/services/forest_cover/MapServer',
      layerIds: [0]
    }, {
      id: 'AG_BIOMASS',
      order: 4,
      type: 'dynamic',
      group: 'Land Cover',
      groupKey: layerKeys.GROUP_LC,
      label: 'Above ground biomass',
      url: 'http://gis-gfw.wri.org/arcgis/rest/services/forest_cover/MapServer',
      layerIds: [1]
    }, {
      id: 'MASK',
      order: 100,
      type: 'dynamic',
      url: 'http://gis.forest-atlas.org/arcgis/rest/services/country_masks/country_mask_global/MapServer',
      opacity: 0.35,
      layerIds: [0]
    }, {
      id: 'LEGEND_LAYER',
      order: 101,
      type: 'dynamic',
      url: 'http://gis-gfw.wri.org/arcgis/rest/services/legends/MapServer',
      visible: false,
      opacity: 0,
      layerIds: []
    }],
    es: [{
      id: 'TREE_COVER_LOSS',
      order: 5,
      type: 'image',
      visible: false,
      group: 'Land Cover Dynamics',
      groupKey: layerKeys.GROUP_LCD,
      label: 'Tree cover loss',
      sublabel: '(annual, 30m, global, Hansen/UMD/Google/USGS/NASA)',
      url: 'http://gis-treecover.wri.org/arcgis/rest/services/ForestCover_lossyear_density/ImageServer',
      colormap: [[1, 219, 101, 152]],
      inputRange: [1, 15],
      outputRange: [1],
      legendLayer: 0
    }, {
      id: 'TREE_COVER_GAIN',
      order: 6,
      type: 'tiled',
      visible: false,
      group: 'Land Cover Dynamics',
      groupKey: layerKeys.GROUP_LCD,
      label: 'Tree cover gain',
      sublabel: '(12 years, 30m, global, Hansen/UMD/Google/USGS/NASA)',
      url: 'http://gis-treecover.wri.org/arcgis/rest/services/ForestGain_2000_2012_map/MapServer',
      legendLayer: 1
    }, {
      id: 'ACTIVE_FIRES',
      order: 7,
      type: 'dynamic',
      group: 'Land Cover Dynamics',
      groupKey: layerKeys.GROUP_LCD,
      label: 'Active fires',
      sublabel: '(daily, 1km, global, NASA)',
      url: 'http://gis-potico.wri.org/arcgis/rest/services/Fires/Global_Fires/MapServer',
      layerIds: [0, 1, 2, 3]
    }, {
      id: 'TREE_COVER',
      order: 1,
      type: 'image',
      group: 'Land Cover',
      groupKey: layerKeys.GROUP_LC,
      label: 'Tree cover density',
      sublabel: '(year 2000, 30m global, Hansen/UMD/Google/USGS/NASA)',
      url: 'http://gis-treecover.wri.org/arcgis/rest/services/TreeCover2000/ImageServer',
      colormap: [[1, 0, 179, 0]],
      inputRange: [30, 101],
      outputRange: [1],
      visible: false,
      opacity: 0.8,
      legendLayer: 2
    }, {
      id: 'LAND_COVER',
      order: 2,
      type: 'dynamic',
      group: 'Land Cover',
      groupKey: layerKeys.GROUP_LC,
      label: 'Land cover',
      url: 'http://gis-gfw.wri.org/arcgis/rest/services/forest_cover/MapServer',
      layerIds: [10],
      rasterId: '$523',
      bounds: [1, 20],
      classes: ['Dense moist forest', 'Submontane forest', 'Mountain forest', 'Edaphic forest', 'Mangrove', 'Forest-savanna mosaic', 'Rural complex and young secondary forest', 'Closed to open deciduous woodland', 'Savanna woodland-Tree savanna', 'Shrubland', 'Grassland', 'Aquatic grassland', 'Swamp grassland', 'Sparse vegetation', 'Mosaic cultivated areas/vegeatation( herbaceous or shrub)', 'Agriculture', 'Irrigated agriculture', 'Bare areas', 'Artificial surfaces and associated areas', 'Water Bodies'],
      colors: ['#3B823D', '#7CA079', '#AAB785', '#355936', '#5BBCF8', '#8BB94B', '#F0F979', '#7B8840', '#CABA4F', '#D3A162', '#FDCA76', '#C1E5DC', '#7AD3AB', '#F3F3AF', '#F6988F', '#FFFFF0', '#FFFFF0', '#A7A7A7', '#F83D48', '#353C92']
    }, {
      id: 'IFL',
      order: 3,
      type: 'dynamic',
      group: 'Land Cover',
      groupKey: layerKeys.GROUP_LC,
      label: 'Intact Forest Landscape',
      url: 'http://gis-gfw.wri.org/arcgis/rest/services/forest_cover/MapServer',
      layerIds: [0]
    }, {
      id: 'AG_BIOMASS',
      order: 4,
      type: 'dynamic',
      group: 'Land Cover',
      groupKey: layerKeys.GROUP_LC,
      label: 'Above ground biomass',
      url: 'http://gis-gfw.wri.org/arcgis/rest/services/forest_cover/MapServer',
      layerIds: [1]
    }, {
      id: 'MASK',
      order: 100,
      type: 'dynamic',
      url: 'http://gis.forest-atlas.org/arcgis/rest/services/country_masks/country_mask_global/MapServer',
      opacity: 0.35,
      layerIds: [0]
    }, {
      id: 'LEGEND_LAYER',
      order: 101,
      type: 'dynamic',
      url: 'http://gis-gfw.wri.org/arcgis/rest/services/legends/MapServer',
      visible: false,
      opacity: 0,
      layerIds: []
    }],
    pt: [{
      id: 'TREE_COVER_LOSS',
      order: 5,
      type: 'image',
      visible: false,
      group: 'Land Cover Dynamics',
      groupKey: layerKeys.GROUP_LCD,
      label: 'Tree cover loss',
      sublabel: '(annual, 30m, global, Hansen/UMD/Google/USGS/NASA)',
      url: 'http://gis-treecover.wri.org/arcgis/rest/services/ForestCover_lossyear_density/ImageServer',
      colormap: [[1, 219, 101, 152]],
      inputRange: [1, 15],
      outputRange: [1],
      legendLayer: 0
    }, {
      id: 'TREE_COVER_GAIN',
      order: 6,
      type: 'tiled',
      visible: false,
      group: 'Land Cover Dynamics',
      groupKey: layerKeys.GROUP_LCD,
      label: 'Tree cover gain',
      sublabel: '(12 years, 30m, global, Hansen/UMD/Google/USGS/NASA)',
      url: 'http://gis-treecover.wri.org/arcgis/rest/services/ForestGain_2000_2012_map/MapServer',
      legendLayer: 1
    }, {
      id: 'ACTIVE_FIRES',
      order: 7,
      type: 'dynamic',
      group: 'Land Cover Dynamics',
      groupKey: layerKeys.GROUP_LCD,
      label: 'Active fires',
      sublabel: '(daily, 1km, global, NASA)',
      url: 'http://gis-potico.wri.org/arcgis/rest/services/Fires/Global_Fires/MapServer',
      layerIds: [0, 1, 2, 3]
    }, {
      id: 'TREE_COVER',
      order: 1,
      type: 'image',
      group: 'Land Cover',
      groupKey: layerKeys.GROUP_LC,
      label: 'Tree cover density',
      sublabel: '(year 2000, 30m global, Hansen/UMD/Google/USGS/NASA)',
      url: 'http://gis-treecover.wri.org/arcgis/rest/services/TreeCover2000/ImageServer',
      colormap: [[1, 0, 179, 0]],
      inputRange: [30, 101],
      outputRange: [1],
      visible: false,
      opacity: 0.8,
      legendLayer: 2
    }, {
      id: 'LAND_COVER',
      order: 2,
      type: 'dynamic',
      group: 'Land Cover',
      groupKey: layerKeys.GROUP_LC,
      label: 'Land cover',
      url: 'http://gis-gfw.wri.org/arcgis/rest/services/forest_cover/MapServer',
      layerIds: [10],
      rasterId: '$523',
      bounds: [1, 20],
      classes: ['Dense moist forest', 'Submontane forest', 'Mountain forest', 'Edaphic forest', 'Mangrove', 'Forest-savanna mosaic', 'Rural complex and young secondary forest', 'Closed to open deciduous woodland', 'Savanna woodland-Tree savanna', 'Shrubland', 'Grassland', 'Aquatic grassland', 'Swamp grassland', 'Sparse vegetation', 'Mosaic cultivated areas/vegeatation( herbaceous or shrub)', 'Agriculture', 'Irrigated agriculture', 'Bare areas', 'Artificial surfaces and associated areas', 'Water Bodies'],
      colors: ['#3B823D', '#7CA079', '#AAB785', '#355936', '#5BBCF8', '#8BB94B', '#F0F979', '#7B8840', '#CABA4F', '#D3A162', '#FDCA76', '#C1E5DC', '#7AD3AB', '#F3F3AF', '#F6988F', '#FFFFF0', '#FFFFF0', '#A7A7A7', '#F83D48', '#353C92']
    }, {
      id: 'IFL',
      order: 3,
      type: 'dynamic',
      group: 'Land Cover',
      groupKey: layerKeys.GROUP_LC,
      label: 'Intact Forest Landscape',
      url: 'http://gis-gfw.wri.org/arcgis/rest/services/forest_cover/MapServer',
      layerIds: [0]
    }, {
      id: 'AG_BIOMASS',
      order: 4,
      type: 'dynamic',
      group: 'Land Cover',
      groupKey: layerKeys.GROUP_LC,
      label: 'Above ground biomass',
      url: 'http://gis-gfw.wri.org/arcgis/rest/services/forest_cover/MapServer',
      layerIds: [1]
    }, {
      id: 'MASK',
      order: 100,
      type: 'dynamic',
      url: 'http://gis.forest-atlas.org/arcgis/rest/services/country_masks/country_mask_global/MapServer',
      opacity: 0.35,
      layerIds: [0]
    }, {
      id: 'LEGEND_LAYER',
      order: 101,
      type: 'dynamic',
      url: 'http://gis-gfw.wri.org/arcgis/rest/services/legends/MapServer',
      visible: false,
      opacity: 0,
      layerIds: []
    }]
  },
  basemaps: {
    en: {
      'landsat': {
        title: 'Landsat',
        thumbnailUrl: 'http://www.globalforestwatch.org/assets/basemaps-s84b6feb159-b5c7519937c9732128e8b42b5865e7c2.png',
        templateUrl: 'https://wri-tiles.s3.amazonaws.com/umd_landsat/2013/${level}/${row}/${col}.png',
        years: [
          '2000',
          '2001',
          '2002',
          '2003',
          '2004',
          '2005',
          '2006',
          '2007',
          '2008',
          '2009',
          '2010',
          '2011',
          '2012',
          '2013'
        ]
      },
      'wri_mono': {
        title: 'WRI Mono',
        thumbnailUrl: './css/images/wri_mono.png',
        mapboxId: 'wri.c974eefc'
      },
      'wri_contextual': {
        title: 'WRI Contextual',
        thumbnailUrl: './css/images/wri_contextual.png',
        mapboxId: 'wri.b71b0f45'
      }
    },
    fr: {
      'landsat': {
        title: 'Landsat',
        thumbnailUrl: 'http://www.globalforestwatch.org/assets/basemaps-s84b6feb159-b5c7519937c9732128e8b42b5865e7c2.png',
        templateUrl: 'https://wri-tiles.s3.amazonaws.com/umd_landsat/2013/${level}/${row}/${col}.png',
        years: [
          '2000',
          '2001',
          '2002',
          '2003',
          '2004',
          '2005',
          '2006',
          '2007',
          '2008',
          '2009',
          '2010',
          '2011',
          '2012',
          '2013'
        ]
      },
      'wri_mono': {
        title: 'WRI Mono',
        thumbnailUrl: './css/images/wri_mono.png',
        mapboxId: 'wri.c974eefc'
      },
      'wri_contextual': {
        title: 'WRI Contextual',
        thumbnailUrl: './css/images/wri_contextual.png',
        mapboxId: 'wri.b71b0f45'
      }
    },
    es: {
      'landsat': {
        title: 'Landsat',
        thumbnailUrl: 'http://www.globalforestwatch.org/assets/basemaps-s84b6feb159-b5c7519937c9732128e8b42b5865e7c2.png',
        templateUrl: 'https://wri-tiles.s3.amazonaws.com/umd_landsat/2013/${level}/${row}/${col}.png',
        years: [
          '2000',
          '2001',
          '2002',
          '2003',
          '2004',
          '2005',
          '2006',
          '2007',
          '2008',
          '2009',
          '2010',
          '2011',
          '2012',
          '2013'
        ]
      },
      'wri_mono': {
        title: 'WRI Mono',
        thumbnailUrl: './css/images/wri_mono.png',
        mapboxId: 'wri.c974eefc'
      },
      'wri_contextual': {
        title: 'WRI Contextual',
        thumbnailUrl: './css/images/wri_contextual.png',
        mapboxId: 'wri.b71b0f45'
      }
    },
    pt: {
      'landsat': {
        title: 'Landsat',
        thumbnailUrl: 'http://www.globalforestwatch.org/assets/basemaps-s84b6feb159-b5c7519937c9732128e8b42b5865e7c2.png',
        templateUrl: 'https://wri-tiles.s3.amazonaws.com/umd_landsat/2013/${level}/${row}/${col}.png',
        years: [
          '2000',
          '2001',
          '2002',
          '2003',
          '2004',
          '2005',
          '2006',
          '2007',
          '2008',
          '2009',
          '2010',
          '2011',
          '2012',
          '2013'
        ]
      },
      'wri_mono': {
        title: 'WRI Mono',
        thumbnailUrl: './css/images/wri_mono.png',
        mapboxId: 'wri.c974eefc'
      },
      'wri_contextual': {
        title: 'WRI Contextual',
        thumbnailUrl: './css/images/wri_contextual.png',
        mapboxId: 'wri.b71b0f45'
      }
    }
  }
};