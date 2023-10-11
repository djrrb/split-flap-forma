<template>
  <div>
    <section class="flapper-container">
      <a class="cta-link" href="#">Try</a>
      <a class="cta-link right" href="#"> Buy</a>
      <div class="flapper">
        <input class="header dark XXL" id="display" />
        <input class="header dark XXL" id="display2" />
      </div>
      <div class="bottom-cta">
        <a class="cta-link" href="#">PDF</a>
        <a class="cta-link right" href="#">DJR</a>
      </div>
    </section>
    <section class="content-container">
      <div class="content-text">
        <h2 class="content-emphasis">
          Kinda like helvetica, except for absolutely everything about it
        </h2>
      </div>
      <div class="content-text">
        <div class="text-block right">
          <p>
            Originally released in 1968, Forma was the Italian type foundry
            Nebiolo’s answer to Helvetica. It was created by a team of eight
            designers, led by the legendary Aldo Novarese, that Nebiolo
            assembled to design a more mature and humane neo-grotesque. As a
            result, Forma’s rationality is tempered by its warmth, and its
            trademark single-story a sets it apart from the rest.
          </p>
          <p>
            Issued in metal over a decade after Helvetica and Univers, Forma was
            relatively late to the neutral sans serif game. It never made the
            jump to phototypesetting and virtually disappeared after Nebiolo
            closed its doors in 1978. However, publications designer Roger Black
            always continued to admire the design, and in 2013 asked me to
            revive it for his redesign of Hong Kong Tatler magazine.
          </p>
        </div>
      </div>
      <figure class="content-image">
        <img src="images/comic3.svg" style="background-color: White" />
        <figcaption>
          Original cartoon by Giorgio Cavallo showing Forma. From 'Qui Nebiolo'
          10 (1969).
        </figcaption>
      </figure>
      <figure class="content-image">
        <img src="images/comic1.svg" style="background-color: White" />
      </figure>
      <div class="content-text">
        <div class="text-block">
          <p>
            Forma DJR embodies the peculiar collision of midcentury modernist
            precision and the smudgy realities of metal, ink, and paper. This
            revival is not based on Forma’s original drawings, nor does it try
            to truly capture its designers’ original intent. Instead it brings
            new life to a bygone typographic era, and seeks to recapture
            everything that Roger has loved about Forma for so long.
          </p>
          <p>
            Expert type hunter Indra Kupferschmid obtained a casting of the
            original Forma in lead, and printed fresh proofs for us to use as
            source material for our revival. We found that many of the most
            interesting details were not present in Forma’s original drawings,
            but were instead byproducts of the printing process. Stems that were
            supposed to be straight swelled at either end. Corners that were
            supposed to be sharp were rounded. We believe that Forma comes alive
            in these unintentional details, and worked to incorporate subtle
            bits of unevenness into our digital interpretation.
          </p>
        </div>
      </div>
      <div class="content-text">
        <h2 class="content-emphasis right">
          Seeking the warmth of the printed page.
        </h2>
      </div>
    </section>
    <section class="content-container placeholder">
      Time Table will go here
    </section>
    <section class="content-container">
      <specimen fontSize="17vw" weight="100" italic="0">Waterfall</specimen>
      <specimen fontSize="17vw" weight="100" italic="100">Waterfall</specimen>
      <specimen fontSize="17vw" weight="400" italic="0">Waterfall</specimen>
      <specimen fontSize="17vw" weight="400" italic="100">Waterfall</specimen>
      <specimen fontSize="17vw" weight="700" italic="0">Waterfall</specimen>
      <specimen fontSize="17vw" weight="700" italic="100">Waterfall</specimen>
      <div class="waterfall">
        <div class="controls">
          <form>
            <select id="style">
              <option data-weight="100" data-style="normal">
                Forma DJR Mono Light
              </option>
              <option data-weight="100" data-style="italic">
                Forma DJR Mono Light Italic
              </option>
              <option data-weight="400" data-style="normal">
                Forma DJR Mono Regular
              </option>
              <option data-weight="400" data-style="italic">
                Forma DJR Mono Regular Italic
              </option>
              <option data-weight="700" data-style="normal">
                Forma DJR Mono Bold
              </option>
              <option data-weight="700" data-style="italic">
                Forma DJR Mono Bold Italic
              </option>
            </select>
            <label for="weightRange" class="waterfall-label">weight</label>
            <!-- this will be a slider -->
            <input
              type="range"
              value="0"
              min="100"
              max="700"
              id="weightRange"
            />
            <!--button id="italicToggle" class="textButton">italic</button-->
            <label for="italicRange" class="waterfall-label">italic </label>
            <input type="range" value="0" min="0" max="100" id="italicRange" />
            <!--select id="italicness">
            <option data-italicness="0">0</option>
            <option data-italicness="0.5">50</option>
            <option data-italicness="1">100</option>
          </select>-->
            features
            <select id="features">
              <option>feature 1</option>
              <option>feature 2</option>
              <option>feature 3</option>
            </select>
            <button id="uppercaseToggle" class="textButton">uppercase</button>
            <!--secret checkbox goodness maybe on state becomes uppercase/italic with another visual change?/ -->
          </form>
        </div>
        <div class="example-text">Waterfall</div>
      </div>
    </section>
    <section class="content-container">
      <h2 class="heading">Character Set</h2>
      <div class="glyphset-container">
        <div class="glyph" v-for="glyph in glyphs" :key="glyph">
          {{ glyph }}
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Specimen from './_includes/specimen.vue';
export default {
  components: { Specimen },
};
</script>
