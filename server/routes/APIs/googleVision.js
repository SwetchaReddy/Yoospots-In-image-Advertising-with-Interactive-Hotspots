var logoDetails=null;
const Vision = require('@google-cloud/vision');

// Creates a client
const vision = new Vision({
    projectId: 'ase-project-157703',
    keyFilename: 'key.json'
  });

// The name of the image file to annotate
const fileName = '.\\images\\walmart.jpg'

// Prepare the request object
const request = {
  source: {
    filename: fileName
  }
};

vision.logoDetection({ source: { filename: fileName } })
.then((results) => {
  
  const logos = results[0].logoAnnotations;
  console.log('Logos:');
  logos.forEach((logo) => console.log(logo));
})
.catch((err) => {
  console.error('ERROR:', err);
});

// Performs label detection on the image file
vision.labelDetection(request)
  .then((results) => {
    const labels = results[0].labelAnnotations;

    console.log('Labels:');
    labels.forEach((label) => console.log(label.description));
  })
  .catch((err) => {
    console.error('ERROR:', err);
  });

  vision.textDetection({ source: { filename: fileName } })
  .then((results) => {
    const detections = results[0].textAnnotations;
    console.log('Text:');
    detections.forEach((text) => console.log(text));
  })
  .catch((err) => {
    console.error('ERROR:', err);
  });

  vision.documentTextDetection(request)
  .then((results) => {
    const fullTextAnnotation = results[0].fullTextAnnotation;
    console.log(fullTextAnnotation.text);
  })
  .catch((err) => {
    console.error('ERROR:', err);
  });

  vision.imageProperties(request)
  .then((results) => {
    const properties = results[0].imagePropertiesAnnotation;
    const colors = properties.dominantColors.colors;
    colors.forEach((color) => console.log(color));
  })
  .catch((err) => {
    console.error('ERROR:', err);
  });

  vision.cropHints(request)
  .then((results) => {
    const cropHints = results[0].cropHintsAnnotation;

    cropHints.cropHints.forEach((hintBounds, hintIdx) => {
      console.log(`Crop Hint ${hintIdx}:`);
      hintBounds.boundingPoly.vertices.forEach((bound, boundIdx) => {
        console.log(`  Bound ${boundIdx}: (${bound.x}, ${bound.y})`);
      });
    });
  })
  .catch((err) => {
    console.error('ERROR:', err);
  });

  vision.landmarkDetection(request)
  .then((results) => {
    const landmarks = results[0].landmarkAnnotations;
    console.log('Landmarks:');
    landmarks.forEach((landmark) => console.log(landmark));
  })
  .catch((err) => {
    console.error('ERROR:', err);
  });