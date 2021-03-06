window.addEventListener('load', function() {
    document.querySelector('input[type="file"]').addEventListener('change', function() {
        if (this.files && this.files[0]) {
            var img = document.querySelector('img');
            img.onload = () => {
                window.URL.revokeObjectURL(img.src);  // no longer needed, free memory
            }
            img.style.display = "inline-block";
            img.src = window.URL.createObjectURL(this.files[0]); // set src to blob url
            img.style.height = "40vh";
            var button = document.getElementById("theButton");
            init();
            
        }
        
        console.log(img.src)
    });
  });
  