import { updateDesc } from "./update-desc.js";
import { updateImage } from "./update-image.js";
import { updateTitle } from "./update-job.js";
import { updateName } from "./update-name.js";

export function updateSlide(position){
    updateName(position);
    updateTitle(position);
    updateDesc(position);
    updateImage(position);
  }