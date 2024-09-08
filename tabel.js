function updateDateTime() {
    var now = new Date();
    var date = now.toLocaleDateString('id-ID'); // Format tanggal sesuai lokal Indonesia
    var time = now.toLocaleTimeString('id-ID'); // Format waktu sesuai lokal Indonesia
    document.getElementById('date-time').innerHTML = date + ' - ' + time;
}

//menambahkan data ke tabel
function AddToTable() {
    var table = document.getElementById("Table_data");
    var row = table.insertRow(0);
    var Date = row.insertCell(0);
    var Time = row.insertCell(1);
    var Temp = row.insertCell(2);
    var Humid = row.insertCell(3);

    const now = new Date();
    const CurrentTime = now.toLocaleTimeString('id-ID');
    const CurrentDate = now.toLocaleDateString('id-ID');

    Date.innerHTML = "CurrentDate";
    Time.innerHTML = "CurrentTime";
    Temp.innerHTML = "result.temperature";
    Humid.innerHTML = "Humidity";
    }