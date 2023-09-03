const SUPABASE_URL = 'https://zxgctpdtgmbjadvzamfe.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp4Z2N0cGR0Z21iamFkdnphbWZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA3MzI5NjEsImV4cCI6MjAwNjMwODk2MX0.Q4qNk4-hqo45PeqnKkz3I-JWnIv7IpUaFAojgUYwSoA'

const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

async function loadData() {
    
    let { data, error } = await _supabase
    .rpc('get_random_culture')
    console.log(data);
    if(!error) {
        const cultureName = document.getElementById("culture-name");
        cultureName.textContent = data[0]["name"];

        const cultureDesc = document.getElementById("culture-description");
        cultureDesc.textContent = data[0]["description"];

        const cultureUrl = document.getElementById("culture-url")
        cultureUrl.href = data[0]["url"];

        const imageUrl = document.getElementById("img-url");
        imageUrl.src = data[0]["img_url"];

        const imageSource = document.getElementById("img-source");
        imageSource.textContent = data[0]["source"];
    }
}
loadData()
