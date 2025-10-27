
window.LiteWidgets = {
  render() {
    document.querySelectorAll('.lw-bar').forEach(el => {
      let values = JSON.parse(el.dataset.values || "[]");
      el.innerHTML = "";
      let max = Math.max(...values,1);
      values.forEach(v=>{
        let h = (v/max)*100;
        let bar = document.createElement('div');
        bar.className='lw-chart-bar';
        bar.style.height = h+'%';
        bar.style.width = (100/values.length - 2)+'%';
        el.appendChild(bar);
      });
    });

    document.querySelectorAll('.lw-gauge').forEach(el=>{
      let value = parseFloat(el.dataset.value||"0");
      let wrap = document.createElement('div');
      wrap.className='lw-gauge-inner';
      let fill = document.createElement('div');
      fill.className='lw-gauge-fill';
      fill.style.height = Math.min(Math.max(value,0),100)+'%';
      wrap.appendChild(fill);
      el.innerHTML="";
      el.appendChild(wrap);
    });
  }
};
