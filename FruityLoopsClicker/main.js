document.body.style.zoom = 1.0
document.addEventListener("DOMContentLoaded", function() {
    let kolikot = 0;

    let powerHinta = 100;
    let serumHinta = 15;
    let camelHinta = 50;
    let valhallaHinta = 100;
    let fabfilterHinta = 500;
    let distrokidHinta = 2000;
    let spotifyHinta = 10000;

    let powerCount = 1;
    let serumCount = 0;
    let camelCount = 0;
    let valhallaCount = 0;
    let fabfilterCount = 0;
    let distrokidCount = 0;
    let spotifyCount = 0;
    
    let kolikoitaSekunnissa = 0;
    let kolikkoKerroin = 1;
    let voima = 1.8;
    
    const fl = document.getElementById("fl");

    const kolikotDisplay = document.getElementById("kolikot");
    const kolikoitaSekunnissaDisplay = document.getElementById("kolikoita-sekunnissa");

    const power = document.getElementById("power");
    const powerText = document.getElementById("power-teksti");
    const powerCountDisplay = document.getElementById("power-count");
    const powerHintaDisplay = document.getElementById("power-desc");

    const serum = document.getElementById("serum");
    const serumHintaDisplay = document.getElementById("serum-hinta");
    const serumCountDisplay = document.getElementById("serum-count");

    const camel = document.getElementById("camel");
    const camelHintaDisplay = document.getElementById("camel-hinta");
    const camelCountDisplay = document.getElementById("camel-count");

    const valhalla = document.getElementById("valhalla");
    const valhallaHintaDisplay = document.getElementById("valhalla-hinta");
    const valhallaCountDisplay = document.getElementById("valhalla-count");

    const fabfilter = document.getElementById("fabfilter");
    const fabfilterHintaDisplay = document.getElementById("fabfilter-hinta");
    const fabfilterCountDisplay = document.getElementById("fabfilter-count");

    const distrokid = document.getElementById("distrokid");
    const distrokidHintaDisplay = document.getElementById("distrokid-hinta");
    const distrokidCountDisplay = document.getElementById("distrokid-count");

    const spotify = document.getElementById("spotify");
    const spotifyHintaDisplay = document.getElementById("spotify-hinta");
    const spotifyCountDisplay = document.getElementById("spotify-count");

    setInterval(lisays, 100);
    setInterval(updateKolikotDisplay, 1);
    setInterval(updateKolikoitaSekunnissaDisplay, 1);
    setInterval(updatePowerDisplay, 1);

    function lisays() {
        kolikot += kolikoitaSekunnissa*0.1;
    }

    function updateKolikoitaSekunnissaDisplay() {
        kolikoitaSekunnissaDisplay.textContent = `Kolikoita sekunnissa: ${kolikoitaSekunnissa}`
    }

    function updateKolikotDisplay() {
        let tasaKolikot = Math.round(kolikot);
        kolikotDisplay.textContent = `Kolikot: ${tasaKolikot}`;
    }

    function updatePowerDisplay() {
        let kerroin = Math.round(kolikkoKerroin);
        let powerHinta2 = Math.round(powerHinta);
        powerText.textContent = `Klikkausvoima: ${kerroin} kolikkoa/klikkaus`;
        powerHintaDisplay.textContent = `Klikkausvoima (hinta ${powerHinta2} kolikkoa)`;
        powerCountDisplay.textContent = `${powerCount} x`
    }

    function updateSerumDisplay() {
        let serumTasaHinta = Math.round(serumHinta);
        serumHintaDisplay.textContent = `Serum (hinta ${serumTasaHinta} kolikkoa), +1/sekunti`;
        serumCountDisplay.textContent = `${serumCount} x`;
    }

    function updateCamelDisplay() {
        let camelTasaHinta = Math.round(camelHinta);
        camelHintaDisplay.textContent = `CamelCrusher (hinta ${camelTasaHinta} kolikkoa), +2/sekunti`;
        camelCountDisplay.textContent = `${camelCount} x`;
    }

    function updateValhallaDisplay() {
        let valhallaTasaHinta = Math.round(valhallaHinta);
        valhallaHintaDisplay.textContent = `Valhalla Bundle (hinta ${valhallaTasaHinta} kolikkoa), +5/sekunti`;
        valhallaCountDisplay.textContent = `${valhallaCount} x`;
    }

    function updateFabfilterDisplay() {
        let fabfilterTasaHinta = Math.round(fabfilterHinta);
        fabfilterHintaDisplay.textContent = `Fabfilter Bundle (hinta ${fabfilterTasaHinta} kolikkoa), +10/sekunti`;
        fabfilterCountDisplay.textContent = `${fabfilterCount} x`;
    }

    function updateDistrokidDisplay() {
        let distrokidTasaHinta = Math.round(distrokidHinta);
        distrokidHintaDisplay.textContent = `DistroKid (hinta ${distrokidTasaHinta} kolikkoa), +20/sekunti`;
        distrokidCountDisplay.textContent = `${distrokidCount} x`;
    }

    function updateSpotifyDisplay() {
        let spotifyTasaHinta = Math.round(spotifyHinta);
        spotifyHintaDisplay.textContent = `Spotify (hinta ${spotifyTasaHinta} kolikkoa), +50/sekunti`;
        spotifyCountDisplay.textContent = `${spotifyCount} x`;
    }

    fl.addEventListener("click", function() {
        kolikot += kolikkoKerroin;
        fl.classList.add("small-fl");

        setTimeout(() => {
            fl.classList.remove("small-fl");
        }, 100);
    });

    power.addEventListener("click", function() {
        if (kolikot >= powerHinta) {
            kolikkoKerroin = kolikkoKerroin * voima;
            powerCount++;
            kolikot -= powerHinta;
            powerHinta = powerHinta * 1.5;
            updatePowerDisplay();
            }
            power.classList.add("small-fl");

        setTimeout(() => {
            power.classList.remove("small-fl");
        }, 100);
    });

    serum.addEventListener("click", function() {
        if (kolikot >= serumHinta) {
            kolikoitaSekunnissa++;
            serumCount++;
            kolikot -= serumHinta;
            serumHinta = serumHinta * 1.2;
            updateSerumDisplay();
            }
            serum.classList.add("small-fl");

        setTimeout(() => {
            serum.classList.remove("small-fl");
        }, 100);
    });

    camel.addEventListener("click", function() {
        if (kolikot >= camelHinta) {
            kolikoitaSekunnissa += 3;
            camelCount++;
            kolikot -= camelHinta;
            camelHinta = camelHinta * 1.2;
            updateCamelDisplay();
            }
            camel.classList.add("small-fl");

        setTimeout(() => {
            camel.classList.remove("small-fl");
        }, 100);
    });

    valhalla.addEventListener("click", function() {
        if (kolikot >= valhallaHinta) {
            kolikoitaSekunnissa += 5;
            valhallaCount++;
            kolikot -= valhallaHinta;
            valhallaHinta = valhallaHinta * 1.2;
            updateValhallaDisplay();
            }
            valhalla.classList.add("small-fl");

        setTimeout(() => {
            valhalla.classList.remove("small-fl");
        }, 100);
    });

    fabfilter.addEventListener("click", function() {
        if (kolikot >= fabfilterHinta) {
            kolikoitaSekunnissa += 10;
            fabfilterCount++;
            kolikot -= fabfilterHinta;
            fabfilterHinta = fabfilterHinta * 1.2;
            updateFabfilterDisplay();
            }
                fabfilter.classList.add("small-fl");

        setTimeout(() => {
            fabfilter.classList.remove("small-fl");
        }, 100);
    });

    distrokid.addEventListener("click", function() {
        if (kolikot >= distrokidHinta) {
            kolikoitaSekunnissa += 20;
            distrokidCount++;
            kolikot -= distrokidHinta;
            distrokidHinta = distrokidHinta * 1.2;
            updateDistrokidDisplay();
            }
                distrokid.classList.add("small-fl");

        setTimeout(() => {
            distrokid.classList.remove("small-fl");
        }, 100);
    });

    spotify.addEventListener("click", function() {
        if (kolikot >= spotifyHinta) {
            kolikoitaSekunnissa += 50;
            spotifyCount++;
            kolikot -= spotifyHinta;
            spotifyHinta = spotifyHinta * 1.2;
            updateSpotifyDisplay();
            }
            spotify.classList.add("small-fl");

        setTimeout(() => {
            spotify.classList.remove("small-fl");
        }, 100);
    });
});