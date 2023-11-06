function showBiodata(name) {
    // Ambil referensi ke elemen "biodataContainer"
    var biodataContainer = document.getElementById("biodataContainer");

    // Template HTML untuk biodata pemain
    var biodataTemplate = `
        <h2>${name}</h2>
        <h3>Informasi Pribadi</h3>
        <p>Nama Lengkap: <span id="biodataFullName">Hyun Bin</span></p>
        <p>Nama Asli: <span id="biodataBirthName">Kim Tae-pyung</span></p>
        <p>Kelahiran: <span id="biodataBirthDate">25 September 1982 (Jamsil-dong, Seoul, Korea Selatan)</span></p>
        <p>Usia: <span id="biodataAge">41 tahun</span></p>
        <p>Tinggi: <span id="biodataHeight">184cm</span></p>
        <p>Golongan Darah: <span id="biodataBloodType">B</span></p>
        <p>Kebangsaan: <span id="biodataNationality">Korea Selatan</span></p>
        <p>Jenis Kelamin: <span id="biodataGender">Pria</span></p>
        <p>Pasangan: <span id="biodataPartner">Son Ye-jin</span></p>
    `;

    // Set isi dari "biodataContainer" dengan template biodata
    biodataContainer.innerHTML = biodataTemplate;

    // Tampilkan "biodataContainer"
    biodataContainer.style.display = "block";
}
