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

$("#img1").show();
var imgIdx = 1; // Distinct variable for images

function plusSlides() {
    if (imgIdx < 13) {
        imgIdx++;
    } else {
        imgIdx = 1;
        $("#img13").hide();
        $("#dot13").removeClass("active");
    }
}

function prevSlides() {
    if (imgIdx > 1) {
        imgIdx--;
    } else {
        imgIdx = 13;
        $("#img1").hide();
        $("#dot1").removeClass("active");
    }
}

function currentSlide1(n) {
    imgIdx = n;
    $(".dot").removeClass("active"); // Clear all dots first
    $("#dot" + n).addClass("active");
    $(".mySlides").hide();
    $("#img" + n).show();
}

$(".next").on("click", function() {
    let oldIdx = imgIdx;
    plusSlides();
    $("#img" + oldIdx).hide();
    $("#dot" + oldIdx).removeClass("active");
    $("#img" + imgIdx).show();
    $("#dot" + imgIdx).addClass("active");
});

$(".prev").on("click", function() {
    let oldIdx = imgIdx;
    prevSlides();
    $("#img" + oldIdx).hide();
    $("#dot" + oldIdx).removeClass("active");
    $("#img" + imgIdx).show();
    $("#dot" + imgIdx).addClass("active");
});


// --- VIDEO SLIDER LOGIC ---
$("#vid1").show();
var videoIdx = 1; // Distinct variable for videos

function resetVideos() {
    $(".video-placeholder").each(function() {
        const vId = $(this).data("video-id");
        if (vId) {
            $(this).html(`
                <img src="https://img.youtube.com/vi/${vId}/maxresdefault.jpg" alt="Thumbnail">
                <div class="play-button-overlay">▶</div>
            `);
        }
    });
    initVideoPlaceholders(); 
}

function initVideoPlaceholders() {
    $(".video-placeholder").off("click").on("click", function() {
        const videoId = $(this).data("video-id");
        $(this).html(`
            <iframe class="youtube-inserted" 
                src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0" 
                frameborder="0" allowfullscreen>
            </iframe>`);
    });
}

function plusSlides1() {
    resetVideos();
    if (videoIdx < 5) {
        videoIdx++;
    } else {
        videoIdx = 1;
        $("#vid5").hide();
        $("#dot_5").removeClass("active");
    }
}

function prevSlides2() {
    resetVideos();
    if (videoIdx > 1) {
        videoIdx--;
    } else {
        videoIdx = 5;
        $("#vid1").hide();
        $("#dot_1").removeClass("active");
    }
}

function currentSlide(n) {
    resetVideos();
    videoIdx = n;
    $(".dot").removeClass("active");
    $("#dot_" + n).addClass("active");
    $(".mySlides1").hide();
    $("#vid" + n).show();
}

$(".next-vid").on("click", function() {
    let oldVidIdx = videoIdx;
    plusSlides1();
    $("#vid" + oldVidIdx).hide();
    $("#dot_" + oldVidIdx).removeClass("active");
    $("#vid" + videoIdx).show();
    $("#dot_" + videoIdx).addClass("active");
});

$(".prev-vid").on("click", function() {
    let oldVidIdx = videoIdx;
    prevSlides2();
    $("#vid" + oldVidIdx).hide();
    $("#dot_" + oldVidIdx).removeClass("active");
    $("#vid" + videoIdx).show();
    $("#dot_" + videoIdx).addClass("active");
});

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

