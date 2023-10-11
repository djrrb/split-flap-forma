'use strict';

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script = {
  props: ['weight', 'fontSize', 'italic'],
  data() {
    return {
      axes: {
        weight: {
          label: 'Weight',
          min: 100,
          max: 700,
          default: 400,
          step: 1,
        },
        italic: {
          label: 'Italic',
          min: 0,
          max: 1,
          default: 0,
          step: 0.01,
        },
      },
      features: [
        { name: 'G with beard', setting: 'ss01' },
        { name: 'R with curved leg', setting: 'ss02' },
        { name: 'Double-story a', setting: 'ss03' },
        { name: 'f & r with bar', setting: 'ss04' },
        { name: 'Unsimplified marks', setting: 'ss05' },
      ],
      styles: [
        {
          name: 'Forma DJR Mono Light',
          weight: 100,
          italic: 0,
        },
        {
          name: 'Forma DJR Mono Light Italic',
          weight: 100,
          italic: 1,
        },
        {
          name: 'Forma DJR Mono Regular',
          weight: 400,
          italic: 0,
        },
        {
          name: 'Forma DJR Mono Regular Italic',
          weight: 400,
          italic: 1,
        },
        {
          name: 'Forma DJR Mono Bold',
          weight: 700,
          italic: 0,
        },
        {
          name: 'Forma DJR Mono Bold Italic',
          weight: 700,
          italic: 1,
        },
      ],
    };
  },
};

module.exports = script;
