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
          <span class="specimen__label-value">{{
            axis.label === 'Weight' ? weight : italic || axis.default
          }}</span>
        </div>
        <input
          type="range"
          :value="axis.label === 'Weight' ? weight : italic"
          :data-label="axis.label.toLowerCase()"
          :step="axis.step"
          :min="axis.min"
          :max="axis.max"
        />
      </label>
      <fieldset class="specimen__field" data-case>
        <span class="specimen__label-text">Case</span>
        <div class="specimen__row">
          <label class="specimen__icon-button">
            <input class="visually-hidden" type="radio" name="case" value="uppercase" />
            <span class="visually-hidden">Uppercase</span>
            <svg viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m16.7225 6.09 2.652 8.184c.024.084-.006.126-.09.126h-2.496c-.064 0-.104-.03-.12-.09l-.486-1.638h-2.712l-.444 1.632c-.016.064-.058.096-.126.096h-2.484c-.088 0-.118-.042-.09-.126l2.76-8.184c.024-.06.066-.09.126-.09h3.384c.064 0 .106.03.126.09Zm-1.938 1.818-.756 2.748h1.566l-.81-2.748ZM7.40614 6.09l2.65196 8.184c.024.084-.006.126-.08996.126h-2.496c-.064 0-.104-.03-.12-.09l-.486-1.638h-2.712l-.444 1.632c-.016.064-.058.096-.126.096h-2.484c-.088 0-.118002-.042-.09-.126l2.76-8.184c.024-.06.066-.09.126-.09h3.384c.064 0 .106.03.126.09Zm-1.938 1.818-.756 2.748h1.566l-.81-2.748Z"
              />
            </svg>
          </label>
          <label class="specimen__icon-button">
            <input class="visually-hidden" type="radio" name="case" value="standard" checked />
            <span class="visually-hidden">Standard Case</span>
            <svg viewBox="0 0 19 19" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m17.6344 7.31599-.024 3.04801.024 2.94c0 .064-.032.096-.096.096h-2.256c-.064 0-.096-.032-.096-.096l.018-.576c-.216.252-.478.448-.786.588-.304.136-.652.204-1.044.204-.58 0-1.072-.14-1.476-.42-.4-.284-.704-.666-.912-1.146-.208-.484-.312-1.026-.312-1.626 0-.59601.118-1.13801.354-1.62601s.568-.876.996-1.164c.428-.292.93-.438 1.506-.438.34 0 .644.056.912.168.272.112.506.274.702.486l-.036-.432c-.008-.068.024-.102.096-.102h2.334c.064 0 .096.032.096.096Zm-3.42 4.60801c.3 0 .536-.126.708-.378.172-.256.26-.666.264-1.23.008-.57201-.068-.97801-.228-1.21801-.16-.244-.4-.366-.72-.366-.212 0-.392.054-.54.162-.148.104-.262.272-.342.504-.076.232-.114.538-.114.91801 0 .376.038.682.114.918.08.236.192.41.336.522.148.112.322.168.522.168ZM8.40464 5.078l2.66396 8.214c.02.072-.006.108-.078.108H8.46464c-.056 0-.092-.026-.108-.078l-.486-1.65h-2.712l-.45 1.644c-.012.056-.048.084-.108.084h-2.514c-.076 0-.102-.036-.078-.108l2.772-8.214c.02-.052.056-.078.108-.078h3.408c.056 0 .092.026.108.078Zm-1.932 1.83-.756 2.748h1.566l-.81-2.748Z"
              />
            </svg>
          </label>
        </div>
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
