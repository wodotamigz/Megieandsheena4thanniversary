const hamburger = document.querySelector('.header_hamburger');

const header = document.querySelector('.header');

hamburger.addEventListener("click", function () {
    hamburger.classList.toggle('open');
    header.classList.toggle('active');

});





// time

function abso(a){
  return a - Math.floor(a);
}

function ten(x){
    if((x/10)<1){
        return "0" + x;
    }
    return x;
}

const dy= document.getElementById("y");
const dm= document.getElementById("m");
const dw= document.getElementById("w");
const d= document.getElementById("d");
const dhr= document.getElementById("hr");
const dmin= document.getElementById("min");
const dsec= document.getElementById("sec");


function getCurrentTime(){
  const date = new Date("11/9/2021 00:00:00");
const ms =  Date.now()-date.getTime();

const dayM= ms/(24*3600*1000);

 const hrM= abso(dayM)*24;
    const hr= Math.floor(hrM);
 const minM= abso(hrM)*60;
 const min= Math.floor(minM);

 const secM= abso(minM)*60;
 const sec= Math.floor(secM);

 dhr.innerText = ten(hr);
 dmin.innerText = ten(min);
 dsec.innerText = ten(sec);

let cDate = new Date();
let cMonth = cDate.getMonth();
let cYear = cDate.getFullYear();
let timeC=  dateRange(2021,11,cYear,cMonth);
let tempDay = cDate.getDate() ;

// year count
let countYear = Math.floor(timeC.length/12);

countYear = countYear<10? "0" + countYear : countYear;

dy.innerText = countYear;


// month count

let countMonth = (timeC.length%12);

let monthZero = tempDay<7? true: false;

countMonth=countMonth === 1 && monthZero? 0 : countMonth;

countMonth = countMonth<10? "0" + countMonth : countMonth;

dm.innerText= countMonth;




let tempN = getNdays(cMonth-1,cYear);

tempDay = tempDay>=7?tempDay - 7: tempN -6 + tempDay ;


let countWeek = Math.floor(tempDay/7);
let countDays= tempDay%7;
countWeek = countWeek<10? "0" + countWeek : countWeek;
countDays = countDays<10? "0" + countDays : countDays;

d.innerText = countDays;
dw.innerText = countWeek;
}

function dateRange(startYear,startM, endYear,endM) {
   
    var dates      = [];
  
    for(var i = startYear; i <= endYear; i++) {
      var endMonth = i != endYear ? 11 : parseInt(endM) - 1;
      var startMon = i === startYear ? parseInt(startM)-1 : 0;
      for(var j = startMon; j <= endMonth; j = j > 12 ? j % 12 || 11 : j+1) {
        var month = j+1;
        
        dates.push([i,month]);
      }
    }
    return dates;
  }

 function getNdays(month,year) {
    return new Date(year, month, 0).getDate();
 };

window.setInterval(getCurrentTime,1000);


// scroll

const scroll = document.querySelector(".scroll");

window.addEventListener('scroll',function(){
    const h = document.documentElement.clientHeight *0.5;
   if(window.scrollY > h){
    scroll.classList.remove('inactive-scroll');
       scroll.classList.add('active-scroll');
   }else{
        scroll.classList.remove('active-scroll');
        scroll.classList.add('inactive-scroll');
    
   }
   
})

// spinner

const spinner = document.querySelector('.spinning')
const spinBtn = document.querySelector('.spin-con button')


spinBtn.addEventListener('click',spinWheel)
let  deg = 0;
let newDeg= null;
let prize ;
function spinWheel(){
  let rotateDeg = deg +( (Math.random() * 1000) + 3333) ;
  console.log(rotateDeg)
  let pureDeg = rotateDeg%360;
 
  pureDeg = changeDeg(pureDeg,rotateDeg);
  
  checkDeg(pureDeg);
 if(newDeg) rotateDeg = newDeg;
 console.log(rotateDeg)
  console.log(prize)
  spinBtn.removeEventListener('click',spinWheel)
  spinner.style.transform = `rotate(${rotateDeg}deg)`;
deg = rotateDeg;
newDeg = null;
  setTimeout(function(){
    let winner = document.querySelector(`.spin-con_content:nth-of-type(${prize})`)
    let infoSpin = document.querySelector('.spin-info')
    winner.classList.add('won');
    let wItem = winner.children[0].innerText;
    if(wItem.length<6)wItem = 'a ' + wItem;
    infoSpin.innerText=`Congrats Bae, you will get ${wItem}!`
    // spinBtn.addEventListener('click',spinWheel)
  },5000)
}


function changeDeg(deg,rotateD){
  let degArr = [20.5,69.5,114,159,203,249,293,339.5];
  for (i=0;i<degArr.length;i++){
    if(deg>degArr[i] && deg<(degArr[i]+3)){
      newDeg = rotateD + 8;
      return deg + 8;
    }
    if(deg<degArr[i] && deg>(degArr[i]-3)){
      newDeg = rotateD - 8;
      return deg - 8;
    } 

  }
  return deg;
}

function checkDeg(deg){
   // 20.5,69.5,114,159,203,249,293,339.5
  if(deg>20.5 && deg<69.5){
    prize = '8';
  }else if(deg>69.5 && deg<114){
    prize = '7';
  }else if(deg>114 && deg<159){
    prize = '6';
  }else if(deg>159 && deg<203){
    prize = '5';
  }else if(deg>203 && deg<249){
    prize = '4';
  }else if(deg>249 && deg<293){
    prize = '3';
  }else if(deg>293 && deg<339.5){
    prize = '2';
  }else {
    prize = '1';
  }
}


// gallery zoom

const photosArr = document.querySelectorAll('.gal-box span') ;
const galOv = document.querySelector('.gal-big');
const galOvImg = document.querySelector('.gal-big img');

galOv.addEventListener('click',function(e){
  if(e.target==this){
    galOv.classList.remove('show-galbig');
  }
})

photosArr.forEach((p)=>{
  p.addEventListener('click',function(){
    let src = p.children[0].getAttribute('src');
    galOvImg.setAttribute('src',src)
    galOv.classList.add('show-galbig')
  })
})

// Floating flowers animation
function createSparkle(x, y, container) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.textContent = '✨';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    container.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1500);
}

function createHeartTrail(x, y, container) {
    const heart = document.createElement('div');
    heart.className = 'heart-trail';
    heart.textContent = '💗';
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    container.appendChild(heart);
    setTimeout(() => heart.remove(), 3000);
}

function createFlowerBurst() {
    const flowerContainer = document.querySelector('.floating-flowers');
    if (!flowerContainer) return;

    const flowers = ['🌸', '🌺', '🌹', '🌷', '🌼', '🌻', '🪷', '💮'];
    const bouquets = [
        '💐', '💝', '🎀', // Original bouquets
        '🌺🌸🌹', '🌷💝🌷', '🌹💮🌹', // Custom combinations
        '💝🌸💝', '🎀🌺🎀', '💮🌷💮'  // More combinations
    ];
    
    // Create a beautiful pattern of flowers
    const positions = [
        { left: '10%', delay: 0 },
        { left: '25%', delay: 0.2 },
        { left: '40%', delay: 0.4 },
        { left: '55%', delay: 0.3 },
        { left: '70%', delay: 0.1 },
        { left: '85%', delay: 0.2 },
        // Center bouquets with more varied positions
        { left: '20%', delay: 0.8, isBouquet: true },
        { left: '40%', delay: 1.0, isBouquet: true },
        { left: '60%', delay: 1.2, isBouquet: true },
        { left: '80%', delay: 1.4, isBouquet: true },
        // Extra bouquets for fuller effect
        { left: '30%', delay: 1.6, isBouquet: true },
        { left: '50%', delay: 1.8, isBouquet: true },
        { left: '70%', delay: 2.0, isBouquet: true }
    ];

    // Create each flower/bouquet
    positions.forEach(pos => {
        const element = document.createElement('div');
        element.className = pos.isBouquet ? 'flower-bouquet' : 'flower-particle';
        
        // Select emoji based on type
        if (pos.isBouquet) {
            element.textContent = bouquets[Math.floor(Math.random() * bouquets.length)];
        } else {
            element.textContent = flowers[Math.floor(Math.random() * flowers.length)];
        }
        
        // Position and animate
        element.style.left = pos.left;
        element.style.setProperty('--float-duration', `${6 + pos.delay}s`);
        element.style.animationDelay = `${pos.delay}s`;
        
        flowerContainer.appendChild(element);
        
        // Add sparkles and hearts around bouquets
        if (pos.isBouquet) {
            const addEffects = () => {
                const rect = element.getBoundingClientRect();
                // Create sparkles around the bouquet
                for (let i = 0; i < 3; i++) {
                    const offsetX = Math.random() * 100 - 50;
                    const offsetY = Math.random() * 100 - 50;
                    createSparkle(rect.left + offsetX, rect.top + offsetY, flowerContainer);
                }
                // Add floating hearts
                createHeartTrail(rect.left + rect.width/2, rect.top, flowerContainer);
            };
            
            // Add effects multiple times during the animation
            const effectInterval = setInterval(addEffects, 500);
            setTimeout(() => clearInterval(effectInterval), 3000);
        }

        // Cleanup after animation
        setTimeout(() => {
            element.remove();
        }, (7 + pos.delay) * 1000);
    });
}

// Music controls
function setupMusic() {
    const music = document.getElementById('bgMusic');
    const controlsContainer = document.querySelector('.music-controls-container');
    const musicControl = document.querySelector('.music-control');
    const musicIcon = musicControl.querySelector('i');
    const volumeControl = document.querySelector('.volume-slider');
    const volumeIcon = document.querySelector('.volume-icon');
    let isPlaying = false;
    let lastVolume = 1;

    // Log any errors with the audio
    music.addEventListener('error', (e) => {
        console.error('Audio error:', e);
        console.error('Error details:', music.error);
    });

    // Check if file is loaded
    music.addEventListener('loadeddata', () => {
        console.log('Audio file loaded successfully');
        // Audio is loaded and ready to play
        musicControl.style.opacity = '1';
        volumeControl.style.opacity = '1';
    });

    // Play/Pause functionality
    function togglePlay() {
        console.log('Toggle play clicked');
        if (music.paused) {
            // Try to play
            music.play().then(() => {
                console.log('Playing music');
                musicIcon.className = 'fas fa-pause';
                musicControl.title = 'Pause';
                isPlaying = true;
            }).catch(err => {
                console.error('Play failed:', err);
                musicIcon.className = 'fas fa-play';
                musicControl.title = 'Play';
                isPlaying = false;
            });
        } else {
            // Pause
            console.log('Pausing music');
            music.pause();
            musicIcon.className = 'fas fa-play';
            musicControl.title = 'Play';
            isPlaying = false;
        }
    }

    // Add click event listener to play/pause button
    musicControl.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        togglePlay();
    });

    // Listen for audio play/pause events to update UI
    music.addEventListener('play', () => {
        console.log('Audio played');
        musicIcon.className = 'fas fa-pause';
        musicControl.title = 'Pause';
        isPlaying = true;
    });

    music.addEventListener('pause', () => {
        console.log('Audio paused');
        musicIcon.className = 'fas fa-play';
        musicControl.title = 'Play';
        isPlaying = false;
    });

    // Optional: Start playing when page loads
    document.addEventListener('click', function initPlay(e) {
        if (!isPlaying && e.target !== musicControl && e.target !== volumeControl && e.target !== volumeIcon) {
            togglePlay();
            document.removeEventListener('click', initPlay);
        }
    });

    // Volume control handling
    volumeControl.addEventListener('input', (e) => {
        const value = e.target.value / 100;
        music.volume = value;
        updateVolumeIcon(value);
        lastVolume = value;
    });

    // Volume icon click handling (mute/unmute)
    volumeIcon.addEventListener('click', () => {
        if (music.volume > 0) {
            // If volume is on, mute it
            music.volume = 0;
            volumeControl.value = 0;
            volumeIcon.className = 'fas fa-volume-mute volume-icon';
        } else {
            // If muted, restore to last volume
            music.volume = lastVolume;
            volumeControl.value = lastVolume * 100;
            updateVolumeIcon(lastVolume);
        }
    });

    function updateVolumeIcon(value) {
        if (value >= 0.5) {
            volumeIcon.className = 'fas fa-volume-up volume-icon';
        } else if (value > 0) {
            volumeIcon.className = 'fas fa-volume-down volume-icon';
        } else {
            volumeIcon.className = 'fas fa-volume-mute volume-icon';
        }
    }

    // Show controls immediately and update their state
    controlsContainer.style.display = 'flex';
    
    // Initialize volume
    music.volume = volumeControl.value / 100;
    updateVolumeIcon(music.volume);
}

// Start the flower animation once
function startFlowerAnimation() {
    setTimeout(createFlowerBurst, 500);
    setupMusic(); // Setup music after flowers start
}

// Start animations when page loads
window.addEventListener('load', startFlowerAnimation);

// Anniversary popup handler
window.addEventListener('DOMContentLoaded', function() {
    const popup = document.querySelector('.anniversary-popup');
    const closeBtn = document.querySelector('.popup-close');

    // Show popup after a short delay
    setTimeout(() => {
        popup.classList.add('show');
    }, 1000);

    // Close popup when clicking the button
    closeBtn.addEventListener('click', () => {
        popup.classList.remove('show');
    });

    // Optional: Close when clicking outside
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.classList.remove('show');
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const popup = document.querySelector('.popup-overlay');
    const closeBtn = document.querySelector('.close-popup');
    
    // Show popup when page loads
    setTimeout(() => {
        popup.style.display = 'flex';
    }, 1000);
    
    // Close popup when clicking close button
    closeBtn?.addEventListener('click', () => {
        popup.style.display = 'none';
    });
    
    // Close popup when clicking outside
    popup?.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.style.display = 'none';
        }
    });
})


/* Flower pop-up on load: creates emoji flowers that pop and float up */
(function(){
  function spawnFlowers(n){
    const container = document.getElementById('flower-container');
    if(!container) return;
    const emojis = ['🌸','🌺','🌼','🌷','💐','🌹','❀','✿'];
    for(let i=0;i<n;i++){
      const el = document.createElement('span');
      el.className = 'flower';
      el.textContent = emojis[Math.floor(Math.random()*emojis.length)];
      const size = Math.floor(Math.random()*36) + 18; // 18-54px
      el.style.left = Math.random() * 100 + '%';
      el.style.bottom = (5 + Math.random()*25) + 'vh';
      el.style.fontSize = size + 'px';
      el.style.setProperty('--dur', (3 + Math.random()*3) + 's');
      el.style.setProperty('--delay', (Math.random()*0.8) + 's');
      container.appendChild(el);
      // remove after animation ends
      const removeAfter = (parseFloat(el.style.getPropertyValue('--dur')) + parseFloat(el.style.getPropertyValue('--delay')) + 0.5) * 1000;
      setTimeout(()=>{ el.remove(); }, removeAfter);
    }
  }

  window.addEventListener('load', function(){
    // initial burst
    spawnFlowers(28);
    // follow-up smaller burst for depth
    setTimeout(()=> spawnFlowers(18), 600);
  });
})();