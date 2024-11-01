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
  var i = 1;
  function plusSlides() {
    if (i < 13) {
      i++;
    } else {
      i=1;
      $("#img13").hide();
      $("#img1").show();
      $("#dot13").removeClass("active");
    }
  }

  function prevSlides() {
    if (i <= 13 && i > 1) {
      i--;
    } else {
      i = 13;
      $("#img1").hide();
      $("#img13").show();
      $("#dot1").removeClass("active");
    }
  }

    function currentSlide1(n) {
      let active = document.getElementsByClassName('active')[0];
      if(active!=undefined)
      active.classList.toggle('active');
     $("#dot" + n).addClass("active");
     $(".mySlides").hide();
     $("#img" + n).show();
     
    }

  $(".next").on("click", function() {
      n=i;
      currentSlide1(n) + plusSlides();
      $("#img" + i).show();
      $("#img" + (i - 1)).hide();
      $("#dot" + i).addClass("active");
      $("#dot" + (i-1)).removeClass("active");
  });

  $(".prev").on("click", function() {
    prevSlides();
    $("#img" + i).show();
    $("#img" + (i+1)).hide();
    $("#dot" + i).addClass("active");
    $("#dot" + (i+1)).removeClass("active");
  });



  $("#vid1").show();
  var i = 1;
  function plusSlides1() {
    if (i < 5) {
      i++;
    } else {
      i=1;
      $("#vid5").hide();
      $("#vid1").show();
      $("#dot_5").removeClass("active");
    }
  }

  function prevSlides2() {
    if (i <= 5 && i > 1) {
      i--;
    } else {
      i = 5;
      $("#vid1").hide();
      $("#vid5").show();
      $("#dot_1").removeClass("active");
    }
  }

  function currentSlide(n) {
    let active = document.getElementsByClassName('active')[0];
    if(active!=undefined)
    active.classList.toggle('active');
   $("#dot_" + n).addClass("active");
   $(".mySlides1").hide();
   $("#vid" + n).show();
  }

  $(".next-vid").on("click", function() {
      plusSlides1();
      $("#vid" + i).show();
      $("#vid" + (i - 1)).hide();
      $("#dot_" + i).addClass("active");
      $("#dot_" + (i-1)).removeClass("active");
  });

  $(".prev-vid").on("click", function() {
    prevSlides2();
    $("#vid" + i).show();
    $("#vid" + (i+1)).hide();
    $("#dot_" + i).addClass("active");
    $("#dot_" + (i+1)).removeClass("active");
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

