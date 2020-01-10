export default {
  "webmap": "8189599625d44c219e6b7a060a048dc2",
  "title": "Vibrant Oceans Demo",
  "subtitle": "Concept Exploration",
  "logoUrl": "https://programs.wcs.org/Desktopmodules/WCSVega/WCSMapBuilder/wcslogo.png",
  "logoLinkUrl": "https://www.wcs.org",
  "aboutLinkUrl": "",
  "downloadLinkUrl": "",
  "printServiceUrl": "https://gis.forest-atlas.org/server/rest/services/print/ExportWebMap/GPServer/Export%20Web%20Map",
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
  "useAlternativeLanguage": true,
  "alternativeWebmap": "",
  "alternativeLanguage": "fr",
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
  "analysisModules": [],
  "layerPanel": {
    "GROUP_WEBMAP": {
      "order": 1,
      "label": {
        "en": "Reef Data"
      },
      "opacity": 100,
      "layers": []
    },
    "GROUP_Range": {
      "order": 4,
      "label": {
        "en": "Species Data"
      },
      "layers": [{
        "order": 1,
        "id": "MR",
        "type": "dynamic",
        "url": "https://gis.unep-wcmc.org/arcgis/rest/services/marine/WCMC_007_TurtleNesting1999/MapServer",
        "layerIds": [0],
        "visible": false,
        "label": {
          "en": "Turtle Nesting"
        }
      }, {
        "order": 2,
        "id": "MRG",
        "type": "dynamic",
        "url": "https://gis.unep-wcmc.org/arcgis/rest/services/marine/WCMC_013_014_Seagrass_WMS/MapServer",
        "layerIds": [0],
        "visible": false,
        "label": {
          "en": "Sea Grass Distribution"
        }
      }]
    },
    "GROUP_Other": {
      "order": 6,
      "label": {
        "en": "Other"
      },
      "layers": [{
        "order": 1,
        "id": "Oth1",
        "type": "dynamic",
        "url": "https://gis-gfw.wri.org/arcgis/rest/services/hydrology/MapServer",
        "layerIds": [2],
        "visible": false,
        "label": {
          "en": "Hydrology"
        }
      }, {
        "order": 2,
        "id": "Oth2",
        "type": "dynamic",
        "url": "https://sampleserver6.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer",
        "layerIds": [0],
        "visible": false,
        "label": {
          "en": "Roads"
        }
      }, {
        "order": 3,
        "id": "Oth3",
        "type": "dynamic",
        "url": "https://tiles.arcgis.com/tiles/x494PplYsmeeZsYB/arcgis/rest/services/HF2009/MapServer",
        "layerIds": [0],
        "visible": false,
        "label": {
          "en": "Human Footprint"
        }
      }, {
        "order": 4,
        "id": "Oth4",
        "type": "dynamic",
        "url": "https://gis.unep-wcmc.org/arcgis/rest/services/marine/WCMC_035_MeanSeaSurfaceTemperature2015/MapServer",
        "layerIds": [0],
        "visible": false,
        "label": {
          "en": "Mean Sea Surface Temperature"
        }
      }]
    },
    "GROUP_BASEMAP": {
      "groupType": "basemap",
      "order": 200,
      "label": {
        "en": "Basemap",
        "fr": "Basemap",
        "es": "Basemap",
        "pt": "Basemap",
        "id": "Basemap",
        "zh": "Basemap",
        "ka": "áƒ¡áƒáƒ‘áƒáƒ–áƒ áƒ áƒ£áƒ™áƒ"
      },
      "layers": [{
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
      "id": "MASK",
      "type": "dynamic",
      "order": 10000,
      "url": "https://gis.forest-atlas.org/server/rest/services/country_masks/country_mask_global/MapServer",
      "opacity": 0.35,
      "layerIds": [0]
    }, {
      "id": "LEGEND_LAYER",
      "type": "dynamic",
      "url": "https://gis-gfw.wri.org/arcgis/rest/services/legends/MapServer",
      "visible": false,
      "opacity": 0,
      "layerIds": []
    }, {
      "id": "USER_FEATURES",
      "type": "graphic",
      "visible": true
    }]
  }
}