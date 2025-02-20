const supabaseUrl = "YOUR_SUPABASE_URL";
const supabaseKey = "YOUR_SUPABASE_ANON_KEY";
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

document.getElementById("login-form").addEventListener("submit", async (event) => {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const { user, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
        document.getElementById("message").textContent = "Login failed!";
    } else {
        document.getElementById("message").textContent = "Login successful!";
        window.location.href = "profile.html"; // Redirect to profile
    }
});

// Enable 2FA
document.getElementById("enable-2fa").addEventListener("click", async () => {
    const { data, error } = await supabase.auth.mfa.enroll({
        factorType: "totp"
    });

    if (error) {
        document.getElementById("message").textContent = "2FA Setup Failed!";
    } else {
        alert(`Scan this QR Code: ${data.totp.qr_code}`);
    }
});
