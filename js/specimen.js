class Specimen {
  constructor(el) {
    this.el = el;
    this.text = el.querySelector('[data-text]');

    this.presets = this.el.querySelector('select[data-presets]');
    this.sliders = {
      weight: this.el.querySelector('[data-label="weight"]'),
      italic: this.el.querySelector('[data-label="italic"]'),
    };
    this.featuresInputs = this.el.querySelector('[data-features]');
    this.caseInputs = this.el.querySelector('[data-case]');

    this.weight = null;
    this.italic = null;
    this.features = [];
    this.uppercase = null;

    this.init();
    this.addListeners();
  }

  init() {
    this.weight = this.sliders.weight.value;
    this.italic = this.sliders.italic.value;
  }
  setVariables() {
    this.text.style.setProperty('--weight', this.weight);
    this.text.style.setProperty('--italic', this.italic);
    this.text.style.setProperty(
      '--features',
      this.features.map((feature) => `'${feature}' 1`).join(', ')
    );
  }
  setSliderValues() {
    this.sliders.weight.value = parseInt(this.weight);
    this.sliders.italic.value = parseInt(this.italic);
  }
  onPresetsChange(e) {
    const [weight, italic] = this.presets.value.split(',');
    this.weight = weight;
    this.italic = italic;

    this.setVariables();
    this.setSliderValues();
  }
  onWeightChange(e) {
    this.weight = this.sliders.weight.value;
    this.setVariables();
  }
  onItalicChange(e) {
    this.italic = this.sliders.italic.value;
    this.setVariables();
  }
  onFeaturesChange(e) {
    const selectedFeatures = [...this.featuresInputs.elements]
      .map((input) => (input.checked ? input.value : null))
      .filter((val) => val);
    this.features = selectedFeatures;
    this.setVariables();
  }
  addListeners() {
    this.presets.addEventListener('change', this.onPresetsChange.bind(this));
    this.sliders.weight.addEventListener('change', this.onWeightChange.bind(this));
    this.sliders.italic.addEventListener('change', this.onItalicChange.bind(this));
    this.featuresInputs.addEventListener('change', this.onFeaturesChange.bind(this));
  }
}

const specimens = document.querySelectorAll('.specimen');

specimens.forEach((specimen) => {
  new Specimen(specimen);
});
