<template>
  <div class="specimen">
    <form class="specimen__controls">
      <label class="specimen__field">
        <span class="specimen__label-text">Style</span>
        <select class="specimen__input specimen__input--select" data-presets>
          <option
            v-for="style in styles"
            :key="style.name"
            :value="[style.weight, style.italic]"
            :data-weight="style.weight"
            :data-italic="style.italic"
          >
            {{ style.name }}
          </option>
        </select>
      </label>
      <label v-for="axis in axes" :key="axis.label" class="specimen__field">
        <div>
          <span class="specimen__label-text">{{ axis.label }}</span>
          <span class="specimen__label-value">{{ axis.default }}</span>
        </div>
        <input
          type="range"
          :value="axis.default"
          :data-label="axis.label.toLowerCase()"
          :step="axis.step"
          :min="axis.min"
          :max="axis.max"
        />
      </label>
      <fieldset class="specimen__field" data-label="case">
        <span class="specimen__label-text">Case</span>
        <label>
          <input type="radio" name="case" value="uppercase" />
          Uppercase
        </label>
        <label>
          <input type="radio" name="case" value="standard" checked />
          Standard Case
        </label>
      </fieldset>
      <fieldset class="specimen__field" data-features>
        <span class="specimen__label-text">Features</span>
        <div class="specimen__checkbox-group">
          <label v-for="feature of features" :key="feature.setting">
            <input type="checkbox" name="features" :value="feature.setting" />
            {{ feature.name }}<sup> ({{ feature.setting }})</sup>
          </label>
        </div>
      </fieldset>
    </form>
    <div
      class="specimen__text"
      data-text
      :style="`--size: ${fontSize}; --weight: ${weight}; --italic: ${italic}`"
      contenteditable="true"
      spellcheck="false"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
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
</script>

<style></style>
