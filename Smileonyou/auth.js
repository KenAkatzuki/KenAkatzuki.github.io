const SUPABASE_URL = "YOUR_SUPABASE_URL";
const SUPABASE_KEY = "YOUR_SUPABASE_ANON_KEY";
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
