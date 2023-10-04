const glyphsContainer = document.querySelector('.glyphset-container');
const glyphs = document.querySelectorAll('.glyph');

const mapRange = (value, inputMin, inputMax, outputMin, outputMax) => {
  // Reference:
  // https://openframeworks.cc/documentation/math/ofMath/
  if (Math.abs(inputMin - inputMax) < Number.EPSILON) {
    return outputMin;
  } else {
    var outVal =
      ((value - inputMin) / (inputMax - inputMin)) * (outputMax - outputMin) +
      outputMin;
    return outVal;
  }
};
const getPositionAtCenter = (element) => {
  const { top, left, width, height } = element.getBoundingClientRect();
  return {
    x: left + width / 2,
    y: top + height / 2,
  };
};
const getDistanceBetweenElements = (a, b) => {
  const aPosition = getPositionAtCenter(a);
  const bPosition = getPositionAtCenter(b);

  return Math.hypot(aPosition.x - bPosition.x, aPosition.y - bPosition.y);
};
glyphs.forEach((glyph, glyphIndex) => {
  glyph.addEventListener('mouseover', (e) => {
    const glyphsDistances = [];
    const minGlyphs = [];
    const minWindowConstraint = Math.min(window.innerWidth, window.innerHeight);
    glyphs.forEach((nonHoveredGlyph) => {
      const distanceBetweenElements = getDistanceBetweenElements(
        glyph,
        nonHoveredGlyph
      );
      if (
        distanceBetweenElements <= minWindowConstraint &&
        distanceBetweenElements > minWindowConstraint / 2
      ) {
        minGlyphs.push(nonHoveredGlyph);
      } else if (distanceBetweenElements <= minWindowConstraint / 2) {
        const glyphObj = {
          glyph: nonHoveredGlyph,
          distance: distanceBetweenElements,
        };
        glyphsDistances.push(glyphObj);
      }
    });
    const distances = glyphsDistances.map(({ distance }) => distance);
    const minDistance = Math.min(...distances);
    const maxDistance = Math.max(...distances);
    glyphsDistances.forEach(({ glyph: glyphToSet, distance }) => {
      const mappedWeight = Math.floor(
        mapRange(distance, minDistance, maxDistance, 900, 50)
      );
      gsap.to(glyphToSet, {
        '--font-weight': mappedWeight,
        duration: 0.25,
      });
    });
    minGlyphs.forEach((minGlyph) => {
      gsap.to(minGlyph, {
        '--font-weight': 50,
        duration: 0.25,
      });
    });
  });
});
glyphsContainer.addEventListener('mouseleave', (e) => {
  gsap.to(glyphs, {
    '--font-weight': 300,
    duration: 0.75,
    onStart: function () {
      console.log(this);
    },
  });
});
