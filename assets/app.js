(function () {
  'use strict';

  // Copy URL buttons
  document.querySelectorAll('.btn-copy').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      var url = btn.getAttribute('data-url');
      if (!url) return;

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(function () {
          showCopied(btn);
        }).catch(function () {
          fallbackCopy(url, btn);
        });
      } else {
        fallbackCopy(url, btn);
      }
    });
  });

  function showCopied(btn) {
    var original = btn.textContent;
    btn.textContent = 'Copied!';
    btn.classList.add('copied');
    setTimeout(function () {
      btn.textContent = original;
      btn.classList.remove('copied');
    }, 1600);
  }

  function fallbackCopy(text, btn) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand('copy');
      showCopied(btn);
    } catch (err) {
      console.warn('Copy failed', err);
    }
    document.body.removeChild(ta);
  }

  // Optional: live filter while typing (client-side on current page only)
  // Full search still goes through the form / PHP.
  var qInput = document.getElementById('q');
  var catSelect = document.getElementById('cat');
  var form = document.getElementById('searchForm');

  if (form) {
    // Debounced submit on Enter is already native; we just improve UX
    var debounceTimer;
    if (qInput) {
      qInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
          e.preventDefault();
          form.submit();
        }
      });
    }
  }

  // Lazy-load toggle (mostly for demo / bandwidth)
  var lazyToggle = document.getElementById('lazyOnly');
  if (lazyToggle) {
    lazyToggle.addEventListener('change', function () {
      document.querySelectorAll('.thumb img').forEach(function (img) {
        if (lazyToggle.checked) {
          img.setAttribute('loading', 'lazy');
        } else {
          img.removeAttribute('loading');
          // force load if needed
          if (!img.complete) {
            var src = img.src;
            img.src = '';
            img.src = src;
          }
        }
      });
    });
  }
})();
