// модальное окно
let open = document.querySelectorAll('#btn');
let close = document.querySelectorAll('#close');
let modal = document.querySelector('#my-modal');

open.forEach(function(button) {
    button.addEventListener("click", function(event) {
      event.preventDefault();
      modal.style.display = 'block';
    })
  });

  close.forEach(function(button) {
    button.addEventListener("click", function(event) {
      event.preventDefault();
      modal.style.display = 'none';
    })
  });

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// tabs

(function () {

    document.querySelector('.tab').classList.remove('active');
    document.querySelector('.tab-panel').classList.add('active');

    function selectPanel(e) {
        let target = e.target.dataset.target;
        document.querySelectorAll('.tab, .tab-panel').forEach(function(el) {
            el.classList.remove('active');
        });
        e.target.classList.add('active');
        document.querySelector('.' + target).classList.add('active');
    } 

    document.querySelectorAll('.tab').forEach(function(el) {
        el.addEventListener('click', selectPanel);
    })
     
        
}());
