import Highway from '@dogstudio/highway';

// Import Transitions
import Fade from 'Content/js/fade.js';

// Call Highway.Core once.
const H = new Highway.Core({
  transitions: {
    default: Fade
  }
});