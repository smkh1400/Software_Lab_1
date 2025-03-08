<script>
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault();
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        let errorMessage = document.getElementById("errorMessage");

        if (username !== "correctUsername" || password !== "correctPassword") {
            errorMessage.style.display = "block";
        } else {
            window.location.href = "dashboard.html";  
        }
    });
</script>
