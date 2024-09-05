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

$(".image1").click(function() {
  $("#modal-image").attr("src", "assets/brett1.jpeg");
  $("#myModal").show().click(function() {
    $("#myModal").hide();
  });
});

$(".image2").click(function() {
  $("#modal-image").attr("src", "assets/brett2.jpeg");
  $("#myModal").show().click(function() {
    $("#myModal").hide();
  });
});

$(".image3").click(function() {
  $("#modal-image").attr("src", "assets/brett3.jpg");
  $("#myModal").show().click(function() {
    $("#myModal").hide();
  });
});

$(".image4").click(function() {
  $("#modal-image").attr("src", "assets/brett4.jpeg");
  $("#myModal").show().click(function() {
    $("#myModal").hide();
  });
});

$(".image5").click(function() {
  $("#modal-image").attr("src", "assets/brett5.jpeg");
  $("#myModal").show().click(function() {
    $("#myModal").hide();
  });
});

$(".image6").click(function() {
  $("#modal-image").attr("src", "assets/brett6.jpeg");
  $("#myModal").show().click(function() {
    $("#myModal").hide();
  });
});

$(".image7").click(function() {
  $("#modal-image").attr("src", "assets/brett7.jpeg");
  $("#myModal").show().click(function() {
    $("#myModal").hide();
  });
});

$(".image8").click(function() {
  $("#modal-image").attr("src", "assets/brett8.jpeg");
  $("#myModal").show().click(function() {
    $("#myModal").hide();
  });
});

$(".image9").click(function() {
  $("#modal-image").attr("src", "assets/brett9.jpeg");
  $("#myModal").show().click(function() {
    $("#myModal").hide();
  });
});

$(".image10").click(function() {
  $("#modal-image").attr("src", "assets/brett10.jpeg");
  $("#myModal").show().click(function() {
    $("#myModal").hide();
  });
});

$(".image11").click(function() {
  $("#modal-image").attr("src", "assets/brett11.jpeg");
  $("#myModal").show().click(function() {
    $("#myModal").hide();
  });
});

$(".image12").click(function() {
  $("#modal-image").attr("src", "assets/brett12.jpeg");
  $("#myModal").show().click(function() {
    $("#myModal").hide();
  });
});

$(".image13").click(function() {
  $("#modal-image").attr("src", "assets/brett13.jpeg");
  $("#myModal").show().click(function() {
    $("#myModal").hide();
  });
});


const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
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
                result.innerHTML = "<span>Thank you for contacting me!</span>";
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 8000);
        });
});

