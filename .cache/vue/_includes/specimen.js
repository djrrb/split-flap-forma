'use strict';

var specimen_vue_rollupPluginVue_script = require('./specimen.vue_rollup-plugin-vue_script.js');
var normalizeComponent = require('../node_modules/vue-runtime-helpers/dist/normalize-component.js');

/* script */
const __vue_script__ = specimen_vue_rollupPluginVue_script;
/* template */
var __vue_render__ = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "specimen" },
    [
      _vm._ssrNode(
        '<form class="specimen__controls"><label class="specimen__field"><span class="specimen__label-text">Style</span> <select data-presets class="specimen__input specimen__input--select">' +
          _vm._ssrList(_vm.styles, function (style) {
            return (
              "<option" +
              _vm._ssrAttr("data-weight", style.weight) +
              _vm._ssrAttr("data-italic", style.italic) +
              _vm._ssrAttr("value", [style.weight, style.italic]) +
              ">" +
              _vm._ssrEscape(
                "\n          " + _vm._s(style.name) + "\n        "
              ) +
              "</option>"
            )
          }) +
          "</select></label> " +
          _vm._ssrList(_vm.axes, function (axis) {
            return (
              '<label class="specimen__field"><div><span class="specimen__label-text">' +
              _vm._ssrEscape(_vm._s(axis.label)) +
              '</span> <span class="specimen__label-value">' +
              _vm._ssrEscape(_vm._s(axis.default)) +
              '</span></div> <input type="range"' +
              _vm._ssrAttr("data-label", axis.label.toLowerCase()) +
              _vm._ssrAttr("step", axis.step) +
              _vm._ssrAttr("min", axis.min) +
              _vm._ssrAttr("max", axis.max) +
              _vm._ssrAttr("value", axis.default) +
              "></label>"
            )
          }) +
          ' <fieldset data-label="case" class="specimen__field"><span class="specimen__label-text">Case</span> <label><input type="radio" name="case" value="uppercase">\n        Uppercase\n      </label> <label><input type="radio" name="case" value="standard" checked="checked">\n        Standard Case\n      </label></fieldset> <fieldset data-features class="specimen__field"><span class="specimen__label-text">Features</span> <div class="specimen__checkbox-group">' +
          _vm._ssrList(_vm.features, function (feature) {
            return (
              '<label><input type="checkbox" name="features"' +
              _vm._ssrAttr("value", feature.setting) +
              ">" +
              _vm._ssrEscape("\n          " + _vm._s(feature.name)) +
              "<sup>" +
              _vm._ssrEscape(" (" + _vm._s(feature.setting) + ")") +
              "</sup></label>"
            )
          }) +
          "</div></fieldset></form> "
      ),
      _vm._ssrNode(
        '<div data-text contenteditable="true" spellcheck="false" class="specimen__text"' +
          _vm._ssrStyle(
            null,
            "--size: " +
              _vm.fontSize +
              "; --weight: " +
              _vm.weight +
              "; --italic: " +
              _vm.italic,
            null
          ) +
          ">",
        "</div>",
        [_vm._t("default")],
        2
      ),
    ],
    2
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = "data-v-8c18ce24";
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__ = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    undefined,
    undefined
  );

module.exports = __vue_component__;
