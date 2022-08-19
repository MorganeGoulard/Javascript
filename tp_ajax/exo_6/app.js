import { updateSlide } from "./component/update-slide.js";
import { table } from "./constant/table.js";


const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');

  let position = 0;
  updateSlide(position);

  btnPrev.addEventListener('click', function()
  {
    if(position === 0)
    {
        position = table.length - 1;
    }
    else
    {
        position = position - 1;
    }
    
    updateSlide(position);
  });

  btnNext.addEventListener('click', function()
  {
    if(position === table.length - 1)
    {
        position = 0;
    }
    else
    {
        position = position + 1
    }

    updateSlide(position);
  });