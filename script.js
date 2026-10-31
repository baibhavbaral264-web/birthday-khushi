const screens = document.querySelectorAll(".screen");

function showScreen(number) {
  screens.forEach(screen => {
    screen.classList.remove("active");
  });

  document.getElementById("screen" + number)
    .classList.add("active");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


// STARS

const stars = document.querySelector(".stars");

for (let i = 0; i < 90; i++) {
  const star = document.createElement("span");

  star.className = "star";
  star.textContent = "✦";

  star.style.left = Math.random() * 100 + "%";
  star.style.top = Math.random() * 100 + "%";
  star.style.fontSize = (Math.random() * 12 + 5) + "px";
  star.style.animationDelay = Math.random() * 3 + "s";

  stars.appendChild(star);
}


// FLOATING HEARTS

function createHeart() {
  const heart = document.createElement("span");

  heart.className = "floating-heart";
  heart.textContent = "♥";

  heart.style.left = Math.random() * 100 + "%";
  heart.style.fontSize = (Math.random() * 20 + 12) + "px";

  document.querySelector(".hearts-bg").appendChild(heart);

  setTimeout(() => heart.remove(), 9000);
}

setInterval(createHeart, 900);


// SCREEN 1

document.getElementById("heartButton")
  .addEventListener("click", () => {
    showScreen(2);
  });


// BALLOONS

const balloons = document.querySelectorAll(".balloon");
const toGallery = document.getElementById("toGallery");

balloons.forEach(balloon => {

  balloon.addEventListener("click", () => {

    if (balloon.classList.contains("popped")) return;

    balloon.classList.add("popped");

    const remaining = document.querySelectorAll(
      ".balloon:not(.popped)"
    );

    if (remaining.length === 0) {
      toGallery.classList.remove("hidden");
    }

  });

});


// GALLERY

const photoInput = document.getElementById("photoInput");
const gallery = document.getElementById("gallery");

let photoURLs = [];

photoInput.addEventListener("change", event => {

  const files = Array.from(event.target.files);

  files.forEach(file => {

    if (!file.type.startsWith("image/")) return;

    const url = URL.createObjectURL(file);
    photoURLs.push(url);

    const img = document.createElement("img");

    img.src = url;
    img.alt = "Khushi's memory";
    img.loading = "lazy";

    const empty = gallery.querySelector(".empty-gallery");

    if (empty) empty.remove();

    gallery.appendChild(img);

  });

  photoInput.value = "";

});


// SCREEN 2 TO 3

toGallery.addEventListener("click", () => {
  showScreen(3);
});


// SCREEN 3 TO 4

document.getElementById("toLetter")
  .addEventListener("click", () => {
    showScreen(4);
  });


// OPEN LETTER

const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");

envelope.addEventListener("click", () => {

  envelope.classList.add("hidden");
  letter.classList.remove("hidden");

});


// FINAL SURPRISE

document.getElementById("finalButton")
  .addEventListener("click", () => {

    showScreen(5);
    createConfetti();

  });


// CONFETTI

function createConfetti() {

  const container = document.getElementById("confetti");

  container.innerHTML = "";

  const colors = [
    "#ff8bc7",
    "#ffd166",
    "#a78bfa",
    "#ffffff",
    "#ff5f9e"
  ];

  for (let i = 0; i < 130; i++) {

    const piece = document.createElement("span");

    piece.className = "confetti-piece";

    piece.style.left = Math.random() * 100 + "%";

    piece.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];

    piece.style.animationDelay = Math.random() * 3 + "s";

    container.appendChild(piece);

  }

}


// MUSIC PLAYER

const musicInput = document.getElementById("musicInput");
const music = document.getElementById("birthdayMusic");
const musicToggle = document.getElementById("musicToggle");

let musicURL = null;

musicInput.addEventListener("change", event => {

  const file = event.target.files[0];

  if (!file) return;

  if (musicURL) {
    URL.revokeObjectURL(musicURL);
  }

  musicURL = URL.createObjectURL(file);

  music.src = musicURL;

  music.play()
    .then(() => {
      musicToggle.textContent = "Ⅱ";
    })
    .catch(() => {
      musicToggle.textContent = "▶";
      alert("Tap the play button to start music.");
    });

});

musicToggle.addEventListener("click", () => {

  if (!music.src) {
    alert("Please add your music first!");
    return;
  }

  if (music.paused) {

    music.play()
      .then(() => {
        musicToggle.textContent = "Ⅱ";
      })
      .catch(() => {
        musicToggle.textContent = "▶";
      });

  } else {

    music.pause();
    musicToggle.textContent = "▶";

  }

});

music.addEventListener("pause", () => {
  musicToggle.textContent = "▶";
});

music.addEventListener("play", () => {
  musicToggle.textContent = "Ⅱ";
});


// REPLAY

document.getElementById("restart")
  .addEventListener("click", () => {

    balloons.forEach(balloon => {
      balloon.classList.remove("popped");
    });

    toGallery.classList.add("hidden");

    envelope.classList.remove("hidden");
    letter.classList.add("hidden");

    document.getElementById("confetti").innerHTML = "";

    showScreen(1);

  });
  const startBtn = document.getElementById("startSurprise");
const birthdayMusic = document.getElementById("birthdayMusic");

startBtn.addEventListener("click", function () {

    birthdayMusic.play()
        .then(() => {
            startBtn.innerHTML = "❤️ Enjoy Your Surprise ❤️";
        })
        .catch(error => {
            alert("Music play nahi hua. Please check birthday.mp3 file.");
        });

});
function openLetter() {
    document.getElementById("letterContent")
        .classList.add("show");

    document.getElementById("envelope")
        .style.display = "none";
}

function closeLetter() {
    document.getElementById("letterContent")
        .classList.remove("show");

    document.getElementById("envelope")
        .style.display = "block";
}
function blowCandles() {

    const flame = document.querySelector(".flame");
    const message = document.getElementById("cakeMessage");
    const button = document.getElementById("blowCandlesBtn");
    const container = document.getElementById("confettiContainer");

    if (!flame) return;

    flame.style.display = "none";

    message.innerHTML = "🎉 Happy Birthday Khushi! ❤️";
    button.innerHTML = "❤️ Wish Completed";

    button.disabled = true;

    const colors = ["#ff1493", "#ffd700", "#9b30ff", "#00ced1"];

    for (let i = 0; i < 70; i++) {

        const confetti = document.createElement("span");

        confetti.innerHTML = "🎊";
        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-30px";
        confetti.style.fontSize = "20px";
        confetti.style.zIndex = "9999";
        confetti.style.pointerEvents = "none";

        document.body.appendChild(confetti);

        const duration = 2000 + Math.random() * 2000;

        confetti.animate([
            { transform: "translateY(0) rotate(0deg)", opacity: 1 },
            {
                transform: `translateY(110vh) rotate(${Math.random() * 720}deg)`,
                opacity: 0
            }
        ], {
            duration: duration,
            easing: "ease-in"
        });

        setTimeout(() => confetti.remove(), duration);
    }
}
function openGift() {

    const gift = document.getElementById("giftBox");
    const surprise = document.getElementById("giftSurprise");
    const hint = document.getElementById("giftHint");

    if (gift.classList.contains("open")) {
        return;
    }

    gift.classList.add("open");

    hint.innerHTML = "Your surprise is here! 💖";

    setTimeout(() => {
        surprise.classList.add("show");
    }, 700);
}