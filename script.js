window.addEventListener("DOMContentLoaded", function(){
  $("#popupModal").hide();
  setTimeout(function() {
  $("#popupModal").fadeIn("slow");
  }, 1000)
});

$(".close").on("click", function() {
  $("#popupModal").hide();
})


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
 
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


 // --- VIDEO GALLERY LOGIC ---
$("#vid1").show();
var videoIdx = 1; // Renamed to avoid confusion with your image slider 'i'

// Function to handle the High-Res Thumbnail Clicks
function initVideoPlaceholders() {
  $(".video-placeholder").off("click").on("click", function() {
    const videoId = $(this).data("video-id");
    $(this).html(`
      <iframe class="youtube-inserted" 
        src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>`);
  });
}

// Function to reset videos (stop audio) when changing slides
function resetVideos() {
  $(".video-placeholder").each(function() {
    const vId = $(this).data("video-id");
    $(this).html(`
      <img src="https://img.youtube.com/vi/${vId}/maxresdefault.jpg" alt="Thumbnail">
      <div class="play-button-overlay">▶</div>
    `);
  });
  initVideoPlaceholders(); // Re-bind the click event to the new HTML
}

function plusSlides1() {
  resetVideos(); // Stop any playing video
  if (videoIdx < 5) {
    videoIdx++;
  } else {
    videoIdx = 1;
    $("#vid5").hide();
    $("#vid1").show();
    $("#dot_5").removeClass("active");
  }
}

function prevSlides2() {
  resetVideos(); // Stop any playing video
  if (videoIdx <= 5 && videoIdx > 1) {
    videoIdx--;
  } else {
    videoIdx = 5;
    $("#vid1").hide();
    $("#vid5").show();
    $("#dot_1").removeClass("active");
  }
}

function currentSlide(n) {
  resetVideos();
  videoIdx = n; // Update our counter
  $(".dot").removeClass("active");
  $("#dot_" + n).addClass("active");
  $(".mySlides1").hide();
  $("#vid" + n).show();
}

$(".next-vid").on("click", function() {
  plusSlides1();
  $("#vid" + videoIdx).show();
  $("#vid" + (videoIdx === 1 ? 5 : videoIdx - 1)).hide();
  $("#dot_" + videoIdx).addClass("active");
  $("#dot_" + (videoIdx === 1 ? 5 : videoIdx - 1)).removeClass("active");
});

$(".prev-vid").on("click", function() {
  prevSlides2();
  $("#vid" + videoIdx).show();
  $("#vid" + (videoIdx === 5 ? 1 : videoIdx + 1)).hide();
  $("#dot_" + videoIdx).addClass("active");
  $("#dot_" + (videoIdx === 5 ? 1 : videoIdx + 1)).removeClass("active");
});

// Initialize on load
$(document).ready(function() {
  initVideoPlaceholders();
});

  
document.addEventListener("DOMContentLoaded", () => {
	const observer = new IntersectionObserver(entries => {
	  entries.forEach(entry => {
		if (entry.isIntersecting) {
		  entry.target.classList.add('in-view');
		  return;
		}
		entry.target.classList.remove('in-view');
	  });
	});


	const allAnimatedElements = document.querySelectorAll('.animate');


	allAnimatedElements.forEach((element) => observer.observe(element));

});


document.addEventListener("DOMContentLoaded", () => {
	const observer = new IntersectionObserver(entries => {
	  entries.forEach(entry => {
		if (entry.isIntersecting) {
		  entry.target.classList.add('in-view2');
		  return;
		}
		entry.target.classList.remove('in-view2');
	  });
	});
	const allAnimatedElements = document.querySelectorAll('.animate2');
	allAnimatedElements.forEach((element) => observer.observe(element));
}); 


$("#myModal").hide();

$(".gallery-img").click(function() {
  const imageNumber = $(this).data("image");
  $("#modal-image").attr("src", `assets/brett${imageNumber}.jpeg`);
  $("#myModal").show();
});

$("#myModal").click(function() {
  $(this).hide();
});




const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
  const hCaptcha = form.querySelector('textarea[name=h-captcha-response]').value;

    if (!hCaptcha) {
        e.preventDefault();
        alert("Please fill out captcha field");
        return;
    }
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = "<span>Thank you for contacting me!</span>";
            } else {
                console.log(response);
                result.innerHTML = "<span>There was a problem with your submission.<span>";
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "<span>Something went wrong!<span>";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 8000);
        });
});

