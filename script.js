// --- 1. POPUP LOGIC ---
        // Show modal automatically on page load
        window.onload = function() {
            var modal = document.getElementById("welcomeModal");
            modal.classList.add("show");
        };

        // Close modal function
        function closeModal() {
            var modal = document.getElementById("welcomeModal");
            modal.classList.remove("show");
            setTimeout(function() {
                modal.style.display = "none";
            }, 300);
        }

        // --- 2. COLLAPSIBLE LOGIC ---
        var coll = document.getElementsByClassName("collapsible-btn");
        var i;

        for (i = 0; i < coll.length; i++) {
            coll[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var content = this.nextElementSibling;
                if (content.style.display === "block") {
                    content.style.display = "none";
                } else {
                    content.style.display = "block";
                }
            });
        }