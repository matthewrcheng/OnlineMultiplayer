import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";
const supabaseUrl = "https://qqkgqzfxpqvtzjixempy.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxa2dxemZ4cHF2dHpqaXhlbXB5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA1MTgxMTYsImV4cCI6MjA0NjA5NDExNn0.x9azNdGwY2ZKi_Q2hohUjDP7qtVRuWEAA5sAVxJ1TT0";
const supabase = createClient(supabaseUrl, supabaseKey);

async function signUp(email, password) {
    const { user, error } = await supabase.auth.signUp({ email, password });
    if (error) console.error("Error signing up:", error.message);
    else console.log("User signed up:", user);
}

async function signIn(email, password) {
    const { user, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) console.error("Error signing in:", error.message);
    else console.log("User signed in:", user);
}

// Add event listener to sign-up form
document.getElementById('submit-sign-up').addEventListener('click', (e) => {
    e.preventDefault();
    const name = document.getElementById('su-name').value;
    const email = document.getElementById('su-email').value;
    const password = document.getElementById('su-password').value;
    const confirmPassword = document.getElementById('su-confirm-password').value;
    console.log(`Sign-up attempt with name: ${name}, email: ${email}, password: ${password}, and confirm password: ${confirmPassword}`);
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }
    else if (name === "" || email === "" || password === "" || confirmPassword === "") {
        alert('Please fill in all fields');
        return;
    }
    else if (password.length < 4) {
        alert('Password must be at least 4 characters long');
        return;
    }
    else {
        signUp(email, password);
    }
});

// Add event listener to sign-in form
document.getElementById('submit-sign-in').addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.getElementById('si-email').value;
    const password = document.getElementById('si-password').value;
    signIn(email, password);
    console.log(`Sign-in attempt with email: ${email} and password: ${password}`);
});

document.getElementById('sign-up-button').addEventListener('click', () => {
    document.getElementById('sign-in-form').classList.add('hidden');
    document.getElementById('sign-up-form').classList.remove('hidden');
});

document.getElementById('sign-in-button').addEventListener('click', () => {
    document.getElementById('sign-up-form').classList.add('hidden');
    document.getElementById('sign-in-form').classList.remove('hidden');
});
