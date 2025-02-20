const SUPABASE_URL = "https://wgokrthcxbakqmoksois.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indnb2tydGhjeGJha3Ftb2tzb2lzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAwMTcxNDcsImV4cCI6MjA1NTU5MzE0N30.UjspoapugXQb4UEfNTMHiUIF8rOp8E6gKqRbPLOtqsg";
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

document.getElementById("login-form").addEventListener("submit", async function(event) {
    event.preventDefault();
    
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    
    let { user, error } = await supabase.auth.signInWithPassword({ email: username, password: password });

    if (error) {
        document.getElementById("error-message").innerText = "Login failed!";
    } else {
        window.location.href = "profile.html";
    }
});

// Enable 2FA
document.getElementById("enable-2fa").addEventListener("click", async function() {
    let { error } = await supabase.auth.mfa.enable();
    if (!error) {
        alert("2FA enabled!");
    }
});
